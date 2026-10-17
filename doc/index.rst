.. ZooDb documentation master file, created by
   sphinx-quickstart on Sat Jul  1 17:53:31 2023.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to ZooDb's documentation!
=================================

ZooDb is a simple library I wrote to build technical “zoos”: A collection of
ideas or concepts, mapped out and organized to bring out their structure and
relations.

This library forms the core of the `Error Correction Zoo
<https://errorcorrectionzoo.org/>`_.  I might use it to build other zoos in the
future.  Feel free to use it to build your own zoo, too!

The zoo's content is formatted in FLM, a LaTeX-like markup language (see
:ref:`zoodb-flm`), processed by flm-rs, the Rust implementation of FLM,
compiled to WebAssembly and bundled with the package: using ZooDb needs no
Rust toolchain.

`Github repository: phfaist/zoodb. <https://github.com/phfaist/zoodb>`_


.. toctree::
   :maxdepth: 2
   :caption: Contents:

   overview
   datafiles
   schemas
   flm
   website11ty
   std
   
   api


Indices and tables
==================

* :ref:`genindex`

..
  * :ref:`modindex`

* :ref:`search`
