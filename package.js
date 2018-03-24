Package.describe({
  name: 'asad:preact-meteor-data',
  summary: 'Preact higher-order component for reactively tracking Meteor data',
  version: '0.2.17',
  documentation: 'README.md',
  git: 'https://github.com/dhamaniasad/preact-meteor-data',
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');
  api.use('tracker');
  api.use('ecmascript');
  api.use('tmeasday:check-npm-versions@0.3.2');

  api.export(['ReactMeteorData']);

  api.mainModule('react-meteor-data.jsx');
});
