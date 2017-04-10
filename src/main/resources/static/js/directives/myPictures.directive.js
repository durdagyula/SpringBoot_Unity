var app = angular.module("app");

app.directive("myPictures", function () {
    return {
        scope: {
            picture: '=',
            theme: '='
        },
        templateUrl: "./templates/my-pictures.html",
    }
});