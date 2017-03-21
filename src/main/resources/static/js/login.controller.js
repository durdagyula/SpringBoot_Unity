var app = angular.module("app");

app.controller("LoginController", ["$scope", "$http", "$location", function LoginController($scope, $http, $location) {

    $scope.email="";
    $scope.password="";
    //$http.get("listAccounts").then(function (response) {
    //    alert(response.data);
    //});

    $scope.login = function () {
        $http.post("login", { username:$scope.email, password:$scope.password } ).then(function (response) {
            if(response.data){
                alert("login success");
                $location.path("/main");
            }else{
                alert("wrong pass or user");
            }


        }, function (response) {
        });
    };



}]);