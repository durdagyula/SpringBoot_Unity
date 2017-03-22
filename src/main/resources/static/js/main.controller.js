var app = angular.module("app");

app.controller("MainController", ["$scope", "$http", "$location", function MainController($scope, $http, $location) {

    $scope.currentUser = null;
    $scope.pictures = [];

    $http.get("getCurrentUser").then(function (response) {
        if(!response.data){
            $location.path("/");
        }else{
            $scope.currentUser = response.data;
            $http.post("getUserPictures/" + $scope.currentUser.id).then(function (response) {
                if(response.data){
                    $scope.pictures = response.data;
                }
            })
        }
    });

}]);
