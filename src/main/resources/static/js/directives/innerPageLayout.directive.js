var app = angular.module("app");

app.directive("innerPageLayout", ["$compile", function ($compile) {
    return {
        scope: {
            pictures: '=',
            page: '='
        },
        link: function (scope, element) {
            var elements = [".scanned-pictures", ".translations", ".favourites", ".settings"];

            scope.$watch('page', function (newval) {
                if (newval != null) {
                    switch (newval) {
                        case "scannedPictures":
                            clearContent();
                            buildScannedPictures();
                            break;
                        case "translations":
                            clearContent();
                            buildTranslations();
                            break;
                        case "favourites":
                            clearContent();
                            buildFavourites();
                            break;
                        case "settings":
                            clearContent();
                            buildSettings();
                            break;
                    }
                }
            });

            //build scanned pictures HTML
            buildScannedPictures = function () {
                var rowstart = "<div class='scanned-pictures' layout='row'>";
                var rowend = "</div>";
                var picturetemplate = "<div my-pictures data-picture='item' data-theme='theme'></div>";
                var fullhtml = "";
                fullhtml += rowstart;
                for (var i = 0; i < scope.pictures.length; i++) {
                    var actualcard = picturetemplate.replace('item', "pictures[" + i + "]");
                    fullhtml = (i % 6 !== 0) ? fullhtml + actualcard : fullhtml + rowend + rowstart + actualcard;
                }
                fullhtml += rowend;
                var e = angular.element(fullhtml).appendTo(element);
                $compile(e)(scope);
            };

            //build translations HTML
            buildTranslations = function () {
                var fullhtml = "<div class='translations'> translations </div>";
                var e = angular.element(fullhtml).appendTo(element);
                $compile(e)(scope);
            };

            //build favourites HTML
            buildFavourites = function () {
                var fullhtml = "<div class='favourites'> favourites </div>";
                var e = angular.element(fullhtml).appendTo(element);
                $compile(e)(scope);
            };

            //build settings HTML
            buildSettings = function () {
                var fullhtml = "<div class='settings'> settings </div>";
                var e = angular.element(fullhtml).appendTo(element);
                $compile(e)(scope);
            };

            //clear HTML contents
            clearContent = function () {
                for (var i = 0; i < elements.length; i++) {
                    var e = angular.element(document.querySelectorAll(elements[i])).remove();
                    $compile(e)(scope);
                }
            };
        }
    }
}]);
