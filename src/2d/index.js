import Phaser from "phaser";
import { Bootstrap } from "./bootstrap.js";
import React, { useEffect } from "react";
const config = {
  type: Phaser.AUTO,
  parent: "phaser-container",
  transparent: true,
  width:
    window.innerWidth > window.innerHeight
      ? 700 * window.devicePixelRatio
      : window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },

  scene: [Bootstrap],
};

const IoPhaser = React.forwardRef((props, ref) => {
  useEffect(() => {
    const phaserGame = new Phaser.Game(config);
    ref.current = phaserGame;
    return () => phaserGame.destroy(true);
  }, []);

  return (
    <div
      id="phaser-container"
      style={{
        position: "absolute",
        top: "0",
        left: "50%",
        zIndex: "-2",
        width: "100vw",
        height: "100svh",
        maxWidth: "700px",
        overflow: "hidden",
        pointerEvents: "null",
        transform: "translateX(-50%)",
      }}
    ></div>
  );
});

export default IoPhaser;
