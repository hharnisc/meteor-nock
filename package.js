Package.describe({
  summary: "Meteor smart-package for nock (https://github.com/pgte/nock)",
  version: "0.1.0",
  git: "https://github.com/hharnisc/meteor-nock.git",
  debugOnly: true
});

Npm.depends({
  'nock': '2.4.1'
});

Package.on_use(function (api, where) {
  api.export('Nock');
  api.add_files('server/server.js', 'server');
});
