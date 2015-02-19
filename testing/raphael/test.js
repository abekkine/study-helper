$(function() {

    var paper = Raphael("area", 550, 550);

    var createGameArea = function(width, height) {
        var margin = 10;
        var areaAttr = { "fill" : "#ccf", "stroke-width" : 0 };
        area = paper.rect(margin, margin, width, height, 8);
        area.attr(areaAttr);
    };

    var createCell = function(x, y) {
        var baseMargin = 10;
        var margin = 5;
        var size = 45;
        var xPos = x * (size + margin) + margin;
        var yPos = y * (size + margin) + margin;
        var cellAttr = { "fill": "#4c4", "stroke-width" : 0 };
        cell = paper.rect(baseMargin + xPos, baseMargin + yPos, size, size, 4);
        cell.attr(cellAttr);
    };


    createGameArea(505, 505);
    for(var i=0; i<10; i++) {
        xPos = parseInt(Math.random() * 10);
        yPos = parseInt(Math.random() * 10);
        createCell(xPos, yPos);
    }
});