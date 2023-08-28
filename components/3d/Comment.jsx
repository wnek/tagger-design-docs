import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Comment(props) {
  const { nodes, materials } = useGLTF('/img/models/comment-transformed.glb')
  return (
    <group {...props} dispose={null}>
    <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[-1.061, 0.669, 1.434]} rotation={[-Math.PI / 2, 0, 0]} scale={0.877} />
    <mesh castShadow receiveShadow geometry={nodes.Damian.geometry} material={materials['Material.010']} position={[-1.147, 0.675, 1.35]} scale={0.058} />
    <mesh castShadow receiveShadow geometry={nodes.D.geometry} material={materials['Material.010']} position={[-1.245, 0.675, 1.376]} scale={0.058} />
    <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials['Material.005']} position={[-1.232, 0.671, 1.362]} scale={0.877} />
    <mesh castShadow receiveShadow geometry={nodes.paulina003.geometry} material={materials['Material.010']} position={[-1.147, 0.675, 1.399]} scale={0.038} />
  </group>
  )
}

useGLTF.preload('/img/models/comment-transformed.glb')
