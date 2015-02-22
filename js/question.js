var QUESTION = (function() {

    var _question_template = undefined;
    var _question_param = {
        a: undefined,
        b: undefined,
        s: undefined
    };

    var randomInRange = function(a, b) {
        return a + Math.floor(Math.random() * (b - a + 1));
    }

    var formQuestion = function() {
        var a = randomInRange(0, 8);
        var b = randomInRange(0, 9 - a);
        _question_param = {
            add_a: a,
            add_b: b,
            add_s: a + b
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
        }
    };
})();