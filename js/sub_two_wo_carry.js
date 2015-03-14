var twoDigitSubtraction = function() {
    var num_AB, num_CD, num_EF,
        dig_A, dig_B, dig_C, dig_D;

    // Subtract two digit numbers without carry.
    // That is, (D <= B),
    //
    //    A B
    //  - C D
    //  _____
    //    E F
    //

    dig_A = UTIL.randomInRange(2, 9);
    dig_B = UTIL.randomInRange(0, 9);
    dig_C = UTIL.randomInRange(1, dig_A - 1);
    dig_D = UTIL.randomInRange(0, dig_B);
    num_AB = 10 * dig_A + dig_B;
    num_CD = 10 * dig_C + dig_D;
    num_EF = num_AB - num_CD;

    return {
        operand_a: num_AB,
        operand_b: num_CD,
        result: num_EF,
        operator: '-',
        valid_length: 2
    };
};
