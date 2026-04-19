"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

function DistortKnot() {
  const mesh = useRef<Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.x = state.clock.elapsedTime * 0.08;
    m.rotation.y = state.clock.elapsedTime * 0.12 + pointer.x * 0.4;
    m.position.x = pointer.x * 0.35;
    m.position.y = pointer.y * 0.25;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[0.95, 0.32, 220, 36]} />
        <MeshDistortMaterial
          color="#0a0908"
          emissive="#b89a6a"
          emissiveIntensity={0.42}
          roughness={0.22}
          metalness={0.88}
          distort={0.34}
          speed={2.1}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setCanvasReady(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  if (!canvasReady) {
    return (
      <div
        className="absolute inset-0 h-[100vh] min-h-[100vh] w-full bg-[#0e0d0b]/40"
        aria-hidden
      />
    );
  }

  return (
    <div className="absolute inset-0 h-[100vh] min-h-[100vh] w-full">
      <Canvas
        className="h-full min-h-[inherit] w-full touch-none"
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={42} />
        <ambientLight intensity={0.22} />
        <pointLight position={[6, 4, 6]} intensity={1.35} color="#e8dcc4" />
        <pointLight position={[-5, -3, 4]} intensity={0.95} color="#8b7355" />
        <DistortKnot />
      </Canvas>
    </div>
  );
}
