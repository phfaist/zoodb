General Utilities
=================


Object fields and schema inspection
-----------------------------------

.. code::

   import {
     get_field_schema, iterfield, getfield, setfield, concatlistfield
   } from '@phfaist/zoodb/util/getfield';

   import {
     iter_object_fields_recursive, iter_schema_fields_recursive,
   } from '@phfaist/zoodb/util/objectinspector';

   // all the above symbols can also be imported as
   // "import ... from '@phfaist/zoodb/util' "
   

.. js:autofunction:: src/util/getfield.get_field_schema
   :short-name:

.. js:autofunction:: src/util/getfield.iterfield
   :short-name:

.. js:autofunction:: src/util/getfield.getfield
   :short-name:

.. js:autofunction:: src/util/getfield.setfield
   :short-name:

.. js:autofunction:: src/util/getfield.concatlistfield
   :short-name:

.. js:autofunction:: src/util/objectinspector.iter_object_fields_recursive
   :short-name:

.. js:autofunction:: src/util/objectinspector.iter_schema_fields_recursive
   :short-name:

.. js:autofunction:: src/util/objectinspector.copy_object_structure
   :short-name:


Miscellaneous utilities
-----------------------

.. code::

   import {
     promisify, promisifyMethods, timeout
   } from '@phfaist/zoodb/util/prify';

   import { escapeRegExp } from '@phfaist/zoodb/util/rx';

   import { url_has_protocol, path_or_url_to_url } from '@phfaist/zoodb/util/url';

   import {
     nCmp, cmp, makeLexicographicCompareFn
   } from '@phfaist/zoodb/util/lexicographic';

   // all the above symbols can also be imported as
   // "import ... from '@phfaist/zoodb/util' "


.. js:autofunction:: src/util/prify.promisify
   :short-name:

.. js:autofunction:: src/util/prify.promisifyMethods
   :short-name:

.. js:autofunction:: src/util/prify.timeout
   :short-name:

.. js:autofunction:: src/util/rx.escapeRegExp
   :short-name:

.. js:autofunction:: src/util/url.url_has_protocol
   :short-name:

.. js:autofunction:: src/util/url.path_or_url_to_url
   :short-name:

The module also exports two pre-built comparator values:

- ``nCmp`` — a three-way numeric comparator: returns ``-1``, ``0``, or ``1``.
- ``cmp`` — an object with four ready-to-use comparators: ``cmp.auto``
  (detects type and compares accordingly), ``cmp.string`` (locale-aware string
  comparison), ``cmp.int`` (integer comparison via ``parseInt``), and
  ``cmp.number`` (floating-point comparison via ``parseFloat``).

.. js:autofunction:: src/util/lexicographic.makeLexicographicCompareFn
   :short-name:


Splitting a ‘prefix:label’ string
---------------------------------

.. code::

   import { split_prefix_label } from '@phfaist/zoodb/util/prefixlabel';

   // the above symbol can also be imported as
   // "import ... from '@phfaist/zoodb/util' "


.. js:autofunction:: src/util/prefixlabel.split_prefix_label
   :short-name:


HTML Javascript template literals
---------------------------------

.. code::

   import { sqzhtml } from '@phfaist/zoodb/util/sqzhtml';

   // the above symbol can also be imported as
   // "import ... from '@phfaist/zoodb/util' "


.. js:autofunction:: src/util/sqzhtml.sqzhtml
   :short-name:

