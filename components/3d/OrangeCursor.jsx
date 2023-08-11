
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function OrangeCursor(props) {
  const { nodes, materials } = useGLTF('img/models/orange-cursor-transformed.glb')
  return (
    <group {...props} dispose={null}>
    <mesh castShadow receiveShadow geometry={nodes['orange-cursor'].geometry} material={materials['Material.002']} position={[0.902, 0.62, 1.951]} rotation={[Math.PI / 2, 0.203, 0]} scale={4.09} />
    <mesh castShadow receiveShadow geometry={nodes.paulina.geometry} material={materials['Material.008']} position={[1.105, 0.529, 1.958]} rotation={[Math.PI / 2, 0, 0]} scale={0.082} />
    <mesh castShadow receiveShadow geometry={nodes.button002.geometry} material={materials['Material.002']} position={[1.103, 0.528, 1.957]} scale={1.165} />
  </group>
  )
}

useGLTF.preload('img/models/orange-cursor-transformed.glb')