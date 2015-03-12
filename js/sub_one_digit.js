var Q_SubOneDigit = (function() {
    var _operand_a, _operand_b, _result,
        _ask_a, _ask_b, _ask_result,
        _question_template,
        _question_param = {},
        _question_type,
        _correct_answer,
        _current_answer = '?',
        _operator,
        _valid_length;

    var buildQuestion = function() {

        _operand_a = UTIL.randomInRange(1, 9);
        _operand_b = UTIL.randomInRange(1, _operand_a);
        _result = _operand_a - _operand_b;

        _operator = '-';
        _valid_length = 1;
    };

    var pickQuestionType = function() {
        _ask_a = false;
        _ask_b = false;
        _ask_result = false;

        _question_type = UTIL.randomInRange(1, 3);
        switch (_question_type) {
            case 1:
                _ask_a = true;
                _correct_answer = _operand_a;
                break;

            case 2:
                _ask_b = true;
                _correct_answer = _operand_b;
                break;

            case 3:
                _ask_result = true;
                _correct_answer = _result;
                break;
        }
    };

    var formQuestion = function() {
        _question_param = {
            ask_a: _ask_a,
            ask_b: _ask_b,
            ask_result: _ask_result,
            operand_a: _operand_a,
            operand_b: _operand_b,
            result: _result,
            operator: _operator,
            current_answer: _current_answer
        };
    };

    var fillHtml = function() {
        var question_html = Mustache.render(_question_template, _question_param);
        $('#question').html(question_html);
    };

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