
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function OrangeCursor(props) {
  const { nodes, materials } = useGLTF('/img/models/orange-cursor-transformed.glb')
  return (
    <group {...props} dispose={null}>
    <mesh castShadow receiveShadow geometry={nodes['orange-cursor'].geometry} material={materials['Material.002']} position={[0.902, 0.555, 1.894]} rotation={[0, 0.203, 0]} scale={4.09} />
    <mesh castShadow receiveShadow geometry={nodes.paulina.geometry} material={materials['Material.008']} position={[1.105, 0.562, 1.985]} scale={0.082} />
    <mesh castShadow receiveShadow geometry={nodes.button002.geometry} material={materials['Material.002']} position={[1.103, 0.561, 1.987]} rotation={[-Math.PI / 2, 0, 0]} scale={1.165} />
  </group>
  )
}

useGLTF.preload('/img/models/orange-cursor-transformed.glb')