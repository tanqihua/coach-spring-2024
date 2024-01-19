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

    //r "e", "a", "l", "y", "o", "u"
    let width = this.game.config.width * 0.25;
    let _canvasWidth = this.game.config.width;
    let _canvasHeight = this.game.config.height;
    let alignCenter = _canvasWidth * 0.1;
    let alignYou = _canvasHeight * 0.05;
    let initPos = {
      r: [alignCenter + _canvasWidth * 0.05, _canvasHeight * 0.2, 1, 4, 4],
      e: [alignCenter + _canvasWidth * 0.3, _canvasHeight * 0.2, 1, 1, 3],
      a: [alignCenter + _canvasWidth * 0.55, _canvasHeight * 0.2, 1, 2, 2],
      l: [alignCenter + _canvasWidth * 0.8, _canvasHeight * 0.2, 1, 3, 1],
      y: [
        alignYou + alignCenter + _canvasWidth * 0.01,
        _canvasHeight * 0.3,
        1.3,
        8,
        5,
      ],
      o: [
        alignYou + alignCenter + _canvasWidth * 0.3,
        _canvasHeight * 0.3,
        1.3,
        9,
        7,
      ],
      u: [
        alignYou + alignCenter + _canvasWidth * 0.6,
        _canvasHeight * 0.3,
        1.3,
        8,
        6,
      ],
    };

    let letters = ["r", "e", "a", "l", "y", "o", "u"];
    letters.forEach((letter, index) => {
      this[letter] = this.add
        .sprite(initPos[letter][0], initPos[letter][1], "realyou")
        .setFrame(index);

      let scaling = initPos[letter][2] ?? 1;
      let depth = initPos[letter][3] ?? 1;
      this[letter].setDisplaySize(width * scaling, width * scaling);
      this[letter].setDepth(depth);
    });
  }

  update(time, delta) {}
}
