import React, {useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import './App.css'
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

const SpinningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() =>(mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref ={mesh}> 
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial attach="material" color={color} speed={5} factor={1.3} wireframe={true}  />
    </mesh>
  );
};

function App() {
  return (
   <>
      <Canvas colorManagment camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={0.3} />
        <SpinningMesh position={[0, 0, 0]} args={[1,4,3]} color="pink" />
        <OrbitControls />
      </Canvas>
   </>
  );
}

export default App;

