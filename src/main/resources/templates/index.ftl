<!DOCTYPE html>

<html lang="en" ng-app="app">
    <head>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular-route.min.js"></script>
        <script src="js/app.js"></script>
        <script src="js/main.controller.js"></script>
    </head>
    <body>

        <div class="page">
            <header>
            </header>


            <div class="main">
                <ng-view></ng-view>
            </div>

            <footer>
            </footer>

        </div>

    </body>
</html>