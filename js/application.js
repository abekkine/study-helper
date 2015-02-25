$(function() {

    $(document).keydown(function(event) {
        event.preventDefault();
        INPUT.AddOneCharacter(event.which);
    });

    GAME.Setup('game', 515, 515);

    QUESTION.NewQuestion();
});
