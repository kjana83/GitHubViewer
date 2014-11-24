// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('GitHubViewer', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider.
    state('home',{
      url:'/home',
      templateUrl:'app/home/home.html'
    })
    .state('home/user/:username',{
      url:'/home/user/:username',
      templateUrl:'app/home/user.html'
    })
    .state('home/contribs/:username/:reponame',{
      url:'/home/contribs/:username/:reponame',
      templateUrl:'app/home/contributor.html'
    });
    $urlRouterProvider.otherwise('/home');  

  });
