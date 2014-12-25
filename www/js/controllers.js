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


appCtrl.controller('SignupNumberCtrl', function($scope, $state, Socket) {
  $scope.form = {};

  Socket.on('connect', function(){
    console.log('socket connected');
    $scope.statusMsg = 'socket connected';
  });

  $scope.submitNumber = function(){
    Socket.emit('signup-step-one', {"phoneNumber": $scope.form.phoneNumber}, function(response){
      
      if(response.status === "passed"){
        console.log('signup-step-one passed!');
        $scope.statusMsg = 'signup-step-one passed!';
        console.log('userId: ' + response.userId);

        $state.go('signup.verification', {phoneNumber: $scope.form.phoneNumber, userId: response.userId});
      }
      else{
        console.log('signup-step-one failed!');
        $scope.statusMsg = 'signup-step-one failed!';
      }
    });   
  }
});


appCtrl.controller('SignupVerificationCtrl', function($scope, $state, $stateParams, Socket, Cipher, Storage) {
  $scope.form = {};
  console.log('phoneNumber: ' + $stateParams.phoneNumber);
  console.log('userId: ' + $stateParams.userId);

  $scope.submitVerification = function(){
    console.log('Verification Code: ' + $scope.form.verificationCode);
    Cipher.generateCipherKey($stateParams.userId, $scope.form.verificationCode);

    var data = {from: $stateParams.userId, verificationCode: $scope.form.verificationCode};

    var encryptedData = Cipher.encrypt(data);

    Socket.emit('signup-step-two', {userId: $stateParams.userId, data: encryptedData}, function(response){

      if(response.status == "passed"){
        console.log('signup-step-two passed!');
        $scope.statusMsg = 'signup-step-two passed!';

        Storage.setItem('userId', $stateParams.userId);
        Storage.setItem('phoneNumber', $stateParams.phoneNumber);
        Storage.setItem('verificationCode', $scope.form.verificationCode);
        
        $state.go('signup.profile');
      }
      else{

      }

    });   
  };

});

appCtrl.controller('SignupProfileCtrl', function($scope, $state, Socket, Cipher, Storage) {
  $scope.form = {};

  $scope.submitProfile = function(){
    var data = {from: Storage.getUserId(), username: $scope.form.username, displayName: $scope.form.displayName, birthdate: $scope.form.birthdate};

    Socket.emit('update-profile', {userId: Storage.getUserId(), data: Cipher.encrypt(data)}, function(response){

      var data = Cipher.decrypt(response);
      if(data.status == 'passed'){
        console.log('update profile success');
        $state.go('tab.dash');
      }
      else{
        console.log('update profile failed');
      }

    });
  };

});