import Phaser from "phaser";

export class Landing extends Phaser.Scene {
  constructor() {
    super("landing");
  }

  init() {}

  create() {
    this.bg = this.add
      .sprite(
        this.game.config.width / 2,
        this.game.config.height / 2,
        "background"
      )
      .setOrigin(0.5);
    this.bg.setDisplaySize(this.game.config.height, this.game.config.height);
  }

  update(time, delta) {}
}
