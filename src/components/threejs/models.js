import React, { useState, useRef, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useFrame } from 'react-three-fiber';

extend({ OrbitControls });

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
      meshY = mesh.current.rotation.y;
      rotPosY = meshY + 0.005 * time;

      setYPos([0, rotPosY, 0]);
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

let arrNum = 0;
function cycleModel() {
  const len = modelArr.length - 1;

  arrNum++;

  if (arrNum > len) {
    arrNum = 0;
  }

  return modelArr[arrNum];
}

const Models = () => {
  const isBrowser = typeof window !== 'undefined';
  const [modState, setModState] = useState(modelArr[0]);
  const rotationTime = 3.26;

  useEffect(() => {
    const interval = setInterval(() => {
      setModState(cycleModel);
    }, rotationTime * 1000);

    return () => clearInterval(interval);
  }, [modState]);

  return (
    <>
      {isBrowser && (
        <Canvas camera={{ position: [5, 0, 0] }}>
          <ambientLight intensity={0.2} />
          <spotLight
            position={[-10, 4, 20]}
            intensity={1}
            penumbra={1}
            castShadow
          />
          <spotLight
            position={[15, -8, 0]}
            intensity={1}
            penumbra={1}
            castShadow
          />
          <Suspense fallback={null}>
            <Model
              url={modState}
              position={[0, 0, 0]}
              rotation={[0, 1.4, 0]}
              time={rotationTime}
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
