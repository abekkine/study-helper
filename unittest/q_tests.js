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

    test.expect(7);

    // Our operator should be addition.
    test.equal(q.operator, '+');
    // Maximum result length is 2 digits.
    test.equal(q.valid_length, 2);
    // Operation should be correct.
    test.equal(q.operand_a + q.operand_b, q.result);
    // Operands and result should be two digits with proper ranges.
    test.equal(q.operand_a >= 10 && q.operand_a <= 89, true);
    test.equal(q.operand_b >= 10 && q.operand_b <= 89, true);
    test.equal(q.result >= 20 && q.result <= 99, true);

    var dig_b = q.operand_a % 10,
        dig_d = q.operand_b % 10,
        sum = dig_b + dig_d;

    // And this should be a operation 'without carry'.
    test.equal(sum >= 0 && sum <= 9, true);

    test.done();
};

exports['add_two_carry'] = function(test) {

    var q = add_two_carry(util);

    test.expect(7);

    test.equal(q.operator, '+');
    test.equal(q.valid_length, 2);
    test.equal(q.operand_a + q.operand_b, q.result);
    test.equal(q.operand_a >= 10 && q.operand_a <= 89, true);
    test.equal(q.operand_b >= 10 && q.operand_b <= 89, true);
    test.equal(q.result >= 20 && q.result <= 99, true);

    var dig_b = q.operand_a % 10,
        dig_d = q.operand_b % 10,
        sum = dig_b + dig_d;

    test.equal(sum >= 10 && sum <= 18, true);

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

    test.expect(7);

    test.equal(q.operator, '-');
    test.equal(q.valid_length, 2);
    test.equal(q.operand_a - q.operand_b, q.result);
    test.equal(q.operand_b >= 10 && q.operand_b <= 89, true);
    test.equal(q.operand_a >= 20 && q.operand_a <= 99, true);
    test.equal(q.result >= 10 && q.result <= 89, true);

    var dig_b = q.operand_a % 10,
        dig_d = q.operand_b % 10,
        dif = dig_b - dig_d;
   
    test.equal(dif >= 0 && dif <= 9, true);
    test.done();
};

exports['sub_two_borrow'] = function(test) {

    var q = sub_two_borrow(util);

    test.equal(q.operator, '-');
    test.equal(q.valid_length, 2);
    test.equal(q.operand_a - q.operand_b, q.result);
    test.equal(q.operand_b >= 10 && q.operand_b <= 89, true);
    test.equal(q.operand_a >= 10 && q.operand_a <= 99, true);
    test.equal(q.result >= 10 && q.result <= 89, true);

    var dig_b = q.operand_a % 10,
        dig_d = q.operand_b % 10,
        dif = dig_b - dig_d;

    test.equal(dif <= 0 && dif >= -9, true);
    test.done();
};


