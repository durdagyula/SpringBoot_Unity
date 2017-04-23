var app = angular.module("app");

app.factory('userFactory', ["$http", "$cookies", "$location", function ($http, $cookies, $location) {

    var userFactory = {};

    userFactory.login = function (username, password) {
        var isAuth = false;
        $http.post("validate", {username: username, password: password}).then(function (response) {
            if (response.data) {
                $cookies.put("auth", response);
                $location.path("/main");
                isAuth = true;
            } else {}}, function (response) {});
        return isAuth;
    };

    userFactory.getAuthStatus = function () {
        var status = $cookies.get("auth");
        return status;
    };

    userFactory.logout = function () {
        $cookies.remove("auth");
        $location.path("/");
    };

    return userFactory;

}]);