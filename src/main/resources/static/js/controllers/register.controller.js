var app = angular.module("app");

app.controller("RegisterCtrl", ["$scope", "$http", "$mdDialog", function RegisterCtrl($scope, $http, $mdDialog) {

    $scope.close = close;
    $scope.showAlert = showAlert;
    $scope.user = {
        name: '',
        email: '',
        password: ''
    };

    function close() {
        $mdDialog.hide();
    };

    $scope.submit = function () {
        $http.post("createAccount", {username: $scope.user.name, password: $scope.user.password, email: $scope.user.email}).then(function (response) {
            if (response.data) {
                title = "Register";
                errorMsg = "Success!";
                $scope.showAlert();
            } else {
                title = "Error!";
                errorMsg = "Username is in use!";
                $scope.showAlert();
            }
        }, function (response) {
            title = "Error!";
            errorMsg = "Something bad happened! Refresh page and try again!";
            $scope.showAlert();
        });
    };

    //ALERT modal
    function showAlert() {
        alert = $mdDialog.alert({
            title: title,
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