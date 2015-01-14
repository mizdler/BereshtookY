(function () {
	'use strict';

    angular.module('bereshtook').controller('ChatListCtrl', [ChatListCtrl]);

    function ChatListCtrl() {
    	var vm = this;

        vm.chatsList = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
            lastTime: '12:54 AM'
          }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'https://pbs.twimg.com/profile_images/479740132258361344/KaYdH9hE.jpeg',
            lastTime: '12:54 PM'
          }, {
            id: 2,
            name: 'Andrew Jostlin',
            lastText: 'Did you get the ice cream?',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg',
            lastTime: '2:54 AM'
          }, {
            id: 3,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
            lastTime: '6:54 PM'
          }, {
            id: 4,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg',
            lastTime: '11:04 AM'
          }];
	
    };
})();