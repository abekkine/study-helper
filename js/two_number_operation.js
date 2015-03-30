function TwoNumberOperation(builder) {
    var _question_data,
        _ask_a, _ask_b, _ask_result,
        _question_template,
        _question_param = {},
        _question_type,
        _correct_answer,
        _current_answer = '?';

    var buildQuestion = builder;

    var pickQuestionType = function () {
        _ask_a = false;
        _ask_b = false;
        _ask_result = false;

        _question_type = UTIL.randomInRange(1, 3);
        switch (_question_type) {
        case 1:
            _ask_a = true;
            _correct_answer = _question_data.operand_a;
            break;

        case 2:
            _ask_b = true;
            _correct_answer = _question_data.operand_b;
            break;

        case 3:
            _ask_result = true;
            _correct_answer = _question_data.result;
            break;
        }
    };

    var formQuestion = function () {
        _question_param = {
            ask_a: _ask_a,
            ask_b: _ask_b,
            ask_result: _ask_result,
            operand_a: _question_data.operand_a,
            operand_b: _question_data.operand_b,
            result: _question_data.result,
            operator: _question_data.operator,
            current_answer: _current_answer
        };
    };

    var fillHtml = function () {
        var question_html = Mustache.render(_question_template, _question_param);
        $('#question').html(question_html);
    };

    var renderQuestion = function () {
        if (_question_template === undefined) {
            $.get('templates/two_component_operation.mustache.html', function (template) {
                _question_template = template;
                fillHtml();
            });
        } else {
            fillHtml();
        }
    };

    return {
        NewQuestion: function () {
            _question_data = buildQuestion(UTIL);
            pickQuestionType();
            formQuestion();
            renderQuestion();
        },

        CheckAnswer: function (answer) {
            return (_correct_answer.toString() === answer);
        },

        ValidChar: function (c) {
            return /[0-9]/.test(c);
        },

        ValidLength: function (l) {
            return l < _question_data.valid_length;
        },

        ShowAnswer: function (answer) {
            if (answer === '') {
                _question_param.current_answer = '?';
            } else {
                _question_param.current_answer = answer;
            }

            fillHtml();
        }
    };
}
