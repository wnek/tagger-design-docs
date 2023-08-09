import React, { useRef } from 'react'
import Link from 'next/link';


// R3F-Scroll-Rig
import { GlobalCanvas, ScrollScene, ViewportScrollScene, UseCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'

// Three.js
import * as THREE from 'three'

// R3F
import { useFrame } from '@react-three/fiber'
import { Box, PerspectiveCamera, Float, Grid, Text, Billboard, Environment, Lightformer, AccumulativeShadows, RandomizedLight, ContactShadows } from '@react-three/drei'

import Model from '../3d/Hero3d';

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
                <div className='content'>
                    <p>Tagger Design Nest</p>
                    <h1>Shape Ideas into Reality</h1>
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



                <Environment blur={1}>
                    <Lightformer
                        position={[0, 10, 2]}
                        form="rect" // circle | ring | rect (optional, default = rect)
                        intensity={4} // power level (optional = 1)
                        color="ring" // (optional = white)
                        scale={[50, 50]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]} // Target position (optional = undefined)
                    />
                    <Lightformer
                        position={[0, -10, 2]}
                        form="ring" // circle | ring | rect (optional, default = rect)
                        intensity={0.2} // power level (optional = 1)
                        color="white" // (optional = white)
                        scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]} // Target position (optional = undefined)
                    />
                    <Lightformer
                        position={[50, 50, 0]}
                        form="ring" // circle | ring | rect (optional, default = rect)
                        intensity={100} // power level (optional = 1)
                        color="#FA6A42" // (optional = white)
                        scale={[10, 50]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]} // Target position (optional = undefined)
                    />
                </Environment>
            </>
        )}

    </ViewportScrollScene>

}

function StageComponent(props) {


    return (
        <>
            <group position={[0, -5, 0]} scale={props.scale.xy.min() * 0.5}>
                <AccumulativeShadows temporal frames={100} color="black" colorBlend={1} toneMapped={false} alphaTest={0.5} opacity={2} scale={24}>
                    <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={2} position={[5, 5, -10]} bias={0.001} />
                </AccumulativeShadows>
                {/* 
                <Billboard>
                    <Text position={[0, 2, 0]} fontSize={0.1} color={'#ffffff'} text="Tagger Design Nest" />
                    <Text position={[0, 1.5, 0]} fontSize={0.75} color={'#ffffff'} text="Shape Ideas into Reality" textAlign='center' maxWidth={6} />
                </Billboard> */}
                <Model castShadow />
                <Float floatIntensity={0.2} rotationIntensity={1} speed={2}>
                    <Box args={[1, 1, 1]} position={[2, 1, 0]} castShadow receiveShadow />
                    <Box args={[1, 1, 1]} position={[-2, 1, 0]} castShadow receiveShadow />
                </Float>

                {/* <mesh castShadow position={[0, 0.5, 1]} >
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh> */}

                <Grid position={[0, 0.01, 0]}
                    gridSize={[5, 5]}
                    cellSize={0.25}
                    cellThickness={1}
                    cellColor={'#6f6f6f'}
                    sectionSize={1.3}
                    sectionThickness={1.2}
                    sectionColor={'#FA6A42'}
                    fadeDistance={30}
                    fadeStrength={3}
                    followCamera={false}
                    infiniteGrid={true}

                />
            </group>


        </>
    )
}

