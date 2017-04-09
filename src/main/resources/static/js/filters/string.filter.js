var app = angular.module("app");

app.filter("slice", function () {
    return function (input, splitChar, splitIndex) {
        return input.split(splitChar)[splitIndex];
    }
});