(function(){
	'use strict';
	angular.module('GitHubViewer').controller('UserController',['$stateParams','GitHubService',UserController]);

	function UserController($stateParams,gitHubService){
		var vm=this;
		this.username= $stateParams.username;
		gitHubService.getUser(vm.username).success(function(data){
			vm.user=data;
		});
		gitHubService.getRepos(vm.username).success(function(data){
			vm.repos = data;
		});
	};
})();