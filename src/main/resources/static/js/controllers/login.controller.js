var app = angular.module("app");

app.controller("LoginController", ["$scope", "$http", "$location", "$mdDialog", function LoginController($scope, $http, $location, $mdDialog) {

    $scope.username = "";
    $scope.password = "";
    var alert;
    $scope.showAlert = showAlert;
    //$http.get("listAccounts").then(function (response) {
    //    alert(response.data);
    //});

    function showAlert() {
        alert = $mdDialog.alert({
            title: 'Error!',
            textContent: 'Username or password is incorrect!',
            ok: 'Close'
        });

        $mdDialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
    };


    $scope.login = function () {
        $http.post("validate", {username: $scope.username, password: $scope.password}).then(function (response) {
            if (response.data) {
                $location.path("/main");
            } else {
                $scope.showAlert();
            }


        }, function (response) {
        });
    };

}]);