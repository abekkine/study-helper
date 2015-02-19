$(function() {

    var canvas = oCanvas.create({
        canvas: "#area",
        background: "#fff",
        width: 800,
        height: 800
    });

    var createGameArea = function(width, height) {
        var margin = 10;

        var area = canvas.display.rectangle({
            x: margin,
            y: margin,
            width: width,
            height: height,
            fill: "#ccf"
        });

        canvas.addChild( area );
    };

    var createCell = function(x, y) {
        var baseMargin = 10;
        var margin = 5;
        var size = 45;
        var xPos = x * (size + margin) + margin;
        var yPos = y * (size + margin) + margin;
        var cell = canvas.display.rectangle({
            x: baseMargin + xPos,
            y: baseMargin + yPos,
            width: size,
            height: size,
            fill: "#4c4"
        });

        canvas.addChild( cell );
    };

    createGameArea(505, 505);
    for(var i=0; i<10; i++) {
        xPos = parseInt(Math.random() * 10);
        yPos = parseInt(Math.random() * 10);
        createCell(xPos, yPos);
    }
});