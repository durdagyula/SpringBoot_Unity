<!DOCTYPE html>

<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
</head>
<body>
<div class="container">
    <div class="jumbotron">
        <div ng-app="">
            <p>Input something in the input box:</p>
            <p>Name : <input type="text" ng-model="name" placeholder="Enter name here"></p>
            <h1>Hello {{name}}</h1>

        </div>
    </div>
</div>
</body>
</html>