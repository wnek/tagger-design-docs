import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RedCursor(props) {
  const { nodes, materials } = useGLTF('/img/models/red-cursor-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes['red-cursor'].geometry} material={materials['Material.005']} position={[0.332, 1.23, 1.089]} rotation={[0, 0.203, 0]} scale={2.487} />
      <mesh castShadow receiveShadow geometry={nodes.button001.geometry} material={materials['Material.005']} position={[0.536, 1.256, 1.14]} rotation={[-Math.PI / 2, 0, 0]} scale={1.165} />
      <mesh castShadow receiveShadow geometry={nodes.paulina001.geometry} material={materials['Material.004']} position={[0.538, 1.257, 1.138]} scale={0.082} />
    </group>
  )
}

useGLTF.preload('/img/models/red-cursor-transformed.glb')