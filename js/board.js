var BOARD = (function() {

    var _elem = 'game',
        _paper,
        _board_width = 5,
        _board_height = 5,
        _num_cells,
        _cell_size = 80,
        _padding = 10,
        _stones = {};

    var setupBoard = function(boardSize) {
        var xyArray = boardSize.split('x');

        if (xyArray.length == 2) {
            _board_width = parseInt(xyArray[0]);
            _board_height = parseInt(xyArray[1]);
        }

        _num_cells = _board_width * _board_height;
    };

    var setupCanvas = function() {
        var w, h, bg;

        w = _board_width * (_cell_size + _padding) + _padding;
        h = _board_height * (_cell_size + _padding) + _padding;

        _paper = Raphael(_elem, w, h);
        bg = _paper.rect(0, 0, w, h, 8);
        bg.attr({ 'fill' : '#ddf', 'stroke-width' : 0 });
    };

    var getNewStone = function(index) {
        var ix, iy, x, y;

        ix = index % _board_width;
        iy = Math.floor(index / _board_width);

        x = ix * (_cell_size + _padding) + _padding;
        y = iy * (_cell_size + _padding) + _padding;

        return _paper.rect(x, y, _cell_size, _cell_size, 4)
              .attr({ 'fill' : '#f00', 'stroke-width' : 0 });
    };

    var addRandomStone = function() {
        var randomIndex;

        while (true) {
            randomIndex = UTIL.randomInRange(0, _num_cells - 1);
            if (!_stones.hasOwnProperty(randomIndex)) {
                _stones[randomIndex] = getNewStone(randomIndex);
                break;
            }
        }
    };

    var deleteRandomStone = function() {
        var randomIndex;

        if (!jQuery.isEmptyObject(_stones)) {
            while (true) {
                randomIndex = UTIL.randomInRange(0, _num_cells - 1);
                if (_stones.hasOwnProperty(randomIndex)) {
                    _stones[randomIndex].remove();
                    delete _stones[randomIndex];
                    break;
                }
            }
        } else {
            console.log('Board is empty!');
        }
    };

    return {
        // Sets HTML container to use.
        SetElement: function(el) {
            _elem = el;
        },

        // Sets padding between cells / stones.
        SetPadding: function(padding) {
            _padding = padding;
        },

        // Sets cell / stone sizes.
        SetCellSize: function(cellSize) {
            _cell_size = cellSize;
        },

        // Initializes game board and canvas.
        Init: function(boardSize) {
            setupBoard(boardSize);
            setupCanvas();
        },

        // Add a random stone to board.
        AddStone: function() {
            addRandomStone();
        },

        // Delete a random stone from board, if any exists.
        DeleteStone: function() {
            deleteRandomStone();
        },

        // Fill board with given number of randomly placed stones.
        Populate: function(numStones) {
            for (var i = 0; i < numStones; i++) {
                addRandomStone();
            }
        }
    };
})();
