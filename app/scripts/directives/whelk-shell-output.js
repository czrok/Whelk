'use strict';

var whelk = angular.module('whelk');

whelk.directive('whelkShellOutput', function(){
  return {
    'templateUrl': 'templates/whelk-shell-output.html',
    'restrict': 'E'
  };
});
