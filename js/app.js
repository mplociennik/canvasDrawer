var app = angular.module("canvasDrawer", []);

app.controller("drawerCtrl", function ($scope) {
    $scope.mapElement = " ";
    $scope.canvas = document.getElementById('canvasDrawer');
    $scope.context = $scope.canvas.getContext('2d');
    $scope.background = null;

    $scope.canvas.addEventListener("click", function(evt){
        var mousePos = $scope.getMousePos($scope.canvas, evt);
        $scope.mapElement += mousePos.x + ',' + mousePos.y + ', ';
        console.log($scope.mapElement);
        $scope.setMapPoint($scope.mapElement);
    });

    $scope.setMapPoint = function(mapPoint){
        $scope.mapPoints = mapPoint;
        $('#mapPoints').text($scope.mapPoints);
    };
    
    $scope.clear = function () {
        $scope.mapElement = " ";
        $scope.mapPoints = " ";
        $('#mapPoints').text($scope.mapPoints);
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

    $scope.openImage = function(imgName){
        $scope.clear();
        $scope.canvas = document.getElementById('canvasDrawer');
        $scope.context = $scope.canvas.getContext('2d');
        $scope.background = new Image();
        $scope.background.src = imgName;
        $scope.background.onload = function () {
            $scope.canvas.width = $scope.background.width;
            $scope.canvas.height = $scope.background.height;
            $scope.context.drawImage($scope.background, 0, 0);
        };
    };
});