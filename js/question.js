var QUESTION_MGR = (function() {

    var question_list = [],
        current_question;

    var add_one = TwoNumberOperation(q_add_one),
        mul_one = TwoNumberOperation(q_mul_one),
        add_two = TwoNumberOperation(q_add_two),
        add_two_carry = TwoNumberOperation(q_add_two_carry),
        sub_one = TwoNumberOperation(q_sub_one),
        sub_two = TwoNumberOperation(q_sub_two),
        sub_two_borrow = TwoNumberOperation(q_sub_two_borrow);

    question_list.push(add_one);
    question_list.push(mul_one);
    question_list.push(add_two);
    question_list.push(add_two_carry);
    question_list.push(sub_one);
    question_list.push(sub_two);
    question_list.push(sub_two_borrow);

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
