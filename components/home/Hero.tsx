import React, { useRef, Suspense } from 'react'
import Link from 'next/link';


// R3F-Scroll-Rig
import { ViewportScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'

// Three.js
import * as THREE from 'three'

// R3F
import { useFrame, useThree, } from '@react-three/fiber'
import { PerspectiveCamera, Float, Grid, Environment, useTexture, Html, Cylinder, Lightformer, AccumulativeShadows, Sphere, RandomizedLight, Plane, Box, useProgress } from '@react-three/drei'


import Model from '../3d/Hero3d';
import OrangeCursor from '../3d/OrangeCursor';
import Comment from '../3d/Comment';
import RedCursor from '../3d/RedCursor';
import GreyCursor from '../3d/GreyCursor';



function Loader() {
    const { progress } = useProgress();


    return <Html as='div' center distanceFactor={10} wrapperClass={"loader"} transform zIndexRange={[1000, 0]}>
        <h4>Loading: {Math.round(progress)}%</h4>
    </Html>;
}


export default function Hero() {
    const el = useRef()
    const { progress } = useProgress();




    return (
        <>
            <div ref={el} className="hero-scroll-scene">
                <div className='logo'>
                    <Link href={'../'}>
                        <img src={'./img/tagger-logo-light.svg'} />
                    </Link>
                </div>
                {progress >= 100 && (
                    <div className='hero_content'>
                        <p>Tagger Design Nest</p>
                        <h1>Shape Ideas into Reality</h1>
                    </div>
                )}

            </div >

            <UseCanvas>
                <Suspense fallback={<Loader />}>
                    <HeroScene el={el} />
                </Suspense>

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

    const backgroundTexture = useTexture('/img/models/background.jpg')
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


                    <Model castShadow receiveShadow />

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

                    <Cylinder scale={[6, 18, 6]} position={[0, 0, 1]} rotation={[Math.PI / 2, Math.PI / 2, 0]} openEnded>
                        <meshBasicMaterial color="white" side={THREE.BackSide} map={backgroundTexture} />
                    </Cylinder>

                    <spotLight ref={lightRef} position={[-14, 200, -1]} color="white" intensity={2000} />





                </group>

                <PerspectiveCamera fov={30} ref={cameraRef} makeDefault={true} position={[0, 50, 0]} up={[0, 0, -1]} />



                <Environment>
                    <Lightformer intensity={5} position={[0, 0, -50]} target={[0, 0, 0]} scale={100} />
                    <Lightformer intensity={50} position={[-50, 0, -50]} target={[0, 0, 0]} scale={50} />
                    <Lightformer form={"ring"} intensity={50} position={[0, 0, 50]} color={"#e95100"} target={[0, 0, 0]} scale={20} />

                </Environment>






            </>
        )
        }

    </ViewportScrollScene >

}

