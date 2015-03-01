$(function() {

    $(document).keydown(function(event) {
        INPUT.AddOneCharacter(event);
    });

    GAME.Setup('game', '8x8', 80, 5);

    QUESTION.NewQuestion();
});
