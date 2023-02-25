import React, {useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import './App.css'
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { Bust } from "../Bust";

const SpinningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() =>(mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref ={mesh}> 
      <torusBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial attach="material" color={color} speed={2} factor={1} wireframe={false}  />
    </mesh>
  );
};

function App() {
  return (
   <>
      <Canvas colorManagment camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={0.3} />
        <Bust />
        <OrbitControls />
      </Canvas>
   </>
  );
}

export default App;

