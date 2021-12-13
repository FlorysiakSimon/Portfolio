import React from 'react'
import { Canvas , useFrame} from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

function Load() {
  const gltf = useLoader(GLTFLoader, "./Simon_3D_caractere.gltf");
  
  //rotate
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
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
      <Canvas shadowMap style={{height:'600px', width: '90%',marginLeft:'3em', marginTop: '-120px',marginBottom:'-200px'  }} camera={{ position: [1.5, 1.5, 0.5] }}>
        <Suspense fallback={null}>
          <Load />
          <pointLight position={[5, 5, 10]} />
          <ambientLight intensity={1}/>
        </Suspense>
    </Canvas>
    )
  }