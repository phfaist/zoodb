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
   

Todo, doc.........


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

