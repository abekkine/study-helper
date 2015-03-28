var q_sub_one = function () {

    var num_A, num_B, num_C;

    // Subtract one digit numbers w/o carry.
    //
    //   A
    // - B
    // ___
    //   C
    //

    num_A = UTIL.randomInRange(1, 9);
    num_B = UTIL.randomInRange(1, num_A);
    num_C = num_A - num_B;

    return {
        operand_a: num_A,
        operand_b: num_B,
        result: num_C,
        operator: '-',
        valid_length: 1
    };
};
