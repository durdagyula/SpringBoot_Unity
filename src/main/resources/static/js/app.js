var app = angular.module("app",["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/main.html"
        })
        .when("/london", {
            templateUrl : "views/london.html"
        })
});