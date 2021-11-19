import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
//import { OrbitControls } from "@react-three/drei";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.003))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      >
      <torusGeometry  args={[12, 2, 100, 100]} />
      <meshStandardMaterial color={'#0074D9'} />
    </mesh>
  )
}

export default function Torus() {
  return (
    <Canvas style={{position:'fixed',top:'0', left:'0', height:'100%', width: '100%', marginTop: '1em'  }}>
      <ambientLight intensity={0.6} />
      <spotLight position={[10, 10, 10]} angle={90} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, 0, -18]}  rotation={[-Math.PI * 0.20, Math.PI * 0.75, 0]} />
    </Canvas>
  )
}
