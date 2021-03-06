<!DOCTYPE html>

<html lang="en" ng-app="app">
<head>
    <link rel="icon" type="image/png" href="images/fav.png">
    <link rel="stylesheet" type="text/css" href="css/main.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
</head>
<body>

<div class="page">
    <header></header>

    <div class="main">
        <ng-view></ng-view>
    </div>

    <footer></footer>
</div>

<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular-animate.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular-aria.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular-messages.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular-route.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular-cookies.js"></script>
<script src="js/app.js"></script>
<script src="js/controllers/main.controller.js"></script>
<script src="js/controllers/login.controller.js"></script>
<script src="js/controllers/setting.controller.js"></script>
<script src="js/controllers/register.controller.js"></script>
<script src="js/directives/myPictures.directive.js"></script>
<script src="js/directives/mySettings.directive.js"></script>
<script src="js/directives/innerPageLayout.directive.js"></script>
<script src="js/filters/string.filter.js"></script>
<script src="js/factories/user.factory.js"></script>
</body>
</html>