var app = angular.module("app", ["ngRoute", "ngMaterial", "ngCookies"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/login.view.html",
            authenticated: false
        })
        .when("/main", {
            templateUrl: "views/main.view.html",
            authenticated: true
        })
        .when("/login", {
            templateUrl: "views/login.view.html",
            authenticated: false
        })
        .when("/register", {
            templateUrl: "views/register.view.html",
            authenticated: true
        });

        $routeProvider.otherwise("/");

});

app.run(["$rootScope", "$location", 'userFactory',
    function ($rootScope, $location, userFactory) {
        $rootScope.$on("$routeChangeStart",
            function (event, next) {
                if(next.$$route.authenticated){
                    if(!userFactory.getAuthStatus()){
                        $location.path("/");
                    }
                }

                if(next.$$route.originalPath == "/"){
                    //console.log('Login Page');
                    if(userFactory.getAuthStatus()) {
                        $location.path("/main");
                    }
                }
            });
    }
]);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    //activate them if needed
    //$mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    //$mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    //$mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});