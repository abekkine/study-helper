var INPUT = (function(game, question) {
    var _entered_string = '';

    return {
        AddOneCharacter: function(event) {
            var value;
            var key = event.which;

            if (key == 27) {
                // Escape : 27
                event.preventDefault();
                // Clear entered string.
                _entered_string = '';
                question.ShowAnswer(_entered_string);
            } else if (key == 8) {
                // Backspace : 8
                event.preventDefault();
                // Delete last character from entered string.
                if (_entered_string.length > 0) {
                    _entered_string = _entered_string.substring(
                                        0, _entered_string.length - 1);
                    question.ShowAnswer(_entered_string);
                }
            } else if (key == 13) {
                // Enter : 13
                event.preventDefault();
                if (_entered_string.length > 0) {
                    var result = question.CheckAnswer(_entered_string);
                    game.PlayerAction(result);
                    if (game.IsPlaying()) {
                        // Game continues, ask new question.
                        question.NewQuestion();
                        _entered_string = '';
                    } else {
                        // Game is over, so
                        if (game.Winner() === 'player') {
                            // Winner is player,
                            console.log('Player Won!');
                        } else {
                            // Winner is game.
                            console.log('Player Lost!');
                        }
                    }
                }
            } else {
                // Numpad fix.
                if (key >= 96 && key <= 105) {
                    event.preventDefault();
                    value = key - 96;
                } else {
                    // Add to entered string if alpha-numeric.
                    value = String.fromCharCode(key);
                }

                if (question.ValidChar(value)) {
                    _entered_string += value;
                    question.ShowAnswer(_entered_string);
                }
            }
        }
    };
})(GAME, QUESTION);
