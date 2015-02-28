// Purpose of the game is to clear all stones on the board.
// Initially there are 10 stones, and each correct answer
// removes one stone, while each wrong answer adds one.
var GAME = (function(board) {

    var _num_stones = 10,
        _winner,
        _playing = true;

    return {

        // Used to set initial number of stones in game (default is 10).
        SetStones: function(numStones) {
          _num_stones = numStones;
        },

        // Setup game with given parameters.
        Setup: function(el, boardSize, cellSize, padding) {
          // Sets HTML container for game board ('game', if not given).
          board.SetElement(el);
          // Sets cell/stone size for game board (80, if not given).
          board.SetCellSize(cellSize);
          // Padding between cells (10, if not given).
          board.SetPadding(padding);
          // Inits game & view with given size (10x10 used, if not given).
          board.Init(boardSize);
          // Place initial number of stones on game board.
          board.Populate(_num_stones);
        },

        // Used to send player action into the game.
        PlayerAction: function(value) {
            if (!_playing) {
              return;
            }

            if (value === true) {
                // Delete one cell.
                board.DeleteStone();
                _num_stones--;
                if (board.IsEmpty()) {
                  // Game is won.
                  _playing = false;
                  _winner = 'player';
                }
            } else {
                // If still playing,
                if (!board.IsFull()) {
                  // Add new cell.
                  board.AddStone();
                } else {
                  // Game is lost.
                  _playing = false;
                  _winner = 'game';
                }
            }
        },

        // Used to detect if game continues
        IsPlaying: function() {
            return _playing;
        },

        // Used to detect winner of game ended
        Winner: function() {
            return _winner;
        }
    };

})(BOARD);
