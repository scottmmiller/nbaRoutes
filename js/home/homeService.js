var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

	this.getHomeTmplData = function() {
		var deferred = $q.defer();
		var homeTmplTeams = {};
		teamService.getTeamData('utahjazz').then(function(results) {
			homeTmplTeams.utahjazz = results;
			homeTmplTeams.utahjazz.name = 'Utah Jazz';
			homeTmplTeams.utahjazz.logo = 'images/jazz-logo.png';
			teamService.getTeamData('miamiheat').then(function(results) {
				homeTmplTeams.miamiheat = results;
				homeTmplTeams.miamiheat.name = 'Miami Heat';
				homeTmplTeams.miamiheat.logo = 'images/heat-logo.png';
				teamService.getTeamData('losangeleslakers').then(function(results) {
					homeTmplTeams.losangeleslakers = results;
					homeTmplTeams.losangeleslakers.name = 'Los Angeles Lakers';
					homeTmplTeams.losangeleslakers.logo = 'images/lakers-logo.png'

					deferred.resolve(homeTmplTeams);
				});
			});
		});
		
		

		return deferred.promise;
	};
});