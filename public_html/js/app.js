var app = angular.module("canvasDrawer", []);

app.controller("drawerCtrl", function ($scope) {
    $scope.mapElement = " ";
    $scope.canvas = document.getElementById('canvasDrawer');
    $scope.context = $scope.canvas.getContext('2d');
    $scope.background = new Image();
    $scope.background.src = "pietro1.jpg";

    $scope.background.onload = function () {
        $scope.context.drawImage($scope.background, 0, 0);
    };

    $scope.canvas.addEventListener("click", function(evt){
        var mousePos = $scope.getMousePos($scope.canvas, evt);
        $scope.mapElement += mousePos.x + ',' + mousePos.y + ', ';
        console.log($scope.mapElement);
        $scope.setMapPoint($scope.mapElement);
    });

    $scope.setMapPoint = function(mapPoint){
        $scope.mapPoints = mapPoint;
    };
    
    $scope.clear = function () {
        $scope.mapElement = " ";
    };

    $scope.writeMessage = function (message) {
        console.log(message);
    };

    $scope.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
});