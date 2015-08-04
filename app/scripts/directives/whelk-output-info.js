var whelk = angular.module('whelk');

whelk.directive('whelkOutputInfo', function(){
  return {
    'templateUrl': 'templates/whelk-output-info.html',
    'restrict': 'E'
  };
});
