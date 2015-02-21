var GAME = (function() {

    var _num_of_occupied = 10,
        _cells = [],
        _occupiedCells = [],
        _game_area = undefined,
        _paper = undefined,
        _width = undefined,
        _height = undefined,
        _el = undefined,
        _cell_margin = 5,
        _game_margin = 10,
        _cell_size = 45,
        _emptyColor = '#ddf',
        _fillColor = '#4c4',
        _attrEmpty = { 'fill' : _emptyColor, 'stroke-width' : 0 },
        _attrRed = { 'fill' : '#c44', 'stroke-width' : 0 },
        _attrGreen = { 'fill' : _fillColor, 'stroke-width' : 0 },
        _attrBackground = { 'fill' : '#ddf', 'stroke-width' : 0 };

    /**
     * Setups background zone for play area.
     */
    var setupGameArea = function() {
        _game_area = _paper.rect(_game_margin,
                                 _game_margin,
                                 _width, _height, 8);
        _game_area.attr(_attrBackground);
    };

    /**
     * Cell objects are created and placed into _cells array
     * with background color (thus invisible).
     */
    var setupCells = function() {
        var newCell = undefined,
            index = undefined,
            x = undefined,
            y = undefined,
            xPos = undefined,
            yPos = undefined;

        for (var i = 0; i < 100; i++) {
            x = i % 10;
            y = parseInt(i / 10);
            xPos = x * (_cell_size + _cell_margin) + _cell_margin;
            yPos = y * (_cell_size + _cell_margin) + _cell_margin;

            newCell = _paper.rect(_game_margin + xPos,
                                  _game_margin + yPos,
                                  _cell_size, _cell_size, 4);
            newCell.attr(_attrEmpty);
            _cells[i] = newCell;
        }
    };

    /**
     * A specific number of cells (in this case _num_of_occupied)
     * are painted in green, as a starting set.
     */
    var populateOccupied = function() {
        var i = 0;
        while (i < _num_of_occupied) {
            index = parseInt(Math.random() * 100);
            if (_cells[index].attr('fill') === _emptyColor) {
                _cells[index].attr(_attrGreen);
                _occupiedCells.push(index);
                i++;
            }
        }
    };

    /**
     * Deletes one random cell from play area, by coloring it
     * to background (empty) color.
     */
    var deleteOneCell = function() {
        var index, indexToDelete = parseInt(Math.random() * _num_of_occupied);
        index = _occupiedCells.pop(indexToDelete);
        _cells[index].attr(_attrEmpty);
        _num_of_occupied--;
    };

    /**
     * Add a new cell, by coloring it to green color.
     */
    var addNewCell = function() {
        var newIndex;
        while (true) {
            if (_num_of_occupied == 100) {
                break;
            }
            newIndex = parseInt(Math.random() * 100);
            if (_cells[newIndex].attr('fill') === _emptyColor) {
                _cells[newIndex].attr(_attrGreen);
                _occupiedCells.push(newIndex);
                _num_of_occupied++;
                break;
            }
        }
    };

    return {

        /**
         * This method, served by GAME object, used to setup game;
         * by drawing play area, and placing initial celss.
         * @param {string} el     Name of HTML element to place game area.
         * @param {int}    width  Width of game area.
         * @param {int}    height Height of game area.
         */
        Setup: function(el, width, height) {
            _width = width;
            _height = height;
            _paper = Raphael(el, width, height);
            setupGameArea();
            setupCells();
            populateOccupied();
        },

        /**
         * This method, used to inform GAME object of player
         * action.
         * @param {boolean} value true is positive action, in advantage of
         *                        player, while false is not.
         */
        PlayerAction: function(value) {
            if (value === true) {
                // Delete one cell.
                deleteOneCell();
            } else {
                // Add new cell.
                addNewCell();
            }
        },
    };

})();
