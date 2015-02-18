Input Object Interface
======================

Input object, accepts player input by which means it is provided, in a form that it can be fed directly into **Question** object. Also if needed, displaying of an input view is under responsibility of this object.

```java

public interface Input {
    // Method to set validation rules for user input which may vary by question and/or topic.
    void SetInputValidation( rules );
    // Method to register callback method which will be called whenever a valid input is provided by user.
    void SetInputCallback( callback );
    // Method to show any necessary input view(s).
    void Show();
    // Method to hide any necessary input view(s).
    void Hide();
}

```
