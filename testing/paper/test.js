var createGameArea = function(width, height) {
    var margin = 10;
    var area = new Rectangle(margin, margin, width, height);
    var path = new Path.Rectangle(area);
    
    path.fillColor = '#ccf';
};

var createCell = function(x, y) {
    var baseMargin = 10;
    var margin = 5;
    var size = 45;
    var xPos = x * (size + margin) + margin;
    var yPos = y * (size + margin) + margin;
    var cell = new Rectangle(baseMargin + xPos, baseMargin + yPos, size, size);
    var path = new Path.Rectangle(cell);

    path.fillColor = '#4c4';
};


createGameArea(505, 505);
for(var i=0; i<10; i++) {
    xPos = parseInt(Math.random() * 10);
    yPos = parseInt(Math.random() * 10);
    createCell(xPos, yPos);
}
