var app = angular.module("app");

app.directive("myPictures", function () {
    return {
        scope: {picture: '='},
        templateUrl: "./templates/my-pictures.html"
    }
});