var appFactory = angular.module('starter.services', [])

appFactory.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://pbs.twimg.com/profile_images/479740132258361344/KaYdH9hE.jpeg'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
});

/**
 * A simple example service that returns some data.
 */
appFactory.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://pbs.twimg.com/profile_images/479740132258361344/KaYdH9hE.jpeg'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});

appFactory.factory('Socket', function($rootScope){
  var socket = io.connect('http://localhost:3998');
  var factory = {};

  factory.on = function(eventName, callback){
    socket.on(eventName, function(){
      var args = arguments;
      $rootScope.$apply(function(){
        callback.apply(socket, args);
      });
    });
  }

  factory.emit = function(eventName, data, callback){
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function() {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
  }

  factory.isConnected = function(){
    return socket.connected;
  }

  return factory;
});



appFactory.factory('Cipher', function(){
  factory = {};
  var cipherKey = window.localStorage.getItem('cipherKey');

  factory.encrypt = function(data){
    var encryptedData = sjcl.encrypt(cipherKey, JSON.stringify(data));
    return encryptedData;
  };

  factory.decrypt = function(encryptedData){
    var data = sjcl.decrypt(cipherKey, encryptedData);
    return JSON.parse(data);
  };

  factory.generateCipherKey = function(userId, verificationCode){
    cipherKey = userId + verificationCode;
    window.localStorage.setItem('cipherKey', cipherKey);
    return cipherKey;
  };  

  return factory;
});


appFactory.factory('Storage', function(){
  factory = {};

  factory.setItem = function(key, value){
    window.localStorage.setItem(key, value);
  };

  factory.getItem = function(key){
    return window.localStorage.getItem(key);
  };

  factory.getUserId = function(){
    return window.localStorage.getItem('userId');
  };

  return factory;
});

appFactory.factory('Mongo', function(){
  factory = {};

  return factory;
});


appFactory.factory('Redis', function(){
  factory = {};

  return factory;
})