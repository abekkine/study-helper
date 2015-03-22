var q_mul_one = function() {

    var num_A, num_B, num_C;

    // Multiply one digit numbers.
    //
    //    A
    //  x B
    //  ___
    //   CC
    //

    num_A = UTIL.randomInRange(1, 9);
    num_B = UTIL.randomInRange(1, 9);
    num_C = num_A * num_B;

    return {
        operand_a: num_A,
        operand_b: num_B,
        result: num_C,
        operator: 'x',
        valid_length: 2
    };
};