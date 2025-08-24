import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { Suspense } from "react";

// Simple 3D floating icons component
const FloatingShape = ({ position, color, shape }: { position: [number, number, number]; color: string; shape: string }) => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[1, 1.5]}
    >
      <mesh position={position}>
        {shape === "box" && <boxGeometry args={[1, 1, 1]} />}
        {shape === "sphere" && <sphereGeometry args={[0.8, 32, 32]} />}
        {shape === "torus" && <torusGeometry args={[0.8, 0.3, 16, 100]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
      
      {/* Floating 3D shapes */}
      <FloatingShape position={[-3, 2, 0]} color="#a855f7" shape="box" />
      <FloatingShape position={[3, -1, -2]} color="#3b82f6" shape="sphere" />
      <FloatingShape position={[0, 3, 1]} color="#ec4899" shape="torus" />
      <FloatingShape position={[-2, -2, 2]} color="#06b6d4" shape="box" />
      <FloatingShape position={[4, 1, 0]} color="#f59e0b" shape="sphere" />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const FloatingIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0 pointer-events-none"
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ height: "100%", width: "100%" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default FloatingIcons;