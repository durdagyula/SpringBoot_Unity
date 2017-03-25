var app = angular.module("app");

app.controller("MainController", ["$scope", "$http", "$location", function MainController($scope, $http, $location) {

    $scope.currentUser = null;
    $scope.pictures = [];

    $http.get("getCurrentUser").then(function (response) {
        if (!response.data) {
            $location.path("/");
        } else {
            $scope.currentUser = response.data;
            $http.post("getUserPictures/" + $scope.currentUser.id).then(function (response) {
                if (response.data) {
                    $scope.pictures = response.data;
                }
            })
        }
    });

}])

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
