angular.module('bereshtook', ['ngCordova', 'ionic'])

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
  $stateProvider

  .state('register', {
    url: "/register",
    abstract: true,
    templateUrl: "app/register/register.html"
  })

  .state('register.welcome', {
    url: "/welcome",
    views: {
      'registerContent': {
        templateUrl: 'app/register/welcome.html'
      }
    }
  })

  .state('register.privacy-policy', {
    url: "/privacy-policy",
    views: {
      'registerContent': {
        templateUrl: 'app/register/privacy-policy.html'
      }
    }
  })

  .state('register.phone-number', {
    url: "/phone-number",
    views: {
      'registerContent': {
        templateUrl: 'app/register/phone-number.html'
      }
    }
  })

  .state('register.verification', {
    url: "/verification/:phoneNumber/:userId",
    views: {
      'registerContent': {
        templateUrl: 'app/register/verification.html'
      }
    }
  })

  /*.state('profile', {
    url: "/profile",
    views: {
      'mainContent': {
        templateUrl: 'app/profile/profile.html'
      }
    }
  })*/

  .state('home', {
    url: "/home",
    abstract: true,
    templateUrl: "app/home/home.html"
  })

  .state('home.chat-list', {
    url: '/chat-list',
    views: {
      'tab-chat-list': {
        templateUrl: 'app/chat-list/chat-list.html'
      }
    }
  })

  .state('home.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'app/friends/friends.html'
        }
      }
    })

  .state('home.chat', {
      url: '/chat/:id',
      views: {
        'tab-chat-list': {
          templateUrl: 'app/chat/chat.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  if(window.localStorage.getItem('registered')){
    $urlRouterProvider.otherwise('/home/chat-list');
  }
  else{
    $urlRouterProvider.otherwise('/register/welcome');
  }

});
