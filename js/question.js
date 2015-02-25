var QUESTION = (function() {

    var _add_a, _add_b, _add_s;
    var _question_template;
    var _question_param = {};
    var _correct_answer;
    var _current_answer = '?';

    var formQuestion = function() {
        var h_a, h_b, h_s;
        _add_a = UTIL.randomInRange(0, 8);
        _add_b = UTIL.randomInRange(0, 9 - _add_a);
        _add_s = _add_a + _add_b;

        _question_type = UTIL.randomInRange(1, 3);
        switch (_question_type) {
            case 1:
                // Ask A
                h_a = true;
                _correct_answer = _add_a;
                break;

            case 2:
                // Ask B
                h_b = true;
                _correct_answer = _add_b;
                break;

            case 3:
                // Ask S
                h_s = true;
                _correct_answer = _add_s;
                break;
        }
        _question_param = {
            hide_a: h_a,
            hide_b: h_b,
            hide_s: h_s,
            add_a: _add_a,
            add_b: _add_b,
            add_s: _add_s,
            current_answer: _current_answer
        };
    };

    var fillHtml = function() {
        question_html = Mustache.render(_question_template, _question_param);
        $('#question').html(question_html);
    };

    var renderQuestion = function() {
        if (_question_template === undefined) {
            $.get('templates/basic_addition.mustache.html', function(template) {
                _question_template = template;
                fillHtml();
            });
        } else {
            fillHtml();
        }
    };

    return {
        NewQuestion: function() {
            formQuestion();
            renderQuestion();
        },

        CheckAnswer: function(answer) {
            return (_correct_answer == answer);
        },

        ValidChar: function(c) {
            return /[0-9]/.test(c);
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
