(function () {
	'use strict';

    angular.module('bereshtook').controller('FriendsCtrl', [FriendsCtrl]);

    function FriendsCtrl() {
    	var vm = this;

    	vm.friendsList = [{
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
	
    };
})();