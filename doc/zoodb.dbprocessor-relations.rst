Database relations
------------------


.. code::

   import { RelationsPopulator } from '@phfaist/zoodb/dbprocessor/relations';



Relation specification objects are usually attached to an object schema and
specify information about a relationship about that object to another object.
Relation specification objects may have the following fields:

- `object_field`: the fully qualified field name where this relation is
  specified.  For instance, a `person` object might contain a field
  `relations.parents` listing relationships to other parent person objects.  In
  this case, set `object_field: 'relations.parents'`.

- `to_object_type`: the type of the target object which is being referenced.
  For instance, a `person` object might contain relationships to other parent
  person objects; in this case, set `to_object_type: 'person'`.

- `allow_null`: a boolean value specifying whether or not the field value can be
  `null`.  The value might signify that there exists no target object that
  fulfills this relationship.  By default, `allow_null` is false.

- `relation_primary_key_field`: the name of the field within each relation
  object that holds the ID (primary key) of the target object.  For example,
  if each element of the `relations.parents` array has a `person_id` field,
  set `relation_primary_key_field: 'person_id'`.  The special value `true`
  means the relation object is itself the target ID (a shorthand form where no
  wrapper object is used).

- `relation_add_object_field`: if set, the resolved target object will be
  stored back into the relation object under this field name.  For example,
  setting `relation_add_object_field: 'person'` causes the full person object
  to be inserted as `relation_object.person`.  This field is computed
  automatically; mark it as `_auto_populated: true` in the schema.

- `backreference`: if set, a back-reference entry is added to the target object
  for each forward relation.  The value is an object with:

  - `field`: *(required)* the field on the target object type that will receive
    the list of back-reference entries.  Mark this field as
    `_auto_populated: true` in the target object's schema.

  - `relation_primary_key_field`: the field name used inside each
    back-reference entry to store the referring object's ID.  Defaults to
    ``<source_object_type>_id``.

  - `relation_object_field`: the field name used inside each back-reference
    entry to store the actual referring object.  Defaults to
    ``<source_object_type>``.





.. js:autoclass:: src/dbprocessor/relations.ZooRelation
   :short-name:
   :members:

.. js:autoclass:: src/dbprocessor/relations.RelationsPopulator
   :short-name:
   :members:



