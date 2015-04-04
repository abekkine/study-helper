var util = require('../js/util').util;
var add_one = require('../js/q/add_one').add_one;
var sub_one = require('../js/q/sub_one').sub_one;
var add_two = require('../js/q/add_two').add_two;
var add_two_carry = require('../js/q/add_two_carry').add_two_carry;
var mul_one = require('../js/q/mul_one').mul_one;
var sub_two = require('../js/q/sub_two').sub_two;
var sub_two_borrow = require('../js/q/sub_two_borrow').sub_two_borrow;

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

exports['sub_one'] = function(test) {

    var q = sub_one(util);

    test.expect(6);

    test.equal(q.operator, '-');
    test.equal(q.operand_a - q.operand_b, q.result);
    test.equal(q.valid_length, 1);
    test.equal(q.operand_a >= 0 && q.operand_a <= 9, true);
    test.equal(q.operand_b >= 0 && q.operand_b <= 9, true);
    test.equal(q.result >= 0 && q.result <= 9, true);
    test.done()    
};

exports['add_two'] = function(test) {

    var q = add_two(util);

    test.equal(q.operator, '+');
    test.ok(false, 'Fail since incomplete');
    test.done();
};

exports['add_two_carry'] = function(test) {

    var q = add_two_carry(util);

    test.equal(q.operator, '+');
    test.ok(false, 'Fail since incomplete');
    test.done();
};

exports['mul_one'] = function(test) {

    var q = mul_one(util);

    test.expect(6);

    test.equal(q.operator, 'x');
    test.equal(q.operand_a * q.operand_b, q.result);
    test.equal(q.valid_length, 2);
    test.equal(q.operand_a >= 0 && q.operand_a <=9, true);
    test.equal(q.operand_b >= 0 && q.operand_b <=9, true);
    test.equal(q.result >=0 && q.result <=81, true);
    test.done();
};

exports['sub_two'] = function(test) {

    var q = sub_two(util);

    test.equal(q.operator, '-');
    test.ok(false, 'Fail since incomplete');
    test.done();
};

exports['sub_two_borrow'] = function(test) {

    var q = sub_two_borrow(util);

    test.equal(q.operator, '-');
    test.ok(false, 'Fail since incomplete');
    test.done();
};


