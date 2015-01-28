var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData = teamData; //teamData is in app.js:14
	console.log($scope.teamData);
	$scope.newGame = {};

	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function() {
		$scope.showNewGameForm = !$scope.showNewGameForm;
	};

	if($routeParams.team === 'utahjazz') {
		$scope.homeTeam = 'Utah Jazz',
		$scope.logoPath = 'images/jazz-logo.png'
	} else if($routeParams.team === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers',
		$scope.logoPath = 'images/lakers-logo.png'
	} else if($routeParams.team === 'miamiheat') {
		$scope.homeTeam = 'Miami Heat',
		$scope.logoPath = 'images/heat-logo.png'
	} else {
		$scope.logoPath = 'images/nba-logo.png'
	};

	$scope.submitGame = function() {
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		teamService.addNewGame($scope.newGame).then(function(response) {
			teamService.getTeamData($scope.newGame.homeTeam).then(function(results) {
				$scope.teamData = results;
				$scope.newGame = {};
				$scope.showNewGameForm = false;
			}, function(error) {
				console.log(error);
			})
		}, function(error) {
			console.log(error);
		});
	};

});