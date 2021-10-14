import Phaser from "phaser";
import { createCrate } from "../utils/createCrate.js";
import { width, height } from "../constants/screen.js";

export class SceneA extends Phaser.Scene {
  constructor() {
    super("GameScene");

    this.score = 0;
    this.lives = 6;
  }

  preload() {
    this.load.image("bg", "assets/sprites/sky4.png");
    this.load.image("crate", "assets/sprites/crate.png");
  }

  create() {
    this.registry.set("score", this.score);
    this.registry.set("lives", this.lives);

    const halfWidth = width / 2;
    const halfHeight = height / 2;
    this.add.image(halfWidth, halfHeight, "bg")
      .setDisplaySize(width, height);

    for (let i = 0; i < 64; i++) {
      createCrate(i, this);
    }

    this.input.on("gameobjectup", this.onCrateClick, this);
  }

  onCrateClick(pointer, box) {
    if (this.lives === 0) {
      return;
    }

    //  Disable our box
    box.setInteractive(false)
      .setVisible(false);

    //  If the box was tinted red, you lose a life
    if (box.getData("badCrate")) {
      this.lives--;
      this.registry.set("lives", this.lives);
    } else {
      this.score++;
      this.registry.set("score", this.score);
    }
  }
}
