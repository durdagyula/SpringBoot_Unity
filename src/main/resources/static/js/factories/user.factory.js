var app = angular.module("app");

app.factory('userFactory', ["$q", "$http", "$cookies", "$location", function ($q, $http, $cookies, $location) {

    var userFactory = {};

    userFactory.login = function (username, password) {
        var q = $q.defer();

        $http.post("validate", {username: username, password: password}).then(function (response) {
            if (response.data) {
                $cookies.put("auth", response);
                $location.path("/main");
                q.resolve(true);
            } else {
                q.resolve(false);
            }
        });
        return q.promise;
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