Question Object Interface
=========================

Question object will serve questions for given topic. Also it will check if the provided answer is correct. Object interface is provided below as pseudo-code:

```
class Question {
    // Method to set topic to study.
    public SetTopic();
    // Method to request next question from current topic.
    public RequestQuestion();
    // Method to check a user provided answer to question.
    public CheckAnswer( answer );
    ...
}

```

