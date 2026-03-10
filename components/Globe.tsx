"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Earth() {
  const meshRef = useRef<any>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <points ref={meshRef}>
      <sphereGeometry args={[2, 128, 128]} />
      <pointsMaterial color="#00ff88" size={0.02} />
    </points>
  )
}

export default function Globe() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} />
      <Earth />
    </Canvas>
  )
}