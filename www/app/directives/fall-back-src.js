(function () {
	'use strict';

    angular.module('bereshtook').directive('fallbackSrc', [fallbackSrc]);

    function fallbackSrc() {
	    //Usage:
	    //<div data-directiveName="{{vm.content}}"></div>
	    var directive = {
	    	link: link,
	    	restrict: 'A'
	    };
	    return directive;

	    function link(scope, element, attrs){
	    	element.bind('error', function () {
                angular.element(this).attr("src", attrs.fallbackSrc);
            });
	    }
    }
})();