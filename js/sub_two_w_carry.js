var Q_SubTwoDigitWithCarry = (function() {
    var _correct_answer,
        _valid_length,
        _question_param;

    var buildQuestion = function() {};
    var pickQuestionType = function() {};
    var formQuestion = function() {};
    var renderQuestion = function() {
        fillHtml();
    };

    var fillHtml = function() {
        $('#question').html('SubTwoWithCarry');
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