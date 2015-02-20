var GAME = (function(){

    var _paper = undefined;
    var _width = undefined;
    var _height = undefined;
    var _el = undefined;
    var _cell_margin = 5;
    var _game_margin = 10;
    var _cell_size = 45;

    return {
        Setup: function(el, width, height) {
            _width = width;
            _height = height;
            _paper = Raphael(el, width, height);
        },

        drawGameArea: function() {
            var areaAttr = { "fill" : "#ccf", "stroke-width" : 0 };
            area = _paper.rect( _game_margin, _game_margin, _width, _height, 8);
            area.attr(areaAttr);
        },

        drawSingleCell: function(x, y) {
            var xPos = x * (_cell_size + _cell_margin) + _cell_margin;
            var yPos = y * (_cell_size + _cell_margin) + _cell_margin;
            var cellAttr = { "fill": "#4c4", "stroke-width" : 0 };
            cell = _paper.rect(_game_margin + xPos, _game_margin + yPos, _cell_size, _cell_size, 4);
            cell.attr(cellAttr);
        },

        drawCells: function() {

            for(var i=0; i<10; i++) {
                xPos = parseInt(Math.random() * 10);
                yPos = parseInt(Math.random() * 10);
                this.drawSingleCell(xPos, yPos);
            }
        },

        Draw: function() {
            this.drawGameArea();
            this.drawCells();
        },

        PlayerAction: function(value) {
            console.log("TODO : GAME.PlayerAction(" + value + ")");
        },

        Show: function() {
            console.log("TODO : GAME.Show()");
        },

        Hide: function() {
            console.log("TODO : GAME.Hide()");
        },

        Start: function() {
            console.log("TODO : GAME.Start()");
        },

        Resume: function() {
            console.log("TODO : GAME.Resume()");
        },

        Pause: function() {
            console.log("TODO : GAME.Pause()");
        },

        SaveAndExit: function() {
            console.log("TODO : GAME.SaveAndExit()");
        },

        Exit: function() {
            console.log("TODO : GAME.Exit()");
        }
    }

})();
