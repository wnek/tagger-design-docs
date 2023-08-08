import React, { useRef } from 'react'
import Link from 'next/link';


// R3F-Scroll-Rig
import { GlobalCanvas, ScrollScene, ViewportScrollScene, UseCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'

// Three.js
import * as THREE from 'three'

// R3F
import { useFrame } from '@react-three/fiber'
import { Box, PerspectiveCamera, Float, Grid } from '@react-three/drei'

export default function Hero() {
    const el = useRef()

    return (
        <>
            <div ref={el} className="hero-scroll-scene">
                <div className='logo'>
                    <Link href={'../'}>
                        <img src={'./img/tagger-logo-light.svg'} />
                    </Link>
                </div>
            </div >
            <UseCanvas>
                <HeroScene el={el} />
            </UseCanvas>
        </>

    )
}

function HeroScene({ el }) {
    const v = new THREE.Vector3()

    const cameraRef = useRef<THREE.Camera>()

    useFrame((state) => {

        v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 })
        cameraRef.current.position.lerp({ x: -state.pointer.x * 5, y: Math.max(0, -state.pointer.y * 5), z: 20 }, 0.02)
        cameraRef.current.lookAt(0, 0, 0)

    })
    return <ViewportScrollScene track={el} hideOffscreen={false}>
        {(props) => (
            <>
                <StageComponent {...props} />

                <PerspectiveCamera fov={80} ref={cameraRef} makeDefault={true} position={[0, 0, 18]} />
            </>
        )}
    </ViewportScrollScene>

}

function StageComponent(props) {


    return (
        <>
            <group position={[0, -2, 0]} scale={props.scale.xy.min() * 0.5}>

                <Float floatIntensity={0.2} rotationIntensity={1} speed={2}>
                    <Box args={[1, 1, 1]} position={[2, 1, 0]} castShadow receiveShadow />
                </Float>
                <mesh position={[0, 0.5, 1]} >
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
                <Grid position={[0, -0.01, 0]}
                    gridSize={[5, 5]}
                    cellSize={0.25}
                    cellThickness={1}
                    cellColor={'#6f6f6f'}
                    sectionSize={0.9}
                    sectionThickness={1.2}
                    sectionColor={'#FA4646'}
                    fadeDistance={30}
                    fadeStrength={3}
                    followCamera={false}
                    infiniteGrid={true}

                />
            </group>

        </>
    )
}

