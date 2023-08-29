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
    const stageRef = useRef<THREE.Group>()


    const { size } = useThree();

    let modelScaleMultiplier = 0.4;
    let modelPositionX = 0;

    if (size.width < 480) {
        modelScaleMultiplier = 1.2;
        modelPositionX = 5;
    }

    if (size.width > 480 && size.width < 1024) {
        modelScaleMultiplier = 0.7;
        modelPositionX = 3;
    }

    if (size.width > 1024 && size.width < 1600) {
        modelScaleMultiplier = 0.4;
        modelPositionX = 5;
    }

    if (size.width > 1600) {
        modelScaleMultiplier = 0.35;
        modelPositionX = 0;
    }


    useFrame((state) => {

        v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 })
        v.unproject(state.camera)

        cameraRef.current.position.lerp({
            x: state.pointer.x * 20, y: 50, z: -state.pointer.y * 10
        }, 0.01)
        cameraRef.current.lookAt(0, 0, 0)
        cameraRef.current.up.set(0, 0, -1);
        state.camera.updateProjectionMatrix()

        lightRef.current.position.lerp({
            x: state.pointer.x * 5, y: 50, z: -state.pointer.y * 10
        }, 0.05)


    })

    return <ViewportScrollScene track={el} hideOffscreen={false}>
        {(props) => (
            <>
                <group ref={stageRef} position={[0, 0, modelPositionX]} scale={props.scale.xy.min() * modelScaleMultiplier}>



                    <Model castShadow />

                    <Float floatIntensity={0.1} rotationIntensity={0.1} speed={1.1}>
                        <GreyCursor castShadow />
                    </Float>

                    <Float floatIntensity={0.4} rotationIntensity={0.2} speed={1.2}>
                        <RedCursor castShadow />
                    </Float>

                    <Float floatIntensity={0.5} rotationIntensity={0.1} speed={1.5}>
                        <OrangeCursor castShadow />
                    </Float>

                    <Float floatIntensity={0.6} rotationIntensity={0.1} speed={1.5}>
                        <Comment castShadow />
                    </Float>




                </group>

                <PerspectiveCamera fov={30} ref={cameraRef} makeDefault={true} position={[0, 50, 0]} />

                <spotLight ref={lightRef} position={[-14, 200, -1]} color="white" intensity={100} />
                {/* <rectAreaLight position={[0, 0, 20]} color="white" intensity={100} lookAt={[0, 0, 0]} width={2}
                    height={200} /> */}

                <Environment>
                    <Lightformer
                        form="ring" // circle | ring | rect (optional, default = rect)
                        intensity={600} // power level (optional = 1)
                        color="white" // (optional = white)
                        scale={[20, 1]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]}
                        position={[0, 100, -80]} // Target position (optional = undefined)
                    />
                    <Lightformer
                        form="rect" // circle | ring | rect (optional, default = rect)
                        intensity={1} // power level (optional = 1)
                        color="white" // (optional = white)
                        scale={[500, 500]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]}
                        position={[0, -100, -80]} // Target position (optional = undefined)
                    />
                    <Lightformer
                        form="rect" // circle | ring | rect (optional, default = rect)
                        intensity={2} // power level (optional = 1)
                        color="white" // (optional = white)
                        scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]}
                        position={[-5, 1, -1]} // Target position (optional = undefined)
                    />

                    <Lightformer
                        form="rect" // circle | ring | rect (optional, default = rect)
                        intensity={1} // power level (optional = 1)
                        color="white" // (optional = white)
                        scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]}
                        position={[5, 1, -1]} // Target position (optional = undefined)
                    />
                    <Lightformer
                        form="rect" // circle | ring | rect (optional, default = rect)
                        intensity={1} // power level (optional = 1)
                        color="white" // (optional = white)
                        scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]}
                        position={[5, -10, -1]} // Target position (optional = undefined)
                    />
                    <Lightformer
                        form="rect" // circle | ring | rect (optional, default = rect)
                        intensity={10} // power level (optional = 1)
                        color="orange" // (optional = white)
                        scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]}
                        position={[5, 1, 10]} // Target position (optional = undefined)
                    />
                    <Lightformer
                        form="rect" // circle | ring | rect (optional, default = rect)
                        intensity={10} // power level (optional = 1)
                        color="orange" // (optional = white)
                        scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
                        target={[0, 0, 0]}
                        position={[0, -2, 4]} // Target position (optional = undefined)
                    />
                </Environment>


            </>
        )
        }

    </ViewportScrollScene >

}

