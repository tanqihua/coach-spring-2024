import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useThreeStore } from "../store";
import {
  Physics,
  RigidBody,
  BallCollider,
  CuboidCollider,
} from "@react-three/rapier";

import {
  Environment,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { BackDrop, GroundPlane, KeyLight, FillLight, RimLight } from "./helper";

const THREESCENE = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Canvas
        style={{
          height: "100svh",
          width: window.innerWidth > 700 ? "700px" : "100vw",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "10",
        }}
        camera={{ position: [0, 0, 30], fov: 32.5, near: 0.1, far: 100 }}
        onCreated={({ gl }) => {
          // gl.setClearColor("#FFDF91");
          // transparent background
        }}
      >
        <OrbitControls />

        <Suspense fallback={null}>
          <Physics gravity={[0, 0, 0]}>
            <Fonts />
          </Physics>
        </Suspense>
        {/* <GroundPlane />
        <BackDrop /> */}

        <KeyLight brightness={1.6} color={"#FFDF91"} />
        <FillLight brightness={2.6} color={"#FFDF91"} />
        <RimLight brightness={10.6} color={"orange"} />

        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
});

const Fonts = () => {
  let triggerUp = false;
  function setTriggerUp() {
    triggerUp = true;
  }

  function getTriggerUp() {
    return triggerUp;
  }

  useEffect(() => {
    window.setTriggerUp = () => {
      setTriggerUp();
    };
  }, []);

  return (
    <>
      <Font font={"c"} target={[-4, 3, 0]} getTriggerUp={getTriggerUp} />
      <Font font={"o"} target={[-2, 2.5, 1]} getTriggerUp={getTriggerUp} />
      <Font font={"a"} target={[-0, 2.2, 0.3]} getTriggerUp={getTriggerUp} />
    </>
  );
};

const Font = ({
  font,
  target = [0, 0, 0],
  r = THREE.MathUtils.randFloatSpread,
  vec = new THREE.Vector3(),
  getTriggerUp,
}) => {
  // useTexute
  const obj1 = useLoader(OBJLoader, `/3d/coach/${font}/0.obj`);
  const obj2 = useLoader(OBJLoader, `/3d/coach/${font}/1.obj`);
  const api = useRef(null);
  const colorMap = useTexture("/3d/tex/colormap.webp");
  const normalMap = useTexture("/3d/tex/normalmap.webp");
  const displacementMap = useTexture("/3d/tex/displacementmap.webp");
  const geometryRef = useRef(null);

  const {
    viewport: { width, height },
  } = useThree();

  let storingPos = useMemo(() => {
    try {
      let _pos1 = obj2?.children[0]?.geometry.attributes.position.array;
      let _pos2 = obj1?.children[0]?.geometry.clone().attributes.position.array;
      let float32Array = new Float32Array(_pos1.length);

      for (let i = 0; i < _pos1.length; i++) {
        let delta = _pos1[i] - _pos2[i];
        float32Array[i] = delta;
      }

      return {
        float32Array,
        _pos2,
        _pos1,
      };
    } catch (e) {
      return null;
    }
  }, []);

  let _infrationRate = 0.001;
  let inflationRate = 1;

  useEffect(() => {
    let name = "set" + font.toUpperCase() + "_Slider";
    return (window[name] = (value) => {
      inflationRate = value;
    });
  }, []);

  useFrame((state, delta) => {
    if (geometryRef.current && storingPos !== null) {
      let _len = geometryRef.current.attributes.position.array.length;

      for (let i = 0; i < _len; i += 3) {
        let direction = new THREE.Vector3(
          storingPos.float32Array[i],
          storingPos.float32Array[i + 1],
          storingPos.float32Array[i + 2]
        );

        geometryRef.current.attributes.position.array[i] =
          storingPos._pos2[i] + direction.x * _infrationRate;
        geometryRef.current.attributes.position.array[i + 1] =
          storingPos._pos2[i + 1] + direction.y * _infrationRate;
        geometryRef.current.attributes.position.array[i + 2] =
          storingPos._pos2[i + 2] + direction.z * _infrationRate;
      }

      let direction = _infrationRate > inflationRate ? -1 : 1;
      let target = inflationRate;

      //
      if (Math.abs(_infrationRate - target) > 0.001) {
        _infrationRate += direction * delta * 0.5;
      }

      geometryRef.current.attributes.position.needsUpdate = true;
    }

    if (api.current) {
      delta = Math.min(0.1, delta);
      let targetPos = new THREE.Vector3(target[0], target[1], target[2]);
      let bais = 0.4;

      if (getTriggerUp()) {
        targetPos.add(new THREE.Vector3(0, height, 0));
        bais = 0.1;
      }
      let current = new THREE.Vector3().copy(api.current.translation());
      let direction = targetPos.sub(current).normalize();
      direction.multiply({
        x: 50 * delta * bais,
        y: 150 * delta * bais,
        z: 50 * delta * bais,
      });
      api.current.applyImpulse(direction);
    }
  });

  return (
    <>
      <RigidBody
        linearDamping={0.75}
        angularDamping={0.15}
        friction={0.2}
        position={[r(20), r(20) - 25, r(20) - 10]}
        ref={api}
        colliders={false}
        dispose={null}
      >
        <CuboidCollider
          args={[1, 1, 1]}
          collisionGroups={Math.round(Math.random() * 100)}
        />

        <group scale={[0.05, 0.05, 0.05]}>
          {obj1 && (
            <mesh
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <bufferGeometry
                attach="geometry"
                {...obj1?.children[0]?.geometry}
                ref={geometryRef}
              />
              <meshStandardMaterial
                map={colorMap}
                normalMap={normalMap}
                displacementMap={displacementMap}
                roughnessMap={colorMap}
                transparent={true}
                envMapIntensity={0.3}
                displacementScale={1}
              />
            </mesh>
          )}
        </group>
      </RigidBody>
    </>
  );
};

function easeOutBounce(x) {
  const n1 = 7.3625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

export default THREESCENE;
