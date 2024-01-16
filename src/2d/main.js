import Phaser from "phaser";

export class Main extends Phaser.Scene {
  constructor() {
    super("main");

    this.video = null;
    this.totalFrames = 44;
    this.targetFrame = 0;
    this.currentFrame = 0;
    this.letters = ["c"];
  }

  init() {}

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

    this.letters.forEach((letter) => {
      this[letter] = this.add.sprite(
        this.game.config.width / 2,
        this.game.config.height * 0.33,
        letter
      );
      this[letter].setDisplaySize(
        this.game.config.width * 0.8,
        this.game.config.width * 0.8
      );
      this[letter].setDepth(2);
    });

    window.setTargetFrame = (frame) => {
      if (frame > 0 && frame < 45) {
        this.targetFrame = frame;
      }
    };

    // load broad
    let broadWidth = this.game.config.width * 0.95;
    let broadHeight = broadWidth * 1.965;
    this.bg = this.add
      .image(
        this.game.config.width / 2,
        this.game.config.height / 2 + broadHeight * 0.4,
        "blueBroad"
      )
      .setOrigin(0.5);

    this.bg.setDisplaySize(broadWidth, broadHeight);

    window.switchBroad = (color) => {
      // tween
      this.tweens.add({
        targets: this.bg,
        alpha: 0,
        duration: 500,
        ease: "Linear",
        onComplete: () => {
          if (color === "blue") {
            this.bg.setTexture("blueBroad");
          } else if (color === "orange") {
            this.bg.setTexture("orangeBroad");
          }

          this.tweens.add({
            targets: this.bg,
            alpha: 1,
            duration: 500,
            ease: "Linear",
          });
        },
      });
    };

    this.tweens.add({
      targets: this.c,
      y: "+=20", // move up by 20
      duration: 2000, // in ms
      angle: { start: -3, to: 8 }, // rotate 360 degrees
      ease: "Linear", // 'Power1', 'Power2', 'Power3', 'Power4', 'Sine.easeInOut', 'Cubic.easeInOut' etc.
      yoyo: true, // at the end of the tween, it will return to the original state
      repeat: -1, // -1 means it will repeat indefinitely
    });
  }

  update(time, delta) {
    if (this.targetFrame > this.currentFrame) {
      this.currentFrame += 0.025 * delta;
      if (this.currentFrame > 0) {
        let _ = Math.round(this.currentFrame);
        this.letters.forEach((letter) => {
          this[letter].setFrame(_);
        });
      }
    } else if (this.targetFrame < this.currentFrame) {
      this.currentFrame -= 0.025 * delta;
      if (this.currentFrame > 0) {
        let _ = Math.round(this.currentFrame);
        this.letters.forEach((letter) => {
          this[letter].setFrame(_);
        });
      }
    }
  }
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
