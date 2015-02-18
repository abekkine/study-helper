Application Flow
================

Application flow in this section is given for prototype in main page, and it is subject to change at near future. Following code is far from being complete; it is provided only as a hint regarding application flow.

```javascript

var APP = (function(game, question, input){

    // Application starts game.
    game.Start();

    // A question is asked.
    question.Show();

    // Callback method to process user input to an answer.
    var answerCallback = function(answer) {
        result = question.CheckAnswer( answer );
        game.PlayerAction( result );
    };

    // Register callback, to make it work asynchronously.
    input.SetInputCallback( answerCallback );

})(someGame, someQuestion, someInput);

```
