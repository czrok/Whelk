var whelk = angular.module('whelk');

whelk.directive('whelkProcessInfo', function(){
  return {
    'templateUrl': 'templates/whelk-process-info.html',
    'restrict': 'E'
  };
});
