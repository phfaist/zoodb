.. _object-schemas:

Object schemas
==============

Schemas define a structure of object fields and allowed values associated with a
specific object type.  Schemas are specified as `JSON Schema
<https://jsonschema.org/>`_ data structures.

For instance, a very simple schema to store a *person* object could look
something like this (in YAML code):

.. code:: yaml
   
    # Schema for an object of type 'person'

    $schema: "http://json-schema.org/draft-06/schema"
    type: object
    additionalProperties: false
    required: ['person_id', 'name', ]

    _zoo_primarykey: 'person_id'

    properties:
    
      # every person entry must have a unique id which will never change.
      person_id:
        type: string
        pattern: '^[a-z0-9_.-]+$'
    
      name:
        type: string
        _flm: standalone
    
      biography:
        type: string
        _flm: full
    
    

Data types and values validation
--------------------------------

The schema should conform to standard JSON schema.  You can specify allowed
fields, allowed value types, allowed patterns for strings, etc.


Primary key field
-----------------

You can specify which field of the object should be used as the object's unique
identifier ("primary key").  Set the global schema field `_zoodb_primarykey:` to
the name of the field you'd like to use as unique identifier.


Autopopulated fields
--------------------

Some fields are meant to be populated automatically by some database processor.
You can mark such fields with `_auto_populated: true`.  In this case, no data is
expected to be provided when loading the object raw data.

BUG/FIXME: Enforce no values in `_auto_populated` fields at validation time!!


Flexible Latex-like Markup (FLM) strings
----------------------------------------

String values can be marked to be parsed as Flexible Latex-like Markup (FLM)
content.  Use the schema field `_flm:` to indicate that this is the case.

The database processor :js:class:`FLMSimpleContentCompiler` (which can be
installed via a :js:class:`ZooFLMProcessor` instance) will then detect which
fields are FLM markup and compile them accordingly into FLM fragment objects.

If the field `_flm:` is absent, if `_flm: false`, or if `_flm: null`, then FLM
is not enabled.

If you set `_flm: true` or `_flm: 'full'`, then full FLM parsing is available,
including code that might pin down labels and make use of cross-references.

If you set `_flm: 'standalone'`, then only standalone-mode FLM code is accepted.
See FLM's documentation for standalone mode.

You can also specify whether or not to enable FLM parsing and whether or not to
enable standalone mode parsing by specifying an object:

.. code:: yaml

    _flm:
      enabled: true|false
      standalone: true|false



Relationships to other objects
------------------------------

An important feature of zoos is that they specify relationships between objects.
E.g., which error-correcting codes are special cases of which other
error-correcting codes is an important relationship feature in the `Error
Correction Zoo <https://errorcorrectionzoo.org/>`_.

You can specify relationships between objects with a global `_zoo_relations:`
field.  Relationship information specified here will be picked up by the
:js:class:`RelationsPopulator` database processor.  The processor will then turn
field references by identifier into actual object references to the relevant
objects.  The processor can also place backreferences where required, etc.

The global `_zoo_relations:` field should be a list of objects, each describing
a relationship.  Each is referred to as a *relation specification object*.  For
example:

.. code:: yaml

  # schema
  [...]

  _zoo_relations:
    - object_field: 'relations.parents'
      to_object_type: 'person'
      relation_primary_key_field: 'person_id'
      relation_add_object_field: 'person'
      backreference:
        field: 'relations.children'

    [ ... more relation specification objects can be added here ... ]

  properties:

    [...]

    relations:
      type: object
      additionalProperties: false
      properties:

        parents:
          type: array
          items:
            type: object
            required: ['person_id']
            additionalProperties: false
            properties:
              person_id:
                _single_line_string: True
                type: string

        # automatically populated field, don't specify value manually:
        children:
          _auto_populated: true
          type: array
          items:
            type: object
  

The code above specifies that the field `relations.parents` is a reference to
another `person` object specified in a field `relations.parents[].person_id`.
The `relations.parents` object will be extended to include a field `person` with
a reference to the corresponding person object.  Furthermore, the field
`relations.children` on the target object will be a list of backreferences; each
will be a copy of the relationship object (`relations.parents[]`) but with the
`parent_id` and `parent` fields set to the referring object.

See the documentation for the :class:`RelationsPopulator` database processor
for how to specify relationships with *relation spec objects*.



Additional annotations intended for editors
-------------------------------------------

The field `_description: <string>` is intented to convey a meaningful
description of the contents that should be provided in this field.

For string values, the field `_single_line_string: <boolean>` should provide an
indication as to whether the value is expected to hold on a single line (e.g.,
an identifier, or a short description), or if it is a block of text that can
span multiple lines.  This field does not contribute to validation of the field
value.  A GUI editor should however inspect this field and provide a
correspondingly appropriate edit widget.
