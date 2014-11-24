(function(){
	'use strict';

	angular.module('GitHubViewer').service('GitHubService',['$http',GitHubService]);

	function GitHubService($http){
		var getUser = function(username){
				return $http.get('https://api.github.com/users/' + username).
				success(function(data){
					return data;
				});
			};
		var getRepos = function(username){
			return $http.get('https://api.github.com/users/' + username + '/repos').
				success(function(data){
					return data;
				});
		};
		var getContribs = function(username,reponame){
			return $http.get('https://api.github.com/repos/'+ username + '/'+ reponame +'/contributors').
				success(function(data){
					return data;
				});
		};
			return {
				getUser : getUser,
				getRepos : getRepos,
				getContribs : getContribs
			};
		};
})();