var INPUT = (function(game, question) {
    var _entered_string = '';

    return {
        AddOneCharacter: function(key) {
            var value;
            if (key == 27) {
                // Escape : 27
                // Clear entered string.
                _entered_string = '';
                question.ShowAnswer(_entered_string);
            } else if (key == 8) {
                // Backspace : 8
                // Delete last character from entered string.
                if (_entered_string.length > 0) {
                    _entered_string = _entered_string.substring(
                                        0, _entered_string.length - 1);
                    question.ShowAnswer(_entered_string);
                }
            } else if (key == 13) {
                // Entere : 13
                if (_entered_string.length > 0) {
                    var result = question.CheckAnswer(_entered_string);
                    game.PlayerAction(result);
                    question.NewQuestion();
                    _entered_string = '';
                }
            } else {
                // Add to entered string if alpha-numeric.
                value = String.fromCharCode(key);
                if (question.ValidChar(value)) {
                    _entered_string += value;
                    question.ShowAnswer(_entered_string);
                }
            }
        }
    };
})(GAME, QUESTION);
