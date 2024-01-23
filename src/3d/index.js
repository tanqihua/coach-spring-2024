import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useThreeStore } from "../store";
import * as THREE from "three";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";

const THREESCENE = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Canvas
        style={{
          height: "100svh",
          width: window.innerWidth > 700 ? "100vw" : "100vw",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "10",
          pointerEvents: "none",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("black");
        }}
        camera={{ fov: 32.5, near: 0.1, far: 100 }}
      >
        <Environment preset="studio" />
        <ambientLight intensity={1} color={"white"} />
        <OrbitControls />

        <Petals />
      </Canvas>
    </div>
  );
});

const Petals = () => {
  return (
    <>
      {new Array(1).fill(0).map((_, i) => {
        return <Petal index={i} />;
      })}
    </>
  );
};

const Petal = ({ index }) => {
  const texture = useTexture("/2d/florwer.png");
  const textureLen = 9;
  const mesh = useRef();
  let r = 0.1;
  let z_ = 0;

  useEffect(() => {
    if (mesh.current) {
      mesh.current.geometry.attributes.uv.array = new Float32Array([
        (index + 1 - 1) / textureLen,
        1,
        index / textureLen,
        1,
        (index + 1 - 1) / textureLen,
        0,
        index + 1 / textureLen,
        0,
      ]);
      // count
      mesh.current.geometry.attributes.uv.needsUpdate = true;
    }
  }, []);

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[0.1, 0.1]} attach="geometry" />
      <meshStandardMaterial map={texture} transparent={true} />
    </mesh>
  );
};

export default THREESCENE;

// useEffect(() => {
//   console.log(geometry.current);
//   if (geometry.current) {
//     let i = 1;
//     geometry.current.attributes.uv.array = new Float32Array([
//       (i - 1) / 9,
//       1,
//       i / 9,
//       1,
//       (i - 1) / 9,
//       0,
//       i / 9,
//       0,
//     ]);
//     // count
//     geometry.current.attributes.uv.needsUpdate = true;
//   }
// }, []); // Add dependencies here if needed
