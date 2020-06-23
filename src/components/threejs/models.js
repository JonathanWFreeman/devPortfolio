import React, { useState, useRef, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useFrame } from 'react-three-fiber';

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

function Model({ url, position, time, rotation }) {
  const [model, setModel] = useState();
  const [yPos, setYPos] = useState(rotation);
  const mesh = useRef();
  let count = 0;
  let meshY;
  let rotPosY = 0;

  useEffect(() => {
    new GLTFLoader().load(url, setModel);
  }, [url]);

  useFrame(() => {
    count += 0.01;
    if (count >= 5) {
      count = 0;
    }
    if (model) {
      // console.log(gah);
      // console.log(counte);
      meshY = mesh.current.rotation.y;
      rotPosY = meshY + 0.005 * time;
      // mesh.current.scale.x = counte;
      // mesh.current.scale.y = counte;
      // mesh.current.scale.z = counte;

      setYPos([0, rotPosY, 0]);
      console.log(yPos);
    }
  });
  return model ? (
    <primitive
      object={model.scene}
      ref={mesh}
      scale={[1, 1, 1]}
      position={position}
      rotation={yPos}
    />
  ) : null;
}

const modelArr = ['/models/html5.gltf', '/models/css3.gltf', '/models/js.gltf'];

let ugh = 0;
let psh = 0;
// change to length of array and loop through
function inOut() {
  const len = modelArr.length - 1;

  if (ugh > 6) {
    psh++;
    ugh = 0;
  }

  if (psh > len) {
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

const Models = () => {
  const isBrowser = typeof window !== 'undefined';
  const [modState, setModState] = useState(modelArr[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setModState(inOut);
    }, 1000);

    return () => clearInterval(interval);
  }, [modState]);

  return (
    <>
      {isBrowser && (
        <Canvas camera={{ position: [5, 0, 0] }}>
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
          <Suspense fallback={null}>
            <Model
              url={modState}
              position={[0, 0, 0]}
              rotation={[0, 1.1, 0]}
              time={3}
            />
          </Suspense>
        </Canvas>
      )}
    </>
  );
};

Model.propTypes = {
  url: PropTypes.string,
  position: PropTypes.array,
  rotation: PropTypes.array,
  time: PropTypes.number,
};

export default Models;
