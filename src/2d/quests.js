import Phaser from "phaser";

export class Quests extends Phaser.Scene {
  constructor() {
    super("quests");

    this.video = null;
    this.totalFrames = 44;
    this.targetFrame = 15;
    this.currentFrame = 0;
    this.letters = ["a", "c", "o", "h"];
    this.currentLetter = "c";
    this.currentBroad = "orangeBroad";
  }

  init() {}

  setNextQuestion(color, letter) {
    this.currentFrame = 0;
    this.targetFrame = 13;
    this.letters.forEach((_letter) => {
      if (_letter === letter) {
        this.tweens.add({
          targets: this[_letter],
          alpha: 1,
          duration: 500,
          ease: "Linear",
          delay: 0.5,
        });
      } else {
        this.tweens.add({
          targets: this[_letter],
          alpha: 0,
          duration: 500,
          ease: "Linear",
        });
      }
    });
    // tween
    this.tweens.add({
      targets: this.broad,
      alpha: 0,
      duration: 500,
      ease: "Linear",
      onComplete: () => {
        if (color === "blue") {
          this.broad.setTexture("blueBroad");
        } else if (color === "orange") {
          this.broad.setTexture("orangeBroad");
        }

        this.tweens.add({
          targets: this.broad,
          alpha: 1,
          duration: 500,
          ease: "Linear",
        });
      },
    });
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

      if (this.currentLetter !== letter) {
        this[letter].alpha = 0;
      }
    });

    this.oriPos = this.game.config.height * 0.33;

    // load broad
    let broadWidth = this.game.config.width * 0.95;
    let broadHeight = broadWidth * 1.965;
    this.broad = this.add
      .image(
        this.game.config.width / 2,
        this.game.config.height / 2 + broadHeight * 0.4,
        this.currentBroad
      )
      .setOrigin(0.5);

    this.broad.setDisplaySize(broadWidth, broadHeight);

    this.tick = false;
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
    if (this.currentFrame >= 10) {
      // start floating
      this.letters.forEach((letter) => {
        this[letter].y -= Math.sin(time / 1000) * 0.03 * delta;
      });
    } else if (Math.abs(this[this.currentLetter].y - this.oriPos) > 1) {
      let direction = this[this.currentLetter].y - this.oriPos > 0 ? -1 : 1;
      this.letters.forEach((letter) => {
        this[letter].y += direction * delta * 0.05;
      });
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
