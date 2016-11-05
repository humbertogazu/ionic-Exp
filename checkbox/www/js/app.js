// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope){
  $scope.devList = [
  {text: "HTML5", checked:true},
  {text: "CSS3", checked:false},
  {text: "JavaScript", checked:false},
  ];

  $scope.pushNotificationChange = function(){
    console.log('push Notification Change', $scope.pushNotificationChange);
  };

  $scope.pushNotification = {checked: true};
  $scope.pushNotification = 'Subscribed';

});