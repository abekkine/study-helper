var INPUT = (function() {
    var _entered_string = "";

    return {
        AddOneCharacter: function(key) {
            _entered_string += String.fromCharCode(key);
            // DEBUG
            console.log(_entered_string);
        }
    };
})();
