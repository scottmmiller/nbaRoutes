var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

	this.getHomeTmplData = function() {
		var deferred = $q.defer();
		var teamsArray = [0, 1, 2];
		var homeTmplTeams = {};
		teamService.getTeamData('utahjazz').then(function(results) {
			homeTmplTeams.utahjazz = results;
			homeTmplTeams.utahjazz.name = 'Utah Jazz';
			homeTmplTeams.utahjazz.logo = 'images/jazz-logo.png';
			teamsArray[0] = homeTmplTeams.utahjazz;
			teamService.getTeamData('losangeleslakers').then(function(results) {
				homeTmplTeams.losangeleslakers = results;
				homeTmplTeams.losangeleslakers.name = 'Los Angeles Lakers';
				homeTmplTeams.losangeleslakers.logo = 'images/lakers-logo.png'
				teamsArray[1] = homeTmplTeams.losangeleslakers;
				teamService.getTeamData('miamiheat').then(function(results) {
					homeTmplTeams.miamiheat = results;
					homeTmplTeams.miamiheat.name = 'Miami Heat';
					homeTmplTeams.miamiheat.logo = 'images/heat-logo.png';
					teamsArray[2] = homeTmplTeams.miamiheat;

					deferred.resolve(teamsArray);
				});
			});
		});
		
		

		return deferred.promise;
	};
});