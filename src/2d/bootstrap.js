import Phaser from "phaser";

export class Bootstrap extends Phaser.Scene {
  constructor() {
    super("bootstrap");
  }

  init() {}

  preload() {
    this.load.image("background", "/2d/Spring_Yellow_01_001.webp");
    this.load.image("blueBroad", "/2d/blue.webp");
    this.load.image("orangeBroad", "/2d/orange.webp");
    // load sprite sheet
    this.load.spritesheet("a", "/2d/a.webp", {
      frameWidth: 400,
      frameHeight: 400,
    });
    this.load.spritesheet("c", "/2d/c.webp", {
      frameWidth: 400,
      frameHeight: 400,
    });
    this.load.spritesheet("h", "/2d/h.webp", {
      frameWidth: 400,
      frameHeight: 400,
    });
    this.load.spritesheet("o", "/2d/o.webp", {
      frameWidth: 400,
      frameHeight: 400,
    });
  }

  create() {
    this.scene.start("main");
  }
}
