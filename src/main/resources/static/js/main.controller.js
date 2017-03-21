var app = angular.module("app");

app.controller("MainController", ["$scope", "$http", "$location", function MainController($scope, $http, $location) {

    $scope.currentUser = null;

    $http.get("getCurrentUser").then(function (response) {
        if(!response.data){
            $location.path("/");
        }else{
            $scope.currentUser = response.data;
        }
    });

    //$http.get("listAccounts").then(function (response) {
    //    alert(response.data);
    //});

    //$scope.test = function () {
    //    $http.post("createAccount", { username:"Levi", password:"isFifa" } ).then(function (response) {
    //    alert("posted"); //succcess
    //    }, function (response) {
    //        alert("error"); //error
    //    });
    //};



}]);