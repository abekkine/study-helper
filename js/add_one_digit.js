var Q_AddOneDigit = (function() {
    var _add_a, _add_b, _add_s,
        _h_a, _h_b, _h_s,
        _question_template,
        _question_param = {},
        _correct_answer,
        _current_answer = '?',
        _valid_length = 1;

    // TODO : Differs between question types.
    var buildQuestion = function() {

        _add_a = UTIL.randomInRange(0, 8);
        // Fix to reduce probability of zero values.
        if (_add_a === 0) {
            _add_a = UTIL.randomInRange(0, 8);
        }
        _add_b = UTIL.randomInRange(1, 9 - _add_a);
        _add_s = _add_a + _add_b;
    };

    // TODO : should be generalized for all two component question types.
    var pickQuestionType = function() {
        _h_a = undefined;
        _h_b = undefined;
        _h_s = undefined;

        _question_type = UTIL.randomInRange(1, 3);
        switch (_question_type) {
            case 1:
                // Ask A
                _h_a = true;
                _correct_answer = _add_a;
                break;

            case 2:
                // Ask B
                _h_b = true;
                _correct_answer = _add_b;
                break;

            case 3:
                // Ask S
                _h_s = true;
                _correct_answer = _add_s;
                break;
        }
    };

    // TODO : should be generalized for all question types.
    var formQuestion = function() {
        _question_param = {
            hide_1: _h_a,
            hide_2: _h_b,
            hide_r: _h_s,
            op_1: _add_a,
            op_2: _add_b,
            operator: '+',
            op_result: _add_s,
            current_answer: _current_answer
        };
    };

    // TODO : should be generalized for all question types.
    var fillHtml = function() {
        var question_html = Mustache.render(_question_template, _question_param);
        $('#question').html(question_html);
    };

    // TODO : should be generalized for all question types.
    var renderQuestion = function() {
        if (_question_template === undefined) {
            $.get('templates/two_component_operation.mustache.html', function(template) {
                _question_template = template;
                fillHtml();
            });
        } else {
            fillHtml();
        }
    };

    return {
        NewQuestion: function() {
            buildQuestion();
            pickQuestionType();
            formQuestion();
            renderQuestion();
        },

        CheckAnswer: function(answer) {
            return (_correct_answer == answer);
        },

        // TODO : changes for different question types.
        ValidChar: function(c) {
            return /[0-9]/.test(c);
        },

        // TODO : changes for different question types.
        ValidLength: function(l) {
            return l < _valid_length;
        },

        ShowAnswer: function(answer) {
            if (answer === '') {
                _question_param.current_answer = '?';
            } else {
                _question_param.current_answer = answer;
            }

            fillHtml();
        }
    };
})();