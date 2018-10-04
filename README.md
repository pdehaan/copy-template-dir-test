# copy-template-dir-test

Test the copy-template-dir npm module

## Setup:

1. <kbd>$ npm install</kbd>
1. <kbd>$ npm start</kbd>

## Sample output:

```sh
$ npm start

> copy-template-dir-test@1.0.0 start /Users/pdehaan/dev/github/pdehaan/copy-template-dir-test
> npm run build


> copy-template-dir-test@1.0.0 prebuild /Users/pdehaan/dev/github/pdehaan/copy-template-dir-test
> npm run clean


> copy-template-dir-test@1.0.0 clean /Users/pdehaan/dev/github/pdehaan/copy-template-dir-test
> rimraf dest


> copy-template-dir-test@1.0.0 build /Users/pdehaan/dev/github/pdehaan/copy-template-dir-test
> node index

[ '/Users/pdehaan/dev/github/pdehaan/copy-template-dir-test/dest/.eslintignore',
  '/Users/pdehaan/dev/github/pdehaan/copy-template-dir-test/dest/.eslintrc.js',
  '/Users/pdehaan/dev/github/pdehaan/copy-template-dir-test/dest/package.json',
  '/Users/pdehaan/dev/github/pdehaan/copy-template-dir-test/dest/tests/index.js',
  '/Users/pdehaan/dev/github/pdehaan/copy-template-dir-test/dest/src/index.js',
  '/Users/pdehaan/dev/github/pdehaan/copy-template-dir-test/dest/src/manifest.json' ]
```
