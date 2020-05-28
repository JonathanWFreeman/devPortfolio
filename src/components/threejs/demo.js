/* eslint-disable no-multi-assign */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import styled from 'styled-components';

const Fade = styled.div`
  ${'' /* background: purple; */}
`;

extend({ OrbitControls });

const SpaceShip = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load('/threejs/rocket/scene.gltf', setModel);
  }, []);

  return model ? <primitive object={model.scene} /> : null;
};

const Something = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load('/threejs/html5.gltf', setModel);
  }, []);

  return model ? <primitive object={model.scene} /> : null;
};

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  console.log(orbitRef);
  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      scale={(5, 5, 5)}
      enableRotate={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
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

const Demo = () => {
  const isBrowser = typeof window !== 'undefined';

  return (
    <>
      <h1>Hello everyone!</h1>
      {isBrowser && (
        <Fade>
          <Canvas
            camera={{ position: [0, 0, 5] }}
            onCreated={({ gl }) => {
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
            <Controls />
            {/* <SpaceShip /> */}
            <Something />
            {/* <Box position={[4, 0, 0]} /> */}
          </Canvas>
        </Fade>
      )}
    </>
  );
};

export default Demo;
