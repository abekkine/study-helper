$(function() {

    $(document).keydown(function(event) {
        event.preventDefault();
        INPUT.AddOneCharacter(event.which);
    });

    $('#act_true').click(function() {
        console.log('true click');
        GAME.PlayerAction(true);
    });

    $('#act_false').click(function() {
        console.log('false click');
        GAME.PlayerAction(false);
    });

    $('#act_next').click(function() {
        console.log('next click');
        QUESTION.NewQuestion();
    });

    GAME.Setup('game', 515, 515);

    QUESTION.NewQuestion();
});
