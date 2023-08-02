Overview of ZooDb
=================

The purpose of `ZooDb` is to load a fairly small-scale database into memory in a
way that can be processed to build, e.g., a graph of relations, compute
statistics, etc.  Once in memory, you can use this information to build a
website, compile a single reference PDF document, build an application that
browses this information, etc.

A use case for the `ZooDb` library is the following:

* Collect and read YAML (or JSON) files recursivly inside a given folder, and
  build an internal object structure;

* Process relations between objects;

* Output a static website using the `Eleventy static website generator
  <https://11ty.dev/>`_.

The `ZooDb` is written in JavaScript (ES6).  See :ref:`why-js` for more
information.


Features
--------

The `ZooDb` library is geared towards providing the following features:

* Data files can be specified as YAML files, which are both human and machine
  readable.  This enables you to keep your database under version control, have
  tight control over differences, etc.  It's great if you're a community keeping
  the database up to date (as for the Error Correction Zoo): The community can
  update your database by contributing pull requests.

* Rich and flexible content formatting using
  `Flexible Latex-Like Markup (FLM) <https://github.com/phfaist/flm>`_,
  a LaTeX-inspired markup language that can include citations, sectioning,
  cross-references, figures, tables, etc., and can be extended at will.

* Each object type have a specific data structure that is specified by a schema,
  which extends the `JSON Schema <https://json-schema.org/learn/getting-started-step-by-step>`_.
  The schema ensures that the provided data has the correct structure, that
  there are no typos in the field names, etc.  We also use it to specify
  relationships between objects and additional information about the
  object's fields.

* The internal representation of the database, as a structure of JS objects,
  means that you can do anything from building an internal graph of the database
  to building a full-blown zoo website, as well as provide entire JSON data
  dumps and build client-side applications to display the data interactively.

* Generate other types of output if requried, such as LaTeX code to create a
  print version of the zoo.

* ... and more, read on to learn more :) 


.. _example:

An example
----------

Please check out the example provided in the following github repository —
https://github.com/phfaist/zoodb-example

The example proposes a simple database of people.  Each person has a name, a
biography, and can be related to other people as a spouse, a parental
relationship, or a friendship.

This example covers:

* Defining schemas for objects (in the ``schemas/`` folder): Here, the structure
  of the `person` object is defined.  The relationships are also defined.

* Specifying the data (in the ``data/`` folder).  The data is organized into the
  data for the people to include in the database (``data/people/`` folder) and
  data related to bibliographic citations (``data/citations_info/`` folder).

* The JS code that defines and sets up the “Zoo” database for our people
  database (defining a simple, internal `peopledbjs` JS/ES6 library).  This will
  provide the internal, JS-object-based representation of the database.  It can
  also provide any additional JS code that is useful for interacting with any
  features of our database; for instance, it can provide a rule to obtain a
  website permalink for any given database object given by its type and
  object ID.

* The website is built using the `Eleventy (11ty) static website generator
  <https://11ty.dev/>`_ (in the ``website/`` folder) and assets (JS/CSS) are
  bundled using `ParcelJS <https://parceljs.org/>`_.  We:

  - configure the 11ty site (``website/eleventy.config.js``);

  - load and import the data using our `peopledbjs` library
    (``website/site_data/peopledb.js``);

  - define some stylesheets and default layouts
    (cf. ``website/templates/``, ``website/stylesheets/``);

  - define the website pages (in ``website/src/``).  Here, we define some static
    pages (home page, about page) in markdown and/or JS (you can use whichever
    you prefer in your site, eleventy is very flexible in this regard).  The
    dynamic pages (one for each person in the database) is defined directly in
    JS, see ``website/src/person/person.11ty.js``; you can use arbitrary JS code
    to compile the person page in the way you like!  (Read up on the `eleventy
    “pagination” feature <https://www.11ty.dev/docs/pagination/>`_ for more
    information in case of doubt.  Here, we're paginating directly over the data
    in the loaded zoo object).

To try it out, refer to the instructions in the `README file
<https://github.com/phfaist/zoodb-example/blob/main/website/README.md>`_.


.. _why-js:

Why Javascript?
---------------

I chose to write this library in JavaScript/ES6 (as opposed to, e.g., Python)
for the following reasons:

- Website applications require access to the logic of the zoo (e.g., the code
  graph in the `Error Correction Zoo <https://errorcorrectionzoo.org/>`_
  requires working with “Code” objects and uses access to the same logic/API as
  the site generation code.  Writing the library in JavaScript enables simple
  integration with client-side applications.

- JavaScript has a powerful landscape of transpilers and bundlers (e.g., `parcel
  <https://parceljs.org/>`_) meaning the same library components can run in
  Node.JS, the browser, or other targets.

- There is a huge landscape of useful libraries for most tasks you might want to
  perform both in the browser and for backend purposes (see `node packages
  <https://www.npmjs.com/>`_);

- There is an increasing number of tools that enable interoperability and/or
  conversion between Python and Javascript, such as `Transcrypt
  <https://transcrypt.org/>`_ and `JSPyBridge
  <https://github.com/extremeheat/JSPyBridge>`_.  This means that we can still
  hope to integrate the `ZooDb` library in a python-based workflow if necessary.


Next steps
----------

Are you building a zoo?  I would suggest you clone our :ref:`Example <example>`
somewhere, say in its own git repo, and start playing around with it.

You can look up our :ref:`api-ref` for additional pointers on how this library
works, especially if you'd like to build more complex web browser applications
(like the code graph in the Error Correction Zoo).

Happy zoo coding!
