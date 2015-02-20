$(function(){

    GAME.Setup("game", 550, 550);
    GAME.Draw();

    GAME.PlayerAction("Test Me!");
    GAME.Show();
    GAME.Hide();
    GAME.Start();
    GAME.Resume();
    GAME.Pause();
    GAME.SaveAndExit();
    GAME.Exit();
});