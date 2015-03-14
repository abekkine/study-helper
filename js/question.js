var QUESTION_MGR = (function() {

    var question_list = [],
        current_question;

    var Q_AddOneDigit = TwoNumberOperation(oneDigitAddition);
    var Q_AddTwoDigitWithCarry = TwoNumberOperation(twoDigitAdditionWithCarry);
    var Q_AddTwoDigit = TwoNumberOperation(twoDigitAdditionWithoutCarry);
    var Q_SubOneDigit = TwoNumberOperation(oneDigitSubtraction);
    var Q_SubTwoDigit = TwoNumberOperation(twoDigitSubtraction);
    var Q_SubTwoDigitWithCarry = TwoNumberOperation(twoDigitSubtractionWithCarry);

    question_list.push(Q_AddOneDigit);
    question_list.push(Q_SubOneDigit);
    question_list.push(Q_AddTwoDigit);
    question_list.push(Q_SubTwoDigit);
    question_list.push(Q_AddTwoDigitWithCarry);
    question_list.push(Q_SubTwoDigitWithCarry);

    return {
        NewQuestion: function() {
            var randomIndex = UTIL.randomInRange(0, question_list.length - 1);
            current_question = question_list[randomIndex];
            current_question.NewQuestion();
        },

        CheckAnswer: function(answer) {
            return current_question.CheckAnswer(answer);
        },

        ValidChar: function(c) {
            return current_question.ValidChar(c);
        },

        ValidLength: function(l) {
            return current_question.ValidLength(l);
        },

        ShowAnswer: function(answer) {
            current_question.ShowAnswer(answer);
        }
    };
})();
