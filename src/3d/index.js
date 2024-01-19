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
        camera={{ fov: 32.5, near: 0.1, far: 100 }}
      >
        <Petals />
        <Environment preset="studio" />
        <ambientLight intensity={1} color={"white"} />
        <OrbitControls />
      </Canvas>
    </div>
  );
});

const Petals = ({ count = 1000 }) => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -25 + Math.random() * 50;
      const yFactor = -25 + Math.random() * 50;
      const zFactor = -25 + Math.random() * 50;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  return (
    <>
      {particles.map((_, i) => {
        return <Petal index={(i + 1) % 9} particle={_} key={i} />;
      })}
    </>
  );
};

const Petal = ({ index = 1, particle, dummy = new THREE.Object3D() }) => {
  const texture = useTexture("/2d/florwer.png");
  const textureLen = 9;
  const mesh = useRef();

  useFrame((state) => {
    if (mesh.current) {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01;
      particle.my += (state.mouse.y * 1000 - 1 - particle.my) * 0.01;
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.setScalar(s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      mesh.current.matrix.copy(dummy.matrix);
      mesh.current.matrix.decompose(
        mesh.current.position,
        mesh.current.quaternion,
        mesh.current.scale
      );
    }
  });

  useEffect(() => {
    if (mesh.current) {
      mesh.current.geometry.attributes.uv.array = new Float32Array([
        (index - 1) / textureLen,
        1,
        index / textureLen,
        1,
        (index - 1) / textureLen,
        0,
        index / textureLen,
        0,
      ]);
      // count
      mesh.current.geometry.attributes.uv.needsUpdate = true;
    }
  }, []);

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[1, 1]} attach="geometry" />
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
