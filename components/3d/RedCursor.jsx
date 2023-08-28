import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function RedCursor(props) {
  const { nodes, materials } = useGLTF(
    '/img/models/red-cursor-transformed.glb'
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['red-cursor'].geometry}
        material={materials['Material.003']}
        position={[-0.731, 1.23, 0.772]}
        rotation={[0, 0.203, 0]}
        scale={2.487}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.paulina001.geometry}
        material={materials['Material.004']}
        position={[-0.525, 1.257, 0.822]}
        scale={0.082}
      />
    </group>
  );
}

useGLTF.preload('/img/models/red-cursor-transformed.glb');
