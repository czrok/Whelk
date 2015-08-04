var whelk = angular.module('whelk');

whelk.directive('whelk-message', function(){
  return {
    'templateUrl': '../../templates/message.html',
    'restrict': 'E',
    'scope': {
      'in': '='
    }
  };
});
