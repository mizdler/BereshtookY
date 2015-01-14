(function () {
	'use strict';

    angular.module('bereshtook').factory('RSA', [RSA]);

    function RSA() {
    	var rsa = new JSEncrypt();
    	rsa.setKey(getPublickKey());

    	function encrypt (data) {
    		return rsa.encrypt(JSON.stringify(data));
    	}

    	function getPublickKey () {
			return "-----BEGIN PUBLIC KEY-----\n"+
					"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6Q6w5Wvp/2LkQrQO9FXmolb1S\n"+
					"t2PTOAwh1J4E97iHr9tK/zQFvpY7z7Es3+bMhSnOD/oWzgWKDlGc/iVp5zmiaNCg\n"+
					"UQ+nqw1R8cAF9MHIutLdOrdjqDVGJA/UTKfnXeDbiXjWoySf4l0YeDAIA5HfurpO\n"+
					"YTh9U5/vcfED8fQIGQIDAQAB\n"+
					"-----END PUBLIC KEY-----";
		}

    	return {
    		encrypt: encrypt,
    		getPublickKey:getPublickKey
    	};
    };
})();