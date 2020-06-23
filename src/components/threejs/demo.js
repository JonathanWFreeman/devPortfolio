/* eslint-disable no-multi-assign */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  Canvas,
  extend,
  useThree,
  useFrame,
  useLoader,
} from 'react-three-fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

extend({ OrbitControls });

const wait = (amount = 0) =>
  new Promise(resolve => setTimeout(resolve, amount));

let counte = 0;
let countup = true;
function counter() {
  if (countup) {
    counte += 0.1;
    if (counte >= 1) countup = false;
  } else {
    counte -= 0.1;
    if (counte <= 0) countup = true;
  }
  // console.log(counte);
  return counte;
}
// setInterval(counter, 50);

// async function zoomOut() {
//   let count = 1;

//   while (count !== 0) {
//     setInterval(() => {
//       count -= 0.1;
//     }, 500);
//   }
// }

let gah = 1;
async function timer() {
  while (true) {
    gah = 1;
    // console.log(gah);
    await wait(5000);
    // await zoomOut();
    await wait(5000);
    // console.log(gah);
  }
}
// timer();

function Model({ url, position, rotation, time }) {
  const [model, setModel] = useState();
  const [yPos, setYPos] = useState([0, 0, 0]);
  const mesh = useRef();
  // const gltf = useLoader(GLTFLoader, url);
  // const model = gltf.scene;
  let count = 0;
  let rotPos;
  let rotPosY = 0;
  // console.dir(gltf);

  useEffect(() => {
    new GLTFLoader().load(url, setModel);
  }, [url]);

  useFrame(() => {
    count += 0.01;
    if (count >= 5) {
      count = 0;
    }
    // console.log(Math.floor(count));
    if (model) {
      // console.log(gah);
      // console.log(counte);
      rotPosY = mesh.current.rotation.y += 0.005 * time;
      // mesh.current.scale.x = counte;
      // mesh.current.scale.y = counte;
      // mesh.current.scale.z = counte;

      setYPos([0, rotPosY, 0]);
      rotPos = [0, rotPosY, 0];
      console.log(yPos);
    }

    // time += 0.03;
    // mesh.current.position.y = position[1] + Math.sin(time) * 0.4;
  });
  // console.dir(mesh);
  return model ? (
    <primitive
      object={model.scene}
      ref={mesh}
      // rotation={[0, 7, 0]}
      scale={[1, 1, 1]}
      // dispose={null}
      position={position}
      rotation={yPos}
      // rotation={rotation}
      // visible={false}
    />
  ) : null;
}

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      // autoRotate
      // autoRotateSpeed={15}
      enabled={false}
      // setModel={(50, 50, 50)}
      // maxPolarAngle={Math.PI / 3}
      // minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

const Box = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.1));

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
};

const modelArr = ['/threejs/html5.gltf', '/threejs/css3.gltf'];

let ugh = 0;
let psh = 0;
function inOut() {
  if (ugh > 5) {
    psh++;
    ugh = 0;
  }

  if (psh > 1) {
    psh = 0;
  }

  ugh++;
  const mod = modelArr[psh];
  // console.log({ ugh });
  // console.log({ psh });
  // console.log({ mod });

  return mod;
}
setInterval(inOut, 1000);

const Demo = () => {
  const isBrowser = typeof window !== 'undefined';
  const [modState, setModState] = useState(modelArr[0]);

  // const sec = setInterval(timer, 1000);
  // const mod = setInterval(inOut, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setModState(inOut);
      // console.log(modState);
    }, 1000);

    return () => clearInterval(interval);
  }, [modState]);

  return (
    <>
      {isBrowser && (
        <Canvas
          camera={{ position: [5, 0, 0] }}
          // onCreated={({ gl }) => {
          //   gl.shadowMap.enabled = true;
          //   gl.shadowMap.type = THREE.PCFSoftShadowMap;
          // }}
        >
          {/* <ambientLight intensity={-0.4} /> */}
          {/* <spotLight
              position={[15, 20, 5]}
              penumbra={1}
              intensity={2}
              castShadow
            />
            <spotLight
              position={[-15, -20, -5]}
              intensity={-1}
              penumbra={1}
              castShadow
            /> */}
          <spotLight
            position={[5, 0, 0]}
            intensity={1}
            penumbra={2}
            castShadow
          />
          {/* <spotLight
              position={[0, 0, -5]}
              intensity={-1}
              penumbra={2}
              castShadow
            /> */}
          <Controls />
          {/* <SpaceShip /> */}
          <Suspense fallback={null}>
            <Model
              url={modState}
              position={[0, 0, 0]}
              rotation={[0, 5, 0]}
              time={2}
            />
          </Suspense>
          {/* <Box position={[4, 0, 0]} /> */}
        </Canvas>
      )}
    </>
  );
};

// TODO:
// async await fade in out each model

Model.propTypes = {
  url: PropTypes.string,
  position: PropTypes.array,
  rotation: PropTypes.array,
  time: PropTypes.number,
};

export default Demo;
