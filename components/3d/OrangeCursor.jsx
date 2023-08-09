
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function OrangeCursor(props) {
  const { nodes, materials } = useGLTF('/img/models/orange-cursor-transformed.glb')
  return (
    <group {...props} dispose={null}>
    <mesh castShadow receiveShadow geometry={nodes['orange-cursor'].geometry} material={materials['Material.002']} position={[1.099, 0.752, 1.798]} rotation={[Math.PI / 2, 0.203, 0]} scale={2.487} />
    <mesh castShadow receiveShadow geometry={nodes.paulina.geometry} material={materials['Material.008']} position={[1.179, 0.724, 1.802]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
    <mesh castShadow receiveShadow geometry={nodes.button.geometry} material={materials['Material.002']} position={[0.287, 0.555, 0.451]} scale={0.708} />
  </group>
  )
}

useGLTF.preload('/orange-cursor-transformed.glb')