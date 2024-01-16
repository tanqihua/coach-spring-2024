import Phaser from "phaser";

export class Bootstrap extends Phaser.Scene {
  constructor() {
    super("bootstrap");
    this.video = null;
  }

  init() {}

  preload() {
    this.load.image("background", "/2d/Spring_Yellow_01_001.webp");
  }

  create() {
    window.loadVideo = this.loadVideo.bind(this);
    window.playVideo = this.playVideo.bind(this);
    this.bg = this.add
      .sprite(
        this.game.config.width / 2,
        this.game.config.height / 2,
        "background"
      )
      .setOrigin(0.5);
    this.bg.setDisplaySize(this.game.config.height, this.game.config.height);
  }

  update() {}
  // load video after preload function
  playVideo() {
    this.video.play(true);
    this.video.setLoop(false);

    // vidoe is playing
    this.video.on("playing", () => {
      this.bg.alpha = 0;
    });
  }

  loadVideo() {
    this.load.video(
      "yellowVideo",
      "/2d/Yellow_FullVideo.webm",
      "loadeddata",
      false,
      true
    );
    this.load.once(
      "complete",
      () => {
        this.video = this.add.video(
          this.game.config.width / 2,
          this.game.config.height / 2,
          "yellowVideo"
        );
        this.video.setOrigin(0.5);

        // set vidoe to full screen
        this.video.realHeight = 1024;
        this.video.realWidth = 1024;

        let ratio = this.game.config.height / this.video.realWidth;
        this.video.setScale(ratio);
      },
      this
    );

    this.load.start();
  }
}

function ArrayFrame(start, end, reverse) {
  if (reverse) {
    let arr = [];
    for (let i = start; i >= end; i--) {
      arr.push({ key: "light" + i.toString().padStart(1, "0") });
    }
    return arr;
  } else {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push({ key: "light" + i.toString().padStart(1, "0") });
    }
    return arr;
  }
}
