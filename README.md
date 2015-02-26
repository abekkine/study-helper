Study Helper
============

Help kids to study elementary math by playing games with automatically generated questions.

Basics
------

Main application view consists of gameplay and question subviews. Gameplay is driven **only** by answering given questions. Correct answers works in advantage of player, while wrong ones works against. System also tracks the success of player, and brings failed questions / topics more frequently.

Requirements
------------

Initial *user stories* are introduced [here](docs/userstories.md),  however, behaviour of initial prototype will be described in following section.

Prototype
---------

Prototype application will have only simple square shapes in **Game Area**. When a question is answered correctly, one of the squares disappear. Otherwise, if question is not answered correctly, one more square added to game area. If number of squares in game area exceeds a specific value, game ends and player loses. If all squares in game area disappears, game ends and player wins. After game ends, correct and wrong answers to given questions are displayed, as well as, time spend on each question, and total time.

Questions on prototype application are generated from **one** of the following categories:
* Subtraction : minuend and subtrahend is given, difference is asked for.
* Subtraction : minuend and difference is given, subtrahend is asked for.
* Subtraction : subtrahend and difference is given, minuend is asked for.
* Addition : two summands are given, sum is asked for.
* Addition : one summand and sum is given, other summand is asked for.

Question generation will be arranged so that none of the generated number values is more than 99, and less than 0.

Design
------

Coupling among the view, game object, questions, and the input will be loose, so that one can freely update / modify of the game, question, input objects, and/or views independently (without affecting the interfaces or internals of other objects).

You may find the object interfaces for [game](docs/gameapi.md), [question](docs/questionapi.md), and [input](docs/inputapi.md) objects in given links as pseudocode. Application flow in pseudo-code may be found [here](docs/appflow.md).

How to Run
----------

On linux systems, just cd into project root directory, and run

```$ python -m SimpleHTTPServer 8000```

command. Open your browser and go to URL http://localhost:8000. Application will be there.

Dependencies
------------

Our application depends on [jquery](http://jquery.com/) for simplification, [mustache](http://mustache.github.io/) for rendering html templates, and [raphael](http://raphaeljs.com/) for visualization.
