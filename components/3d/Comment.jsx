import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Comment(props) {
  const { nodes, materials } = useGLTF('/img/models/comment-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[-0.658, 0.669, -0.055]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.877}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Damian.geometry}
        material={materials['Material.004']}
        position={[-0.744, 0.675, -0.139]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.003']}
        position={[-0.828, 0.671, -0.127]}
        scale={0.877}
      />
    </group>
  );
}

useGLTF.preload('/img/models/comment-transformed.glb');
