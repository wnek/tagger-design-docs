import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Comment(props) {
  const { nodes, materials } = useGLTF('/img/models/comment-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[-0.483, 1.056, 1.381]} scale={0.758} />
      <mesh castShadow receiveShadow geometry={nodes.Damian.geometry} material={materials['Material.010']} position={[-0.557, 1.129, 1.386]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
      <mesh castShadow receiveShadow geometry={nodes.D.geometry} material={materials['Material.010']} position={[-0.642, 1.107, 1.386]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials['Material.005']} position={[-0.63, 1.119, 1.383]} rotation={[Math.PI / 2, 0, 0]} scale={0.758} />
      <mesh castShadow receiveShadow geometry={nodes.paulina003.geometry} material={materials['Material.010']} position={[-0.557, 1.087, 1.386]} rotation={[Math.PI / 2, 0, 0]} scale={0.033} />
    </group>
  )
}

useGLTF.preload('/img/models/comment-transformed.glb')
