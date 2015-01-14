(function () {
	'use strict';

    angular.module('bereshtook').factory('AES', [AES]);

    function AES() {

		var cipherKey = window.localStorage.getItem('cipherKey');

		function encrypt (data){
			return sjcl.encrypt(cipherKey, JSON.stringify(data));
		};

		function decrypt (encryptedData){
			console.log("data : " + cipherKey);
		    var data = sjcl.decrypt(cipherKey, encryptedData);
		    console.log("data : " + data);
		    return JSON.parse(data);
		};

		function generateKey (){
		    cipherKey = Math.random().toString(36);
		    window.localStorage.setItem('cipherKey', cipherKey);
		    return cipherKey;
		};

    	return {
    		encrypt: encrypt,
    		decrypt: decrypt,
    		generateKey: generateKey
    	};
    };
})();