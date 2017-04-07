var app = angular.module("app");

app.directive("myPicturesLayout", ["$compile", function ($compile) {
    return {
        scope: {pictures: '='},
        link: function (scope, element) {
            scope.$watch('pictures', function (newval, oldval) {
                if (newval.length > 0) {
                    var rowstart = "<div layout='row'>";
                    var rowend = "</div>";
                    var picturetemplate = "<div my-pictures data-picture='item'></div>";
                    var fullhtml = "";
                    fullhtml += rowstart;
                    for (var i = 0; i < scope.pictures.length; i++) {
                        var actualcard = picturetemplate.replace('item', "pictures[" + i + "]");
                        fullhtml = (i % 3 !== 0) ? fullhtml + actualcard : fullhtml + rowend + rowstart + actualcard;
                    }
                    fullhtml += rowend;
                    var e = angular.element(fullhtml).appendTo(element);
                    $compile(e)(scope);
                }
            });
        }
    }
}]);
