var app = angular.module("app", ["ngRoute", "ngMaterial"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/login.view.html"
        })
        .when("/main", {
            templateUrl: "views/main.view.html"
        })
        .when("/login", {
            templateUrl: "views/login.view.html"
        })
        .when("/register", {
            templateUrl: "views/register.view.html"
        })
});