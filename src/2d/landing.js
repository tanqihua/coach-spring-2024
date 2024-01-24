import Phaser from "phaser";

export class Landing extends Phaser.Scene {
  constructor() {
    super("landing");
  }

  init() {}

  preload() {}

  create() {
    this.bg = this.add
      .sprite(
        this.game.config.width / 2,
        this.game.config.height / 2,
        "background"
      )
      .setOrigin(0.5);
    this.bg.setDisplaySize(this.game.config.height, this.game.config.height);

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

    //r "e", "a", "l", "y", "o", "u"
    let width = this.game.config.width * 0.4;
    let _canvasWidth = this.game.config.width;
    let _canvasHeight = this.game.config.height;
    let alignCenter = _canvasWidth * 0.1;
    let alignYou = width * 0.6;
    let initPos = {
      r: [alignCenter + _canvasWidth * 0.05, _canvasHeight * 0.22, 1, 4, 4, 0],
      e: [alignCenter + _canvasWidth * 0.3, _canvasHeight * 0.22, 1, 1, 3, 0],
      a: [
        alignCenter + _canvasWidth * 0.55,
        _canvasHeight * 0.22,
        1,
        2,
        2,
        Math.PI * 0.05,
      ],
      l: [
        alignCenter + _canvasWidth * 0.8,
        _canvasHeight * 0.22,
        1,
        3,
        1,
        Math.PI * 0.05,
      ],
      y: [
        this.game.config.width / 2 - alignYou,
        _canvasHeight * 0.22 + width * 0.65,
        1.1,
        8,
        5,
        0,
      ],
      o: [
        this.game.config.width / 2,
        _canvasHeight * 0.22 + width * 0.65,
        1.1,
        9,
        7,
        0,
      ],
      u: [
        this.game.config.width / 2 + alignYou,
        _canvasHeight * 0.22 + width * 0.65,
        1.1,
        8,
        6,
        Math.PI * 0.1,
      ],
    };

    let letters = ["r", "e", "a", "l", "y", "o", "u"];
    letters.forEach((letter, index) => {
      this[letter] = this.add
        .sprite(initPos[letter][0], initPos[letter][1], "realyou")
        .setFrame(index);

      let scaling = initPos[letter][2] ?? 1;
      let depth = initPos[letter][3] ?? 1;
      let rotation = initPos[letter][5] ?? 0;
      this[letter].setDisplaySize(width * scaling, width * scaling);
      this[letter].setDepth(depth);
      this[letter].setRotation(rotation);
    });

    // latter floating animation
    this.tweens.add({
      targets: [this.r, this.e, this.a, this.l],
      y: "-=10",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });

    this.tweens.add({
      targets: [this.y, this.o, this.u],
      y: "-=10",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });
  }

  update(time, delta) {}
}
