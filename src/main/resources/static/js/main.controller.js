var app = angular.module("app");

app.controller("MainController", ["$scope", "$http", function MainController($scope, $http) {

    $http.get("listAccounts").then(function (response) {
        alert(response.data);
    });

    $scope.test = function () {
        $http.post("createAccount", { username:"Levi",password:"isFifa" } ).then(function (response) {
        alert("posted"); //succcess
        }, function (response) {
            alert("error"); //error
        });
    };



}]);