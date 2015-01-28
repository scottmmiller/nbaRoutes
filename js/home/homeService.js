var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

	this.getHomeTmplData = function() {
		var deferred = $q.defer();
		var homeTmplTeams = {};
		teamService.getTeamData('utahjazz').then(function(results) {
			homeTmplTeams.utahjazz = results;
			homeTmplTeams.utahjazz.logo = 'images/jazz-logo.png';
			teamService.getTeamData('miamiheat').then(function(results) {
				homeTmplTeams.miamiheat = results;
				homeTmplTeams.miamiheat.logo = 'images/heat-logo.png';
				teamService.getTeamData('losangeleslakers').then(function(results) {
					homeTmplTeams.losangeleslakers = results;
					homeTmplTeams.losangeleslakers.logo = 'images/lakers-logo.png'

					deferred.resolve(homeTmplTeams);
							console.log(homeTmplTeams)

				});
			});
		});
		
		

		return deferred.promise;
	};
});