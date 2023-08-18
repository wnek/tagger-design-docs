import React, { useRef } from 'react'
import Link from 'next/link';


// R3F-Scroll-Rig
import { GlobalCanvas, ScrollScene, ViewportScrollScene, UseCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'

// Three.js
import * as THREE from 'three'

// R3F
import { useFrame, useThree } from '@react-three/fiber'
import { Box, PerspectiveCamera, Float, Grid, Text, Billboard, Environment, Lightformer, AccumulativeShadows, RandomizedLight, Sparkles, Stars } from '@react-three/drei'


import Model from '../3d/Hero3d';
import OrangeCursor from '../3d/OrangeCursor';
import Comment from '../3d/Comment';
import RedCursor from '../3d/RedCursor';
import GreyCursor from '../3d/GreyCursor';

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
                <div className='hero_content'>
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
        cameraRef.current.position.lerp({ x: -state.pointer.x * 10, y: Math.max(-6, -state.pointer.y * 5), z: 20 }, 0.02)
        cameraRef.current.lookAt(0, 0, 0)
    })
    return <ViewportScrollScene track={el} hideOffscreen={false}>
        {(props) => (
            <>

                <StageComponent {...props} />

                <PerspectiveCamera fov={80} ref={cameraRef} makeDefault={true} position={[0, 0, 18]} />



                <Environment blur={2}>
                    <Lightformer
                        position={[0, 15, 2]}
                        form="rect" // circle | ring | rect (optional, default = rect)
                        intensity={20} // power level (optional = 1)
                        color="white" // (optional = white)
                        scale={[50, 50]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 10, 0]} // Target position (optional = undefined)
                    />
                    <Lightformer
                        position={[0, -10, 2]}
                        form="ring"
                        intensity={0.2}
                        color="white"
                        scale={[10, 5]}
                        target={[0, 0, 0]}
                    />
                    <Lightformer
                        position={[-2, 15, 1]}
                        form="ring"
                        intensity={50}
                        color="#FA6A42"
                        scale={[50, 50]}
                        target={[0, 0, 0]}
                    />
                    <Lightformer
                        position={[2, 30, 0]}
                        form="ring"
                        intensity={20}
                        color="#FA6A42"
                        scale={[10, 50]}
                        target={[0, 0, 0]}
                    />
                </Environment>
            </>
        )}

    </ViewportScrollScene>

}

function StageComponent(props) {

    const { size, viewport } = useThree();

    let modelScaleMultiplier = 0.4;

    if (size.width < 480) {
        modelScaleMultiplier = 1;
    }

    if (size.width > 480 && size.width < 1024) {
        modelScaleMultiplier = 0.7;
    }

    if (size.width > 1024 && size.width < 1600) {
        modelScaleMultiplier = 0.8;
    }

    if (size.width > 1600) {
        modelScaleMultiplier = 0.5;
    }


    return (
        <>
            <group position={[0, -6, 0]} scale={props.scale.xy.min() * modelScaleMultiplier}>

                {/* <Sparkles color="#FA6A42" count={1000} size={3} speed={0.4} position={[1, 0, 0]} scale={[10]} /> */}

                <AccumulativeShadows temporal frames={100} color="black" colorBlend={1} toneMapped={false} alphaTest={0.4} opacity={2} scale={24}>
                    <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={2} position={[5, 5, -10]} bias={0.001} />
                </AccumulativeShadows>

                <Model castShadow />

                <Float floatIntensity={0.1} rotationIntensity={0.2} speed={1.1}>
                    <GreyCursor castShadow />
                </Float>

                <Float floatIntensity={0.4} rotationIntensity={0.2} speed={1.2}>
                    <RedCursor castShadow />
                </Float>

                <Float floatIntensity={0.5} rotationIntensity={0.1} speed={1.5}>
                    <OrangeCursor castShadow />`
                </Float>

                <Float floatIntensity={0.3} rotationIntensity={0.25} speed={1.5}>
                    <Comment castShadow />
                </Float>

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

