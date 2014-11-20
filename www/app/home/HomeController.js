(function(){
	'use strict';
	angular.module('GitHubViewer').controller('HomeController',['$state',HomeController]);

	function HomeController($state){
		var vm=this;
		this.username='angular';
		vm.submit = function(){
			$state.go('home/user/:username',{username:vm.username});
		}
	};
})();