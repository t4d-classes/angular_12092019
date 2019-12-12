require('angular');

angular.module('ColorToolAppModule', []);

require('./services/colors-value');
// require('./services/colors-factory');
// require('./services/colors-service');
// require('./services/colors-provider');
require('./components/tool-header');
require('./components/item-list');
require('./components/color-form');
require('./components/color-tool');

angular.bootstrap(
  document.querySelector('#root'),
  ['ColorToolAppModule'],
);
