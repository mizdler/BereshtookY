(function () {
	'use strict';

    angular.module('bereshtook').controller('VerificationCtrl', ['SocketApi', 'AES', '$stateParams', 'Storage', '$state', '$cordovaDialogs',  VerificationCtrl]);

    function VerificationCtrl(SocketApi, AES, $stateParams, Storage, $state, $cordovaDialogs) {
    	var vm = this;

    	vm.register = function (verificationCode){
		    SocketApi.emit('register-verification-code', {userId: $stateParams.userId, data: AES.encrypt({from: $stateParams.userId, verificationCode: verificationCode})}, function(response){
		    	var data = AES.decrypt(response);
		        if(data.status == "passed"){
			        console.log('register-verification-code');
			        Storage.setItem('userId', $stateParams.userId);
			        Storage.setItem('phoneNumber', $stateParams.phoneNumber);
			        Storage.setItem('verificationCode', verificationCode);
			        $state.go('home.chat-list');
		        }
		        else{
		        	$cordovaDialogs.alert('Wrong Code', 'Verification Code', 'Dismiss');
		        }
		    });   
    	};
    };
})();