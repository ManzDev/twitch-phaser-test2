import Phaser from "phaser";
import { width, height } from "../constants/screen.js";

export const createCrate = (i, scene) => {
  const x = Phaser.Math.Between(0, width);
  const y = Phaser.Math.Between(0, height);

  const box = scene.add.image(x, y, "crate")
    .setInteractive();

  if (i % 2) {
    box
      .setTint(0x00ff00)
      .setData("badCrate", true);
  }
};
