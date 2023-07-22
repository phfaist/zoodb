//
// THIS CODE IS ADAPTED FROM https://github.com/ptarjan/node-cache
// (BSD 2-Clause) Thanks!
//
// Adapted from version f9d07a96d133b6fa1cd80864ad938ead91a8630a 2022-08-28 
//

//
// Main changes (PhF, 2022):
//
// - removed the setTimeout() events.  Timeouts are only used when saving and
//   re-loading cache.
//
// - added the has() and get_full_cache() method
//

'use strict';


function Cache () {
    var _cache = Object.create(null);
    var _hitCount = 0;
    var _missCount = 0;
    var _size = 0;
    var _debug = false;

    this.put = function(key, value, time) {
        if (_debug) {
            console.log('caching: %s = %j (@%s)', key, value, time);
        }

        if (typeof time !== 'undefined' && (typeof time !== 'number' || isNaN(time) || time < 0)) {
            throw new Error('Cache timeout must be a positive number');
        }
        //   else if (typeof timeoutCallback !== 'undefined' && typeof timeoutCallback !== 'function') {
        //   throw new Error('Cache timeout callback must be a function');
        // }

        var oldRecord = _cache[key];
        if (oldRecord) {
            //clearTimeout(oldRecord.timeout);
        } else {
            _size++;
        }

        var record = {
            value: value,
            expire: time + Date.now()
        };

        // if (!isNaN(record.expire)) {
        //   record.timeout = setTimeout(function() {
        //     _del(key);
        //     if (timeoutCallback) {
        //       timeoutCallback(key, value);
        //     }
        //   }.bind(this), time);
        // }

        _cache[key] = record;

        return value;
    };

    this.del = function(key) {
        var canDelete = true;

        var oldRecord = _cache[key];
        if (oldRecord) {
            // clearTimeout(oldRecord.timeout);
            // if (!isNaN(oldRecord.expire) && oldRecord.expire < Date.now()) {
            //   canDelete = false;
            // }
        } else {
            canDelete = false;
        }

        if (canDelete) {
            _del(key);
        }

        return canDelete;
    };

    function _del(key){
        _size--;
        delete _cache[key];
    }

    this.clear = function() {
        // for (var key in _cache) {
        //   clearTimeout(_cache[key].timeout);
        // }
        _size = 0;
        _cache = Object.create(null);
        if (_debug) {
            _hitCount = 0;
            _missCount = 0;
        }
    };

    this.has = function(key) {
        var data = _cache[key];
        return (typeof data != 'undefined'); // && (isNaN(data.expire) || data.expire >= Date.now()));
    };

    this.get_full_cache = function (key) {
        return Object.assign({}, _cache);
    }

    this.get = function(key) {
        var data = _cache[key];
        if (typeof data != "undefined") {
            //
            // Items never expire in get() calls, because we want items to still be in
            // the cache when we need them after fetching them while the zoo is being
            // processed!  Expired items are purged either upon load/save or upon
            // explicit call of purge_expired().
            //
            // if (isNaN(data.expire) || data.expire >= Date.now()) {
            if (_debug) _hitCount++;
            return data.value;
            // } else {
            //   // free some space
            //   if (_debug) _missCount++;
            //   _size--;
            //   delete _cache[key];
            // }
        } else if (_debug) {
            _missCount++;
        }
        return null;
    };

    this.purge_expired = function() {
        let to_remove = [];
        let now = Date.now();
        for (const [key,data] of Object.entries(_cache)) {
            if (!isNaN(data.expire) && data.expire < now) {
                // Item has expired, remove it.  (But let's not alter the object while
                // we're still iterating over it, just to be safe.)
                to_remove.push(key);
            }
        }
        _size -= to_remove.length;
        for (const k of to_remove) {
            delete _cache[k];
        }
    };

    this.size = function() {
        return _size;
    };

    this.memsize = function() {
        var size = 0,
            key;
        for (key in _cache) {
            size++;
        }
        return size;
    };

    this.debug = function(bool) {
        _debug = bool;
    };

    this.hits = function() {
        return _hitCount;
    };

    this.misses = function() {
        return _missCount;
    };

    this.keys = function() {
        return Object.keys(_cache);
    };

    this.exportJson = function() {
        var plainJsCache = {};

        var now = Date.now();

        // Discard the `timeout` property.
        // Note: JSON doesn't support `NaN`, so convert it to `'NaN'`.
        for (var key in _cache) {
            var record = _cache[key];
            if (!isNaN(record.expire) && record.expire < now) {
                // don't export expired entries
                continue;
            }
            plainJsCache[key] = {
                value: record.value,
                expire: record.expire || 'NaN',
            };
        }

        return JSON.stringify(plainJsCache);
    };

    this.importJson = function(jsonToImport, options) {
        var cacheToImport = JSON.parse(jsonToImport);
        var currTime = Date.now();

        var skipDuplicates = options && options.skipDuplicates;

        for (var key in cacheToImport) {
            if (cacheToImport.hasOwnProperty(key)) {
                if (skipDuplicates) {
                    var existingRecord = _cache[key];
                    if (existingRecord) {
                        if (_debug) {
                            console.log('Skipping duplicate imported key \'%s\'', key);
                        }
                        continue;
                    }
                }

                var record = cacheToImport[key];

                // record.expire could be `'NaN'` if no expiry was set.
                // Try to subtract from it; a string minus a number is `NaN`, which is perfectly fine here.
                var remainingTime = record.expire - currTime;

                if (remainingTime <= 0) {
                    // Delete any record that might exist with the same key, since this key is expired.
                    this.del(key);
                    continue;
                }

                // Remaining time must now be either positive or `NaN`,
                // but `put` will throw an error if we try to give it `NaN`.
                remainingTime = remainingTime > 0 ? remainingTime : undefined;

                this.put(key, record.value, remainingTime);
            }
        }

        return this.size();
    };
}

// module.exports = new Cache();
// module.exports.Cache = Cache;


// PhF
const one_day = 1000 * 3600 * 24;


export { Cache, one_day };
