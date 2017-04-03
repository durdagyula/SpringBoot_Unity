var app = angular.module("app");

app.controller("LoginController", ["$scope", "$http", "$location", "$mdDialog", function LoginController($scope, $http, $location, $mdDialog) {

    $scope.username = "";
    $scope.password = "";
    var alert;
    var errorMsg;
    $scope.showAlert = showAlert;

    $scope.login = function () {
        $http.post("validate", {username: $scope.username, password: $scope.password}).then(function (response) {
            if (response.data) {
                $location.path("/main");
            } else {
                errorMsg = "Username or password is incorrect!"
                $scope.showAlert();
            }
        }, function (response) {
                errorMsg = "Something bad happened! Refresh page and try again!"
                $scope.showAlert();
        });
    };

    $scope.register = function () {
        $mdDialog.show({
            templateUrl: "./views/register.view.html"
        })
    };

    //ALERT modal
    function showAlert() {
        alert = $mdDialog.alert({
            title: 'Error!',
            textContent: errorMsg,
            ok: 'Close'
        });

        $mdDialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
    };

}]);