var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, $routeParams, homeService, homeTmplData){
	homeService.getHomeTmplData().then(function(results) {
		$scope.teamData = results;
	})

});