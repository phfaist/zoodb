# Example ZooDb usage

In this folder we have a very simple illustrative example of a usage of our
ZooDb library.

The ZooDb Yaml-based database is used to store a database of people with
parent/child and friend relationships.

The schemas are in `schemas/`.

The data is in `data/`.

Minimal JS code to load the people DB in memory is in `peopledbjs/`.

A simple example [11ty](https://11ty.dev/)-based website with the given data is
in `website/`.  Make sure you run `yarn` in that folder once to set everything
up.  Then, to preview the website, navigate to that folder in your terminal and
run `yarn dev`.  To simply build the website files, navigate to that folder and
run `yarn build`.
