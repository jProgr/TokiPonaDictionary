var tpDict = angular.module("tpDict", []);

tpDict.controller('SearchBoxController', ["$scope", function($scope)
{
  $scope.dictionary = toki_pona_dictionary;
}]);
