"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model3D from "./Model3D";
import Particles from "./Particles";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#C8A96E" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#2D5A4E" />
        
        <Suspense fallback={null}>
          <Model3D />
          <Particles />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
