import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function OrangeCursor(props) {
  const { nodes, materials } = useGLTF(
    '/img/models/orange-cursor-transformed.glb'
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['orange-cursor'].geometry}
        material={materials['Material.010']}
        position={[1.133, 0.555, -0.41]}
        rotation={[0, 0.203, 0]}
        scale={4.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.paulina.geometry}
        material={materials['Material.004']}
        position={[1.336, 0.562, -0.319]}
        scale={0.082}
      />
    </group>
  );
}

useGLTF.preload('/img/models/orange-cursor-transformed.glb');
