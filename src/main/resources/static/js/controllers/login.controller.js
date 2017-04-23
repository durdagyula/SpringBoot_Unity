var app = angular.module("app");

app.controller("LoginController", ["$http", "$scope", "$mdDialog", 'userFactory', function LoginController($http, $scope, $mdDialog, userFactory) {

    $scope.username = "";
    $scope.password = "";
    var alert;
    var errorMsg;
    $scope.showAlert = showAlert;

    $scope.login = function () {
        var promise = userFactory.login($scope.username, $scope.password);
        promise.then(function (response) {
            if (!response){
                errorMsg = "Username or password is incorrect!";
                $scope.showAlert();
            }
        })
            //if (!data){
            //    errorMsg = "Username or password is incorrect!";
            //    $scope.showAlert();
            //}
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
    }


}]);