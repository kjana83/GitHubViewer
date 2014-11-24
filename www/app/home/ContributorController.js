(function(){
	'use strict';
	angular.module('GitHubViewer').controller('ContributorController',
		['$stateParams','GitHubService',ContributorController]);

	function ContributorController($stateParams,gitHubService){
		var vm=this;
		this.username= $stateParams.username;
		this.reponame=$stateParams.reponame;
		gitHubService.getContribs(vm.username,vm.reponame).success(function(data){
			vm.contribs = data;
		});
	};
})();