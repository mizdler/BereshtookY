(function () {
	'use strict';

    angular.module('bereshtook').factory('SocketApi', ['$ionicLoading', SocketApi]);

    function SocketApi($ionicLoading) {
    	var socket;
    	

    	function connect (){
    		$ionicLoading.show({template: 'Connecting...'});
    		socket = io.connect('http://192.168.1.4:3998', {
    			'force new connection': true,
			    'reconnection': true,
			    'reconnectionDelay': 1000,
			    'reconnectionDelayMax' : 5000,
			    'reconnectionAttempts': 2,
			    'connect timeout': 1000
			});
    	}

		function on (eventName, callback){
			socket.on(eventName, callback);
			/*  function(){
			var args = arguments;
			  $rootScope.$apply(function(){
			    callback.apply(socket, args);
			  });
			});*/
		};

		function emit (eventName, data, callback){
		  socket.emit(eventName, data, callback);
		    /*
		    function () {
		    var args = arguments;
		    $rootScope.$apply(function() {
		      if (callback) {
		        callback.apply(socket, args);
		      }
		    });
		  });*/
		};

		function isConnected (){
			return socket.connected;
		};

		function close () {
			socket.close();
		}

		return {
			connect: connect,
			on: on,
			emit: emit,
			isConnected: isConnected,
			close: close
		};
    };
})();