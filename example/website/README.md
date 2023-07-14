# Example 11ty website backed by ZooDb

This is a 11ty static website with data read from a ZooDb-backed database of
YAML files.

## One-time setup

* Make sure you have a recent version of [Node.js](https://nodejs.org/)
  installed.

* Make sure you have [Yarn 3](https://yarnpkg.com/getting-started/install)
  installed & enabled.  This is usually included in the NodeJs distribution; you
  only need to enable it by running ``corepack enable``.

* Install eleventy and other JS dependencies.  To do that, run the following
  command in the present folder:
```
> yarn
```

## Build the website

To build the full website, run:
```
> yarn build
```

The site files will be written to the `_site/` folder.

## Live preview

To build & preview your site locally on your computer while watching for
changes, run:
```
> yarn dev
```

And point your browser to https://localhost:8080/ (or whatever similar URL is
displayed in the output of `yarn dev`).
