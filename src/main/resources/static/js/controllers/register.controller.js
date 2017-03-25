var app = angular.module("app");

app.controller("RegisterCtrl", ["$scope", "$http", "$mdDialog", function RegisterCtrl($scope, $http, $mdDialog) {

    $scope.close = close;


    function close() {
        $mdDialog.hide();
    }

}]);