import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './App.css'

function Box(){
  return (
    <mesh> 
      <boxBufferGeometry attach="geometry"  />
      <meshNormalMaterial attach="material"  />
    </mesh>
  )
}

export default function App() {
  return (
   <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Box />
      </Canvas>
   </>
  );
}


