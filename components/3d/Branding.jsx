import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Branding(props) {
  const { nodes, materials } = useGLTF('/img/models/branding-transformed.glb');

  const cylinder1 = useRef();
  const cylinder2 = useRef();
  const cylinder3 = useRef();
  useFrame(() => {
    cylinder1.current.rotation.x =
      ((props.scrollState.progress * Math.PI) / 2) * -1;

    cylinder2.current.rotation.x =
      ((props.scrollState.progress * Math.PI) / 4) * -1;
    cylinder3.current.rotation.x =
      ((props.scrollState.progress * Math.PI) / 6) * -1;
  });

  return (
    <group {...props} dispose={null}>
      <group ref={cylinder1}>
        {' '}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials.PaletteMaterial002}
          position={[-1.289, -0.008, 0.017]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.057}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>

      <group ref={cylinder2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials.PaletteMaterial002}
          position={[-0.73, -0.008, 0.017]}
          scale={3.43}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder2.geometry}
          material={materials.PaletteMaterial002}
        />
      </group>

      <group ref={cylinder3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder3.geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder4.geometry}
          material={materials.PaletteMaterial002}
        />
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder5.geometry}
        material={materials.PaletteMaterial002}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.159, -0.008, 0.017]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials.PaletteMaterial002}
        position={[0.414, -0.008, 0.017]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials.PaletteMaterial002}
        position={[0.987, -0.008, 0.017]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.057}
      />
    </group>
  );
}

useGLTF.preload('/img/models/branding-transformed.glb');
