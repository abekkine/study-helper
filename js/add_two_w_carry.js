var Q_AddTwoDigitWithCarry = (function() {
    var _num_AB, _num_CD, _num_EF,
        _dig_A, _dig_B,
        _dig_C, _dig_D,
        _dig_E, _dig_F,
        _h_AB, _h_CD, _h_EF,
        _question_template,
        _question_param = {},
        _question_type,
        _correct_answer,
        _current_answer = '?',
        _valid_length = 2;

    var buildQuestion = function() {
        // Add two digit numbers with carry.
        // That is, (B + D >= 10),
        //
        //    A B
        //  + C D
        //  _____
        //    E F
        //
        // Compute ones and tens.
        _dig_B = UTIL.randomInRange(1, 9);
        _dig_D = UTIL.randomInRange(10 - _dig_B, 9);
        _dig_A = UTIL.randomInRange(1, 8);
        _dig_C = UTIL.randomInRange(1, 8 - _dig_A);
        // Compute numbers.
        _num_AB = 10 * _dig_A + _dig_B;
        _num_CD = 10 * _dig_C + _dig_D;
        _num_EF = _num_AB + _num_CD;
    };

    var pickQuestionType = function() {
        _h_AB = undefined;
        _h_CD = undefined;
        _h_EF = undefined;

        _question_type = UTIL.randomInRange(1, 3);
        switch (_question_type) {
            case 1:
                _h_AB = true;
                _correct_answer = _num_AB;
                break;

            case 2:
                _h_CD = true;
                _correct_answer = _num_CD;
                break;

            case 3:
                _h_EF = true;
                _correct_answer = _num_EF;
                break;
        }
    };

    var formQuestion = function() {
        _question_param = {
            hide_1: _h_AB,
            hide_2: _h_CD,
            hide_r: _h_EF,
            op_1: _num_AB,
            op_2: _num_CD,
            operator: '+',
            op_result: _num_EF,
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