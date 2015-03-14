var twoDigitAdditionWithoutCarry = function() {
    var num_AB, num_CD, num_EF,
        dig_A, dig_B, dig_C, dig_D, dig_E, dig_F;

    // Add two digit numbers without carry.
    // That is, (B + D < 10),
    //
    //      A B
    //   +  C D
    //   ______
    //      E F
    //

    num_EF = UTIL.randomInRange(20, 99);
    dig_F = num_EF % 10;
    dig_E = Math.floor(num_EF / 10);
    // Compute ones.
    dig_B = UTIL.randomInRange(0, dig_F);
    dig_D = dig_F - dig_B;
    // Compute tens.
    dig_A = UTIL.randomInRange(1, dig_E - 1);
    dig_C = dig_E - dig_A;
    // Compute numbers.
    num_AB = dig_A * 10 + dig_B;
    num_CD = dig_C * 10 + dig_D;

    return {
        operand_a: num_AB,
        operand_b: num_CD,
        result: num_EF,
        operator: '+',
        valid_length: 2
    };
};
