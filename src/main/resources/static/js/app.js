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

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});