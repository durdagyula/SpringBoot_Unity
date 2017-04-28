var app = angular.module("app");

app.directive("registerModal", function () {
    return {
        scope: {picture: '='},
        templateUrl: "./views/register.view.html"
    }
});