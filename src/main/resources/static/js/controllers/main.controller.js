var app = angular.module("app");

app.controller("MainController", ["$scope", "$http", "$location", function MainController($scope, $http, $location) {

    $scope.currentUser = null;
    $scope.pictures = [];

    $http.get("getCurrentUser").then(function (response) {
        if (!response.data) {
            $location.path("/");
        } else {
            $scope.currentUser = response.data;
            $http.post("getUserPictures/" + $scope.currentUser.id).then(function (response) {
                if (response.data) {
                    $scope.pictures = response.data;
                }
            })
        }
    });

}])
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
})
//app.directive("myPictures", function () {
//    return {
//        scope: {picture: '='},
//        templateUrl: "./templates/my-pictures.html"
//    }
//})
//app.directive("myPicturesLayout", ["$compile", function ($compile) {
//    return {
//        scope: {pictures: '='},
//        link: function (scope, element) {
//            scope.$watch('pictures', function (newval, oldval) {
//                if (newval.length > 0) {
//                    var rowstart = "<div layout='row'>";
//                    var rowend = "</div>";
//                    var picturetemplate = "<div my-pictures data-picture='item'></div>";
//                    var fullhtml = "";
//                    fullhtml += rowstart;
//                    for (var i = 0; i < scope.pictures.length; i++) {
//                        var actualcard = picturetemplate.replace('item', "pictures[" + i + "]");
//                        fullhtml = (i % 3 !== 0) ? fullhtml + actualcard : fullhtml + rowend + rowstart + actualcard;
//                    }
//                    fullhtml += rowend;
//                    var e = angular.element(fullhtml).appendTo(element);
//                    $compile(e)(scope);
//                }
//            });
//        }
//    }
//}]);
