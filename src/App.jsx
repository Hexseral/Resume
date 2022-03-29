import React, {useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import './App.css'
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

const SpinningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() =>(mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01));
  return (
    <mesh position={position} ref ={mesh}> 
      <boxBufferGeometry attach="geometry" args={[args]} />
      <MeshWobbleMaterial attach="material" color={color} speed={5} factor={1.5} wireframe={true}  />
    </mesh>
  );
};

function App() {
  return (
   <>
      <Canvas colorManagment camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={0.3} />
        <SpinningMesh position={[0, 1, 0]} color="pink" />
        <SpinningMesh position={[-2, 1, -5]} color="green"/>
        <SpinningMesh position={[5, 1, -2]} color="blue"/>
        <OrbitControls />
      </Canvas>
   </>
  );
}

export default App;

