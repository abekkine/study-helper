var util = require('../js/util').util;
var add_one = require('../js/q/add_one').add_one;

exports['add_one'] = function(test) {

    var q = add_one(util);

    test.expect(6);

    test.equal(q.operator, '+');
    test.equal(q.operand_a + q.operand_b, q.result);
    test.equal(q.valid_length, 1);
    test.equal(q.operand_a >=0 && q.operand_a <=9, true);
    test.equal(q.operand_b >=0 && q.operand_b <=9, true);
    test.equal(q.result >=0 && q.result <=9, true);
    test.done();
};

