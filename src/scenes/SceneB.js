import Phaser from "phaser";

export class SceneB extends Phaser.Scene {
  constructor() {
    super({ key: "UIScene", active: true });
  }

  create() {
    const score = this.scene.get("GameScene").score;
    const lives = this.scene.get("GameScene").lives;
    this.scoreText = this.add.text(10, 10, `Score: ${score}`, { font: "56px EnterCommand", fill: "#ffffff", stroke: "red", strokeThickness: 5 });
    this.livesText = this.add.text(10, 48, `Lives: ${lives}`, { font: "56px EnterCommand", fill: "#ffffff", stroke: "red", strokeThickness: 5 });

    this.registry.events.on("changedata", this.onChangeRegistry, this);
  }

  onChangeRegistry(parent, key, data) {
    if (key === "score") {
      this.scoreText.setText("Score: " + data);
    } else if (key === "lives") {
      this.livesText.setText("Lives: " + data);
    }
  }
}
