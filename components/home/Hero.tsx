import React, { useRef } from 'react'
import Link from 'next/link';


// R3F-Scroll-Rig
import { ViewportScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'

// Three.js
import * as THREE from 'three'

// R3F
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Float, Grid, Environment, Lightformer, AccumulativeShadows, RandomizedLight, Plane, Box } from '@react-three/drei'


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
    const lightRef = useRef<THREE.Light>()
    const lightRef2 = useRef<THREE.Light>()
    useFrame((state) => {

        v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 })
        cameraRef.current.position.lerp({ x: 0, y: Math.max(50, -state.pointer.x * 5), z: 0.1 }, 0.02)
        cameraRef.current.lookAt(0, 0, 0)

        lightRef.current.position.lerp({
            x: state.pointer.x * 5, y: -1, z: -state.pointer.y * 10
        }, 0.05)

        lightRef2.current.position.lerp({
            x: state.pointer.x * 2, y: -1, z: -state.pointer.y * 5
        }, 0.05)

    })
    return <ViewportScrollScene track={el} hideOffscreen={false}>
        {(props) => (
            <>

                <StageComponent {...props} position={[0, 0, 0]} />
                {/* <fog attach="fog" color="#000000" near={1} far={80} /> */}

                <PerspectiveCamera fov={30} ref={cameraRef} makeDefault={true} position={[0, 50, 0]} />
                <spotLight ref={lightRef} position={[0, -0.2, 2]} color="white" intensity={0} />
                <spotLight ref={lightRef2} position={[-10, -10, -4]} color="white" intensity={0} />
                <spotLight position={[-14, 4, -1]} color="white" intensity={0} />

                <Environment files={"/img/models/studio_small_04_1k.hdr"} blur={10} background={"true"}>





                </Environment>


            </>
        )}

    </ViewportScrollScene>

}

function StageComponent(props, position) {

    const { size } = useThree();

    let modelScaleMultiplier = 0.4;

    if (size.width < 480) {
        modelScaleMultiplier = 0.6;
    }

    if (size.width > 480 && size.width < 1024) {
        modelScaleMultiplier = 0.3;
    }

    if (size.width > 1024 && size.width < 1600) {
        modelScaleMultiplier = 0.4;
    }

    if (size.width > 1600) {
        modelScaleMultiplier = 0.25;
    }


    return (
        <>
            <group position={[0, 0, 0]} scale={props.scale.xy.min() * modelScaleMultiplier}>



                <Model castShadow />

                <Float floatIntensity={0.1} rotationIntensity={0.2} speed={1.1}>
                    <GreyCursor castShadow />
                </Float>

                <Float floatIntensity={0.4} rotationIntensity={0.2} speed={1.2}>
                    <RedCursor castShadow />
                </Float>

                <Float floatIntensity={0.5} rotationIntensity={0.1} speed={1.5}>
                    <OrangeCursor castShadow />
                </Float>

                <Float floatIntensity={0.3} rotationIntensity={0.25} speed={1.5}>
                    <Comment castShadow />
                </Float>




            </group>


        </>
    )
}