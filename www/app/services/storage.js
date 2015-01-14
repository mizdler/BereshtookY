(function () {
	'use strict';

    angular.module('bereshtook').factory('Storage', [Storage]);

    function Storage() {

		  function setItem (key, value){
		    window.localStorage.setItem(key, value);
		  };

		  function getItem (key){
		    return window.localStorage.getItem(key);
		  };

		  function getUserId (){
		    return window.localStorage.getItem('userId');
		  };

    	return {
    		setItem: setItem,
    		getItem: getItem,
    		getUserId: getUserId
    	};
    };
})();	