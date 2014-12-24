appCtrl = angular.module('starter.controllers', []);

appCtrl.controller('DashCtrl', function($scope, $state) {
  
});

appCtrl.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
});

appCtrl.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});

appCtrl.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
});

appCtrl.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});

appCtrl.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

appCtrl.controller('SignupNumberCtrl', function($scope) {

});
