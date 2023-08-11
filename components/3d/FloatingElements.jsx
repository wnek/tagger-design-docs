import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function FloatingElements(props) {
  const { nodes, materials } = useGLTF('img/models/floats-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes['orange-cursor'].geometry} material={materials['Material.002']} position={[1.159, 0.3, 1.798]} rotation={[Math.PI / 2, 0.203, 0]} scale={2.487} />
      <mesh castShadow receiveShadow geometry={nodes['red-cursor'].geometry} material={materials['Material.005']} position={[-1.056, 0.873, 1.287]} rotation={[Math.PI / 2, 0.203, 0]} scale={2.487} />
    </group>
  )
}

useGLTF.preload('img/models/floats-transformed.glb')
