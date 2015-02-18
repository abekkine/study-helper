Question Object Interface
=========================

Question object will serve questions for given topic. Also it will check if the provided answer is correct. Object interface is provided below as pseudo-code:

```java
public interface Question {
    // Method to set topic to study.
    void SetTopic( topic );
    // Method to display current question to player.
    void Show();
    // Method to request a new question from current topic as the current question.
    void RequestNewQuestion();
    // Method to check a user provided answer to current question.
    int CheckAnswer( answer );
}

```

