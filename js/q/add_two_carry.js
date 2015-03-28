var q_add_two_carry = function () {
    var num_AB, num_CD, num_EF,
        dig_A, dig_B, dig_C, dig_D;

    // Add two digit numbers with carry.
    // That is, (B + D >= 10),
    //
    //    A B
    //  + C D
    //  _____
    //    E F
    //

    // Compute ones and tens.
    dig_B = UTIL.randomInRange(1, 9);
    dig_D = UTIL.randomInRange(10 - dig_B, 9);
    dig_A = UTIL.randomInRange(1, 7);
    dig_C = UTIL.randomInRange(1, 8 - dig_A);
    // Compute numbers.
    num_AB = 10 * dig_A + dig_B;
    num_CD = 10 * dig_C + dig_D;
    num_EF = num_AB + num_CD;

    return {
        operand_a: num_AB,
        operand_b: num_CD,
        result: num_EF,
        operator: '+',
        valid_length: 2
    };
};
