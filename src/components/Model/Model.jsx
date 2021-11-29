import React from 'react'
import { Canvas , useFrame} from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

function Load() {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  
  //rotate
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = Math.sin(clock.getElapsedTime());
    myMesh.current.rotation.y = a;
  });
  
  return (
    <mesh ref={myMesh}>
      <primitive object={gltf.scene} scale={0.1} />
    </mesh>
  );
}



export default function Model() {
    return (
      <Canvas style={{height:'600px', width: '90%', marginTop: '1em'  }}>
        <Suspense fallback={null}>
          <Load />
          <ambientLight />
          <OrbitControls />
        </Suspense>
    </Canvas>
    )
  }