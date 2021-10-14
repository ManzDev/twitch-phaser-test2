import Phaser from "phaser";
import { SceneA } from "./scenes/SceneA.js";
import { SceneB } from "./scenes/SceneB.js";
import { width, height } from "./constants/screen.js";

const config = {
  type: Phaser.AUTO,
  width,
  height,
  backgroundColor: "#000",
  scene: [SceneA, SceneB]
};

// eslint-disable-next-line
const game = new Phaser.Game(config);
