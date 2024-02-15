import Phaser from "phaser";

export class Bootstrap extends Phaser.Scene {
  constructor() {
    super("bootstrap");
  }

  init() {}

  preload() {
    // load vidoe

    this.load.image("background", "/2d/SPRING_SQUARE_BG_1.webp");
    this.load.image("blueBroad", "/2d/blue.webp");
    this.load.image("orangeBroad", "/2d/orange.webp");
    this.load.image("logo", "/asset/logo.png");

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

    this.load.spritesheet("r", "/2d/r.webp", {
      frameWidth: 400,
      frameHeight: 400,
    });

    this.load.spritesheet("realyou", "/2d/realyou.webp", {
      frameWidth: 400,
      frameHeight: 400,
    });
    this.load.video("purpleVideo", "/2d/Purple_FullVideo.mp4");
    this.load.video("yellowVideo", "/2d/Yellow_FullVideo.mp4");
    this.load.video("blackVideo", "/2d/Black_FullVideo.mp4");
    this.load.video("tyeDyeVideo", "/2d/TyeDye_FullVideo.mp4");
    this.load.video("denimVideo", "/2d/Denim_FullVideo.mp4");

    // laod audio
    this.load.audio("infration", "/PowerMode1.mp3");

    this.load.image("tapicon", "/2d/tapicon.png");
  }

  create() {
    window?.setPhaser(true);
    // this.scene.start("landing");
  }
}
