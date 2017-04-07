var app = angular.module("app");

app.controller("MainController", ["$scope", "$http", "$location", "$mdDialog", "$route", function MainController($scope, $http, $location, $mdDialog, $route) {

    $scope.currentUser = null;
    $scope.pictures = [];
    $scope.showAlert = showAlert;
    $scope.selectedResult = null;

    $http.get("getCurrentUser").then(function (response) {
        if (!response.data) {
            $location.path("/");
        } else {
            $scope.currentUser = response.data;
            getUserPicture();
        }
    });

    $scope.getResult = function (id) {
        $http.post("getResultByPictureId", id).then(function (response) {
            if (response.data.result){
                $scope.selectedResult = response.data;
                $mdDialog.show({
                    locals:{selectedResult: $scope.selectedResult},
                    clickOutsideToClose: true,
                    templateUrl: "./templates/selected-picture.html",
                    controller: DialogCtrl
                });
            }

        }, function (response) {
            errorMsg = "Something bad happened! Refresh page and try again!"
            $scope.showAlert();
        })
    };

    $scope.deletePicture = function (id) {
        $http.post("deletePictureById", id).then(function (response) {
            if (response.data){
                title = "Delete picture"
                errorMsg = "The selected picture was deleted successfully!"
                $scope.showAlert();
                $route.reload();
            }
        }, function (response) {
            title = "Error!"
            errorMsg = "Something bad happened! Refresh page and try again!"
            $scope.showAlert();
        })
    };

    //share scope selectedResult with the modal!
    function DialogCtrl($scope, $mdDialog, selectedResult) {
        $scope.selectedResult = selectedResult;
        $scope.close = close;

        function close() {
            $mdDialog.hide();
        };
    }



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

    //get user pictures
    function getUserPicture() {
        $http.post("getUserPictures/" + $scope.currentUser.id).then(function (response) {
            if (response.data) {
                $scope.pictures = response.data;
            }
        })
    }
}]);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
