var app = angular.module("app",["ngRoute", "ngMaterial"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/login.html"
        })
        .when("/main", {
            templateUrl : "views/main.html"
        })
        .when("/login", {
            templateUrl: "views/login.html"
        })
});