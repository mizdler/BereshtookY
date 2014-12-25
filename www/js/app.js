// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js


  // setup an abstract state for the tabs directive
  $stateProvider.state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  });

  // Each tab has its own nav history stack:

  $stateProvider.state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  });

  $stateProvider.state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    });

  $stateProvider.state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  });

  $stateProvider.state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
  $stateProvider.state('tab.friend-detail', {
    url: '/friend/:friendId',
    views: {
      'tab-friends': {
        templateUrl: 'templates/friend-detail.html',
        controller: 'FriendDetailCtrl'
      }
    }
  });

  $stateProvider.state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });


  $stateProvider.state('signup', {
    url: "/signup",
    abstract: true,
    template: '<ion-nav-view/>'
  });

  $stateProvider.state('signup.number', {
      url: '/number',
      templateUrl: 'templates/signup/number.html',
      controller: 'SignupNumberCtrl'
  });

  $stateProvider.state('signup.verification', {
      url: '/verification/:phoneNumber/:userId',
      templateUrl: 'templates/signup/verification.html',
      controller: 'SignupVerificationCtrl'
  });

  $stateProvider.state('signup.profile', {
      url: '/profile',
      templateUrl: 'templates/signup/profile.html',
      controller: 'SignupProfileCtrl'
  });     

  // if none of the above states are matched, use this as the fallback
  if(window.localStorage.getItem('configured')){
    $urlRouterProvider.otherwise('/tab/dash');
  }
  else{
    $urlRouterProvider.otherwise('/signup/number');
  }

});
