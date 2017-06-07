var app = angular.module("app");

app.directive("mySettings", function () {
    return {
        scope: {
            currentUser: '='
        },
        templateUrl: "./templates/my-settings.html",
    }
});