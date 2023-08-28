import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function GreyCursor(props) {
    const { nodes, materials } = useGLTF('/img/models/grey-cursor-transformed.glb')
    return (
      <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes['red-cursor001'].geometry} material={materials.black} position={[-1.644, 0.646, 0.833]} rotation={[0, 0.203, 0]} scale={1.836} />
      <mesh castShadow receiveShadow geometry={nodes.mariusz.geometry} material={materials['Material.014']} position={[-1.502, 0.666, 0.869]} scale={0.061} />
      <mesh castShadow receiveShadow geometry={nodes.button003.geometry} material={materials.black} position={[-1.493, 0.665, 0.871]} rotation={[-Math.PI / 2, 0, 0]} scale={0.86} />
    </group>
    )
  }
  
  useGLTF.preload('/img/models/grey-cursor-transformed.glb')