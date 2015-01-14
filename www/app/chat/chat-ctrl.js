(function () {
	'use strict';

    angular.module('bereshtook').controller('ChatCtrl', ['$stateParams', ChatCtrl]);

    function ChatCtrl($stateParams) {
    	var vm = this;

    	var chatId = Number($stateParams.id)

    	vm.title = "Mohammad";
    	
	
    };
})();