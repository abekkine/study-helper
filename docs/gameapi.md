Game Object Interface
=====================

Game object will run game logic, display game view during training session. Object interface for game object is given below (in java syntax):

```java

public interface Game {
    // Method to inform game about player action.
    void PlayerAction( value );
    // Method to display game view.
    void Show();
    // Method to hide game view.
    void Hide();
    // Method to start a new game.
    void Start();
    // Method to resume a saved game.
    void Resume();
    // Method to pause an ongoing game.
    void Pause();
    // Method to save and exit from an ongoing game.
    void SaveAndExit();
    // Method to end and exit from an ongoing game.
    void Exit();
}

```
