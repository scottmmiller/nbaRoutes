var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame = function(gameObj) {
		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		var homeTeamScore = parseInt(gameObj.homeTeamScore);
		var opponentScore = parseInt(gameObj.opponentScore);
		var deferred = $q.defer();
		if(homeTeamScore > opponentScore) {
			gameObj.won = true;
		} else {
			gameObj.won = false;
		};
		return $http({
			method: 'POST',
			url: url,
			data: gameObj

		}).then(function(results) {
			getTeamData($scope.newGame.homeTeam)

		}).then(function(results) {
			

		});
	};

	this.getTeamData = function(team) {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		$http({
			method: 'GET',
			url: url
		}).then(function(data) {
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for(var i = 0; i < results.length; i++) {
				if(results[i].won === true) {
					wins += 1;
				} else {
					losses += 1;
				};
			};
			results.wins = wins;
			results.losses = losses;
			deferred.resolve(results);
		}, function(error) {
			deferred.reject(error);
		})
		return deferred.promise;

	};


});