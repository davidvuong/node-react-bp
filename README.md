# NodeJS + ReactJS Boilerplate

[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg)](https://github.com/airbnb/javascript)
[![Build Status](https://travis-ci.org/davidvuong/node-react-bp.svg?branch=master)](https://travis-ci.org/davidvuong/node-react-bp)

**Welcome to node-react-bp!**

This is an incredibly simple boilerplate repository for NodeJS and ReactJS projects. It uses [SCSS](http://sass-lang.com/) as the CSS pre-processor, [webpack](https://webpack.github.io/) as the module bundler, [Babel](https://babeljs.io/) as the ES6 transpiler, and [Express](http://expressjs.com/) as the web application framework. Take a look at the [package.json](package.json) file for more details.

## Getting Started

1. Clone the git repository:

  ```bash
  git clone git@github.com:davidvuong/node-react-bp.git
  ```

1. Download the latest version of NodeJS:

  ```bash
  nvm install v5.9.1
  nvm use v5.9.1
  ```

1. Install all the project dependencies:

  ```bash
  cd node-react-bp/
  npm install
  ```

## Executing `node-react-bp`

There are 3 commands you need to run. Here's a quick snapshot (ignore the 1st row in the 2nd column - I use that to manage the repository/run commands):

![](assets/images/terminal.png)

I prefer to split my screen so I can quickly see everything in a single view but you can open multiple tabs too if you prefer to do that instead. Each screen split runs a separate command:

1. The first command compiles your client side JSX+ES6 and SCSS files into a bundle (bundle.js, style.css).

  ```bash
  npm run watch:client
  ```

1. The second command compiles all your server related JSX+ES6 files into a server.js bundle.

  ```bash
  npm run watch:server
  ```

1. Finally, the last command starts the NodeJS ExpressJS server using nodemon.

  ```bash
  npm start
  ```

1. Alternatively, if you want to just build it once and then run, you can run `build`.

  ```bash
  npm run build && npm start
  ```

Whenever a change is made to any SCSS, ES6 or JSX files, your code will be re-compiled and [nodemon](https://github.com/remy/nodemon) will restart the NodeJS Express server. I've also setup ESLint to raise any warnings/errors if your code doesn't comply to the rules defined in `.eslintrc`.

## Running Tests

Tests are written utilising [Mocha](http://mochajs.org/), [React TestUtils](https://facebook.github.io/react/docs/test-utils.html), [mjackson/expect](https://github.com/mjackson/expect), [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store), and [nock](https://github.com/pgte/nock). There are 2 npm commands you can use to run tests:

```bash
# Runs your tests once.
npm test

# Runs your tests on every file change.
npm run test:watch
```

## Online Resources

There are some really great resources online. There's a dump of most (if not all) of the resources I found useful when creating this boilerplate project:

* https://github.com/airbnb/javascript/tree/master/react
* https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree
* https://github.com/erikras/react-redux-universal-hot-example
* https://facebook.github.io/react/index.html
* https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e
* http://www.sitepoint.com/video-controlled-vs-uncontrolled-components-in-react/
* https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
* https://github.com/unicorn-standard/starter-kit/
* http://jamesknelson.com/writing-happy-stylesheets-with-webpack/
* https://www.bensmithett.com/smarter-css-builds-with-webpack/
* http://webpack.github.io/docs/using-loaders.html
* https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
* http://survivejs.com/webpack/getting-started/
* http://redux.js.org/docs/basics/UsageWithReact.html
* https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.cz4lfz6h0
* https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md
