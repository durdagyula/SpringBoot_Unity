var app = angular.module("app");

app.controller("LoginController", ["$scope", "$http", function LoginController($scope, $http) {

    $scope.email="";
    $scope.password="";
    //$http.get("listAccounts").then(function (response) {
    //    alert(response.data);
    //});

    $scope.login = function () {
        $http.post("login", { username:$scope.email, password:$scope.password } ).then(function (response) {
            if(response.data){
                alert("login success");
            }else{
                alert("wrong pass or user");
            }


        }, function (response) {
        });
    };



}]);