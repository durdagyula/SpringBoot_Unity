var app = angular.module("app");

app.controller("SettingController", ["$scope", "$http", "$mdDialog", function MainController($scope, $http, $mdDialog) {

    $scope.currentUser = null;
    $scope.changePassword = changePassword;
    $scope.showAlert = showAlert;

    $http.get("getCurrentUser").then(function (response) {
        if (!response.data) {
            $location.path("/");
        } else {
            $scope.currentUser = response.data;
        }
    });

    function changePassword(curpsw, newpsw) {
        $http.post("changeUserPassword", {current: curpsw, new: newpsw, id: $scope.currentUser.id}).then(function (response) {
            if(response.data){
                title = "SUCCESS";
                errorMsg = "Your password was changed successfully!";
                $scope.showAlert();
            }else{
                title = "ERROR";
                errorMsg = "That is not your current password!";
                $scope.showAlert();
            }
        }, function (response) {
            errorMsg = "Something bad happened! Refresh page and try again!";
            $scope.showAlert();
        })
    }

    //ALERT modal
    function showAlert() {
        var alert = $mdDialog.alert({
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
