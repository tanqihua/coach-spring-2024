import Phaser from "phaser";

export class Quests extends Phaser.Scene {
  constructor() {
    super("quests");

    this.totalFrames = 44;
    this.targetFrame = 15;
    this.currentFrame = 0;
    this.letters = ["a", "c", "o", "h"];
    this.currentLetter = "c";
    this.currentBroad = "orangeBroad";
  }

  init() {}

  preload() {
    // this.load.video(
    //   "yellowVideo",
    //   "/2d/Purple_FullVideo.mp4",
    //   "loadeddata",
    //   false,
    //   true
    // );
  }

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
          delay: 900,
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
    // this.video.play(true);
    // check preload is done
    this.logo = this.add
      .image(
        this.game.config.width * 0.5,
        this.game.config.height * 0.06,
        "logo"
      )
      .setOrigin(0.5);
    this.logo.setDisplaySize(
      (this.game.config.height * 0.06 * 256) / 69,
      this.game.config.height * 0.06
    );

    this.logo.setDepth(10);

    [
      "purpleVideo",
      "yellowVideo",
      "blackVideo",
      "denimVideo",
      "tyeDyeVideo",
    ].forEach((video) => {
      this[video] = this.add.video(
        this.game.config.width / 2,
        this.game.config.height / 2,
        video
      );

      this[video].once("play", () => {
        this[video].setDisplaySize(
          this.game.config.height,
          this.game.config.height
        );

        this[video].setDepth(10);
      });

      this[video].once("complete", () => {
        window.setShowPage14(true);
      });
    });

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

      let ratio = window.innerHeight / window.innerWidth;
      this[letter].setDisplaySize(
        this.game.config.width * (0.6 + 0.2 * ratio),
        this.game.config.width * (0.6 + 0.2 * ratio)
      );
      this[letter].setDepth(2);

      this[letter].setAlpha(0);
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
      .setOrigin(0.5)
      .setAlpha(0);

    this.broad.setDisplaySize(broadWidth, broadHeight);

    this.tweens.add({
      targets: [this.broad, this[this.currentLetter]],
      alpha: 1,
      duration: 500,
      delay: 500,
      ease: "Linear",

      onComplete: () => {
        this.startInfration = true;
      },
    });

    this.tick = false;
  }

  update(time, delta) {
    if (this.startInfration) {
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
  }
  // load video after preload function
  playVideo(video = "purpleVideo") {
    this.letters.forEach((letter) => {
      this[letter].setAlpha(0);
    });

    this.broad.setAlpha(0);

    this.bg.setAlpha(1);

    // "purpleVideo", "yellowVideo", "blackVideo"
    this[video].play(false);
    this[video].setDepth(10);
  }
}
