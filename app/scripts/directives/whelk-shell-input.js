'use strict';

var whelk = angular.module('whelk');

whelk.directive('whelkShellInput', function(){
  return {
    'templateUrl': 'templates/whelk-shell-input.html',
    'restrict': 'E',
    'link': function(scope, element){
      var e = element.children()[0];
      e.focus();

      e.addEventListener('blur', function(event){
        setTimeout(function(){
          e.focus();
        }, 200);
      });

      element.on('keydown', function(event){
        if(event.keyCode === 38){
          event.preventDefault();
          e.textContent = scope.getLastElement().command;
        }
        if(event.keyCode === 13){
          event.preventDefault();
          // This is hacky, but angular doesnt make it easy to use contenteditable, so whatever
          let input = e.textContent;
          scope.parseInput(input);
          e.textContent = '';
        }
      })
    }
  };
});
