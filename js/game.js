var GAME = (function() {

    var _num_stones = 10,
        _num_cells,
        _cells = [],
        _stones = [],
        _board_width,
        _board_height,
        _game_area,
        _paper,
        _padding,
        _cell_size,
        _cellColor = '#ddf',
        _attrCell = { 'fill' : _cellColor, 'stroke-width' : 0 },
        _attrStone = { 'fill' : '#4c4', 'stroke-width' : 0 };

    /**
     * Setups background zone for play area.
     */
    var setupGameArea = function(el) {
        var width, height;
        var _attrBackground = { 'fill' : '#ddf', 'stroke-width' : 0 };

        width = _board_width * (_cell_size + _padding) + _padding;
        height = _board_height * (_cell_size + _padding) + _padding;
        _paper = Raphael(el, width, height);
        _game_area = _paper.rect(0, 0, width, height, 8);
        _game_area.attr(_attrBackground);
    };

    /**
     * Cell objects are created and placed into _cells array
     * with background color (thus invisible).
     */
    var setupCells = function() {
        var newCell, x, y;

        for (var ix = 0; ix < _board_width; ix++) {
            for (var iy = 0; iy < _board_height; iy++) {
                x = ix * (_cell_size + _padding) + _padding;
                y = iy * (_cell_size + _padding) + _padding;
                newCell = _paper.rect(x, y, _cell_size, _cell_size, 4);
                newCell.attr(_attrCell);
                _cells[ix + _board_width * iy] = newCell;
              }
          }
    };

    /**
     * A specific number of cells (in this case _num_stones)
     * are painted in green, as a starting set.
     */
    var placeStones = function() {
        var i = 0;
        while (i < _num_stones) {
            index = UTIL.randomInRange(0, _num_cells - 1);
            if (_cells[index].attr('fill') === _cellColor) {
                _cells[index].attr(_attrStone);
                _stones.push(index);
                i++;
            }
        }
    };

    /**
     * Deletes one random cell from play area, by coloring it
     * to background (empty) color.
     */
    var deleteStone = function() {
        var index;

        if (_num_stones > 0) {
            index = _stones.pop(UTIL.randomInRange(0, _num_stones - 1));
            _cells[index].attr(_attrCell);
            _num_stones--;
        }
    };

    var parseBoardSize = function(sizeString) {
        var boardSize;
        boardSize = sizeString.split('x');
        if (boardSize.length === 2) {
            _board_width = parseInt(boardSize[0]);
            _board_height = parseInt(boardSize[1]);
        } else {
            // Go on with default size.
            _board_width = 10;
            _board_height = 10;
        }

        _num_cells = _board_width * _board_height;
    };

    /**
     * Add a new cell, by coloring it to green color.
     */
    var addStone = function() {
        var newIndex;
        while (true) {
            if (_num_stones == _num_cells) {
                break;
            }
            newIndex = UTIL.randomInRange(0, _num_cells - 1);
            if (_cells[newIndex].attr('fill') === _cellColor) {
                _cells[newIndex].attr(_attrStone);
                _stones.push(newIndex);
                _num_stones++;
                break;
            }
        }
    };

    return {

        /**
         * This method, served by GAME object, used to setup game;
         * by drawing play area, and placing initial stones.
         * @param {string} el           Name of HTML element to place game area.
         * @param {string} boardSize    Size of board, with cell units in
         *                              "[w]x[h]" format.
         * @param {int}    cellSize     Size of a single square cell.
         * @param {int}    padding      Padding space between cells.
         */
        Setup: function(el, boardSize, cellSize, padding) {

            parseBoardSize(boardSize);

            _cell_size = cellSize;
            _padding = padding;

            setupGameArea(el);
            setupCells();
            placeStones();
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
                deleteStone();
            } else {
                // Add new cell.
                addStone();
            }
        },
    };

})();
