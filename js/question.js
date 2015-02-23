var QUESTION = (function() {

    var _add_a, _add_b, _add_s;
    var _question_template;
    var _question_param = {};
    var _correct_answer;

    var randomInRange = function(a, b) {
        return a + Math.floor(Math.random() * (b - a + 1));
    };

    var formQuestion = function() {
        var h_a, h_b, h_s;
        _add_a = randomInRange(0, 8);
        _add_b = randomInRange(0, 9 - _add_a);
        _add_s = _add_a + _add_b;

        _question_type = randomInRange(1, 3);
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
            add_s: _add_s
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
        }
    };
})();
