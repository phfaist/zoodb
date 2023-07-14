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

- ............ continue documenting ..................





.. js:autoclass:: src/dbprocessor/relations.ZooRelation
   :short-name:
   :members:

.. js:autoclass:: src/dbprocessor/relations.RelationsPopulator
   :short-name:
   :members:



