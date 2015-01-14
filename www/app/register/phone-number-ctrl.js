(function () {
	'use strict';

    angular.module('bereshtook').controller('PhoneNumberCtrl', ['SocketApi','$ionicLoading', '$cordovaDialogs', 'RSA', 'AES', '$state', PhoneNumberCtrl]);

    function PhoneNumberCtrl(SocketApi, $ionicLoading, $cordovaDialogs, RSA, AES, $state) {
    	var vm = this;

    	vm.submitNumber = function (phoneNumber){
    		SocketApi.connect();
    		SocketApi.on('connect', function(){
				console.log('socket connected');
				SocketApi.emit('handshake', RSA.encrypt(AES.generateKey()), function(response){
					var data = AES.decrypt(response);
					if(data.status === "passed"){
						console.log('handshake passed!');
						SocketApi.emit('register-phone-number', {userId: data.userId, data: AES.encrypt({from: data.userId, phoneNumber: phoneNumber})}, function(response){
						var data2 = AES.decrypt(response);
							$ionicLoading.hide();
							if(data2.status === "passed"){
								console.log('register-phone-number passed!');
								$state.go('register.verification', {userId: data.userId, phoneNumber: phoneNumber});
							}
							else{
								$cordovaDialogs.alert('Please try again later.', 'Failed', 'Dismiss');
								console.log('a failed!');
							}
						});
					}
					else{
						console.log('handshake failed ' + data.status);
						$cordovaDialogs.alert('Please try again later.', 'Failed', 'Dismiss');
					}
				});

			});

			SocketApi.on('reconnect_failed', function(){
				$ionicLoading.hide();
				$cordovaDialogs.alert('Please Check your internet connection and try again.', 'Connection Error', 'Ok');
			});
    	};
    };
})();