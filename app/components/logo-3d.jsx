"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Color, MeshPhysicalMaterial } from "three";

function LogoModel() {
  const { scene } = useGLTF("/logo.glb");
  const bronzeScene = useMemo(() => {
    const clonedScene = scene.clone(true);

    clonedScene.traverse((child) => {
      if (!child.isMesh) return;

      child.material = new MeshPhysicalMaterial({
        color: new Color("#efcf84"),
        // Backup (platinum): color: new Color("#f3f6fb"),
        metalness: 1,
        roughness: 0.08,
        clearcoat: 1,
        clearcoatRoughness: 0.04,
        envMapIntensity: 2.4,
        emissive: new Color("#c7aa76"),
        // Backup (platinum): emissive: new Color("#c8d0da"),
        emissiveIntensity: 0.2
      });
      child.castShadow = true;
      child.receiveShadow = true;
    });

    return clonedScene;
  }, [scene]);

  return <primitive object={bronzeScene} scale={1.22} />;
}

function LogoControls() {
  const controlsRef = useRef(null);
  const isDraggingRef = useRef(false);
  const defaultPolarAngle = Math.PI / 2;

  useFrame(() => {
    const controls = controlsRef.current;

    if (!controls) return;

    if (!isDraggingRef.current) {
      const currentPolarAngle = controls.getPolarAngle();
      const easedPolarAngle = currentPolarAngle + (defaultPolarAngle - currentPolarAngle) * 0.06;
      controls.setPolarAngle(easedPolarAngle);
    }

    controls.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={false}
      autoRotate
      autoRotateSpeed={0.6}
      enableDamping
      dampingFactor={0.08}
      onStart={() => {
        isDraggingRef.current = true;
      }}
      onEnd={() => {
        isDraggingRef.current = false;
      }}
    />
  );
}

export default function Logo3D() {
  return (
    <div className="logo3d">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 3], fov: 30 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.25} />
        <directionalLight position={[4, 4, 3]} intensity={2.4} color="#ffffff" />
        <directionalLight position={[-3, 2, 2]} intensity={1.4} color="#eef3fb" />
        <directionalLight position={[0, -2, 3]} intensity={0.85} color="#d7dee8" />
        <directionalLight position={[0, 0, 5]} intensity={1.1} color="#ffffff" />
        <Environment preset="studio" />
        <Bounds fit clip margin={0.85}>
          <LogoModel />
        </Bounds>
        <LogoControls />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/logo.glb");
