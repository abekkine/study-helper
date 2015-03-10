var Q_SubOneDigit = (function() {
    // Sub one digit.
    var _correct_answer,
        _current_answer = '?',
        _valid_length,
        _question_param,
        _question_template,
        _h_a, _h_b, _h_r,
        _sub_a, _sub_b, _sub_r,
        _valid_length = 1;

    var buildQuestion = function() {
        _sub_a = UTIL.randomInRange(1, 9);
        _sub_b = UTIL.randomInRange(1, _sub_a);
        _sub_r = _sub_a - _sub_b;
    };

    var pickQuestionType = function() {
        _h_a = undefined;
        _h_b = undefined;
        _h_r = undefined;

        _question_type = UTIL.randomInRange(1, 3);
        switch (_question_type) {
            case 1:
                // Ask A
                _h_a = true;
                _correct_answer = _sub_a;
                break;

            case 2:
                // Ask B
                _h_b = true;
                _correct_answer = _sub_b;
                break;

            case 3:
                // Ask R
                _h_r = true;
                _correct_answer = _sub_r;
                break;
        }
    };
    var formQuestion = function() {
        _question_param = {
            hide_1: _h_a,
            hide_2: _h_b,
            hide_r: _h_r,
            op_1: _sub_a,
            op_2: _sub_b,
            operator: '-',
            op_result: _sub_r,
            current_answer: _current_answer
        };
    };

    var fillHtml = function() {
        var question_html = Mustache.render(_question_template, _question_param);
        $('#question').html(question_html);
    };

    var renderQuestion = function() {
        if (_question_template === undefined) {
            $.get('templates/two_component_operation.mustache.html', function(template){
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

        ValidChar: function(c) {
            return /[0-9]/.test(c);
        },

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