$(function() {

    $(document).keydown(function(event) {
        event.preventDefault();
        INPUT.AddOneCharacter(event.which);
    });

    GAME.Setup('game', '8x8', 80, 5);

    QUESTION.NewQuestion();
});
