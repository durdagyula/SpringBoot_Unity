var app = angular.module("app");

app.directive("myPictures", function () {
    return {
        scope: {picture: '='},
        templateUrl: "./views/register.view.html"
    }
});