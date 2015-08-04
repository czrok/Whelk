'use strict';

var whelk = angular.module('whelk', []);

process.chdir('/');

whelk.controller('WhelkCtrl', ['$scope', function($scope) {
  $scope.username = process.env.LOGNAME;
  $scope.cwd = process.cwd();

  $scope.messages = [];

  $scope.getLastElement = function(){
    return $scope.messages.slice(-1)[0];
  };

  $scope.parseInput = function(input){
    if(!input){
      return;
    }
    let command = input.split(' ')[0];
    let args = input.split(' ').slice(1);

    let response = '';
    let prevcwd = $scope.cwd;

    if(command === 'cd'){
      try {
        process.chdir(input.split(' ')[1]);
        $scope.cwd = process.cwd();
      }catch(e){
        response = e.message;
      }
    }

    let spawn = require('child_process').spawn;
    let child = spawn(command, args);

    let item = {
      'username': $scope.username,
      'cwd': prevcwd,
      'command': input,
      'response': response
    };

    child.stdout.on('data', function(buffer){
      if(buffer.toString()){
        item.response += buffer.toString();
        $scope.$apply();
      }
    });

    child.on('error', function(error){
    });

    $scope.messages.push(item);
    $scope.$apply();
  };
}]);
