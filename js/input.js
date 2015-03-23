var INPUT = (function(game, question) {
    var _entered_string = '',
        _keypad_template;

    var parseCharacter = function(key) {
        if (key === 1027) {
            // Escape : 27
            // Clear entered string.
            _entered_string = '';
            question.ShowAnswer(_entered_string);
        } else if (key === 1008) {
            // Backspace : 8
            // Delete last character from entered string.
            if (_entered_string.length > 0) {
                _entered_string = _entered_string.substring(
                                    0, _entered_string.length - 1);
                question.ShowAnswer(_entered_string);
            }
        } else if (key === 1013) {
            // Enter : 13
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
            if (question.ValidChar(key) && question.ValidLength(_entered_string.length)) {
                _entered_string += key;
                question.ShowAnswer(_entered_string);
            }
        }
    };
    var renderKeypad = function() {};

    return {
        ShowKeypad: function() {
            if (_keypad_template === undefined) {
                $.get('templates/keypad.mustache.html', function(template) {
                    _keypad_template = template;
                    var keypad_html = Mustache.render(_keypad_template, {});
                    $('#keypad').html(keypad_html);

                    $('.key').click(function() {
                        var value = $(this).text();
                        switch (value) {
                            case 'CLR':
                                parseCharacter(1027);
                                break;
                            case 'DEL':
                                parseCharacter(1008);
                                break;
                            case '=':
                                parseCharacter(1013);
                                break;
                            default:
                                parseCharacter(value);
                                break;
                        }
                        console.log(value);
                    });
                });
            }
        },

        AddOneCharacter: function(event) {
            var key = event.which;

            switch (key) {
                case 27: // Escape
                case 8: // Backspace
                case 13: // Enter
                    event.preventDefault();
                    parseCharacter(1000 + key);
                    break;

                default:
                    if (key >= 96 && key <= 105) {
                        // Numpad fix
                        parseCharacter(key - 96);
                    } else {
                        // Other keys
                        parseCharacter(String.fromCharCode(key));
                    }
                    break;
            }
        }
    };
})(GAME, QUESTION_MGR);
