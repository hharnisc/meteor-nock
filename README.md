# meteor-nock

Meteor smart-package for nock (https://github.com/pgte/nock)

## Quick Start

This is a debugOnly package so it will never get pushed out to production.

This also means it cannot export anything onto the global namespace. To use this package it can be included like this:

```javascript
var nock = Package['hharnisc:meteor-nock'].Nock
```

Then you can use the nock docs - https://github.com/pgte/nock
