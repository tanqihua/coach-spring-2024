import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useStore } from "../store";
import * as THREE from "three";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";

import { motion } from "framer-motion";
const THREESCENE = React.forwardRef((props, ref) => {
  const { playAnimation, setplayAnimation } = useStore();
  const whiteRef = useRef();

  return (
    <div
      ref={ref}
      style={{
        height: "100svh",
        width: window.innerWidth > 700 ? "100vw" : "100vw",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "10",
        pointerEvents: "none",
        overlay: "hidden",
        transition: "all 3s linear",
      }}
    >
      <Canvas
        style={{
          height: "100%",
          width: "100%",
          pointerEvents: "none",
          zIndex: "-1",
        }}
        onCreated={({ gl }) => {}}
        camera={{ fov: 32.5, near: 0.1, far: 100 }}
      >
        <Environment preset="studio" />
        <ambientLight intensity={1} color={"white"} />
        <OrbitControls />
        <Petals whiteRef={whiteRef} />
      </Canvas>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100svw",
          height: "100svh",
          zIndex: "1",
          background: "rgba(255,255,255,1)",
          opacity: 0,
        }}
        ref={whiteRef}
      />
    </div>
  );
});

let total = 600;
const Petals = () => {
  const { playAnimation } = useStore();
  const whiteRef = useRef();

  return (
    <>
      {new Array(total).fill(0).map((_, i) => {
        return <Petal index={i} key={i} whiteRef={whiteRef} />;
      })}

      <mesh position={[0, 0, -10]} ref={whiteRef}>
        <planeGeometry args={[20, 20]} attach="geometry" />
        <meshStandardMaterial color={"white"} transparent opacity={0} />
      </mesh>
    </>
  );
};

const Petal = ({ index, whiteRef }) => {
  const texture = useTexture("/2d/florwer.png");
  const textureLen = 9;
  const mesh = useRef();

  useEffect(() => {
    if (mesh.current) {
      index = index % textureLen;
      mesh.current.geometry.attributes.uv.array = new Float32Array([
        index / textureLen,
        1,
        (index + 1) / textureLen,
        1,
        index / textureLen,
        0,
        (index + 1) / textureLen,
        0,
      ]);
      // count
      mesh.current.geometry.attributes.uv.needsUpdate = true;
    }
  }, []);

  const { viewport } = useThree();
  const { playAnimation } = useStore();

  let xFactor = Math.random() * 0.3 - 0.15;
  let size = 1.3 + Math.random() * 0.7;
  let yFactor = Math.random() * 0.5 - 0.5;
  let zFactor = 2 + Math.random() * 0.8;
  let zRotSpeed = Math.random() * 5 - 5;
  let ranDirection = Math.random() > 0.5 ? 1 : 1.2;
  let ranFallSpeed = Math.random() * 0.5 + 0.3;
  let trigerPoint = 1;
  // range z from -3 , 0
  let rangeZ =
    index > total / 2 ? Math.random() * -6 + -2 : Math.random() * -3 - 1;

  // to targetVec
  let targetVecUp = new THREE.Vector3(
    viewport.width * 0.3 - 2 * viewport.width * 0.3 * Math.random(),
    viewport.height * 0.3 * Math.random(),
    3
  );

  let targetVecDown = new THREE.Vector3(
    viewport.width * 0.3 - 2 * viewport.width * 0.3 * Math.random(),
    -viewport.height * 0.3 * Math.random(),
    3
  );

  let opaccity = Math.random() * 0.5 + 0.5;

  useFrame((state, delta) => {
    if (playAnimation) {
      // mesh opacity
      mesh.current.rotation.z += zRotSpeed * delta;

      if (mesh.current.material.opacity < opaccity) {
        mesh.current.material.opacity += 0.5 * delta;
      }

      // gl clear color

      if (mesh.current.position.z <= trigerPoint) {
        mesh.current.position.z += delta * zFactor;
        let r = Math.abs(mesh.current.position.z * 0.6);
        let _x =
          r * ranDirection * Math.cos(mesh.current.position.z * 1.5 + 6) +
          xFactor +
          viewport.width * 0;
        if (mesh.current.position.z > 0) {
          mesh.current.scale.x -= 0.5 * delta;
          mesh.current.scale.y -= 0.5 * delta;
        }
        let _y = r * Math.sin(mesh.current.position.z * 1.5 + 6) + yFactor;

        mesh.current.position.x = _x;
        mesh.current.position.y = _y;

        if (whiteRef.current && index === 0) {
          if (whiteRef.current.material.opacity > 0) {
            whiteRef.current.material.opacity -= 0.5 * delta;
          }
        }
      } else if (mesh.current.position.z < 3) {
        let currentVec = new THREE.Vector3(
          mesh.current.position.x,
          mesh.current.position.y,
          mesh.current.position.z
        );

        let targetVec = index <= total / 2 ? targetVecUp : targetVecDown;

        let dir = new THREE.Vector3();
        dir.subVectors(targetVec, currentVec).normalize();
        let speed = 4;
        mesh.current.position.x += dir.x * speed * delta;
        mesh.current.position.y += dir.y * speed * delta;
        mesh.current.position.z += delta * zFactor;
      } else {
        mesh.current.position.y -= delta * 0.2;

        if (index <= total / 2) {
          mesh.current.scale.y -= ranFallSpeed * delta;

          if (mesh.current.scale.x > 0) {
            mesh.current.scale.x -= 2 * delta;
            mesh.current.scale.y -= 2 * delta;
          } else {
            mesh.current.scale.x = 0;
            mesh.current.scale.y = 0;
          }
        } else {
          mesh.current.scale.y += ranFallSpeed * delta;

          if (whiteRef.current && index === 0) {
            if (whiteRef.current.material.opacity > 0) {
              whiteRef.current.material.opacity -= 0.5 * delta;
            }
          }

          if (mesh.current.scale.x > 0) {
            mesh.current.scale.x -= 2 * delta;
            mesh.current.scale.y -= 2 * delta;
          } else {
            mesh.current.scale.x = 0;
            mesh.current.scale.y = 0;
          }
        }

        mesh.current.position.z += delta * zFactor;
      }
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, rangeZ]} scale={[size, size, size]}>
      <planeGeometry args={[0.1, 0.1]} attach="geometry" />
      <meshStandardMaterial map={texture} transparent={true} opacity={0} />
    </mesh>
  );
};

export default THREESCENE;
