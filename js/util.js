var UTIL = (function () {

    return {
        randomInRange: function (a, b) {
            return a + Math.floor(Math.random() * (b - a + 1));
        }
    };
})();

exports.util = UTIL;
