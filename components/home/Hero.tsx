import React, { useRef } from 'react'
import Link from 'next/link';

// R3F-Scroll-Rig
import { GlobalCanvas, ScrollScene, ViewportScrollScene, UseCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'

// Three.js
import * as THREE from 'three'

// R3F
import { useFrame } from '@react-three/fiber'
import { Box, PerspectiveCamera, Float } from '@react-three/drei'

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
                {/* <HeroScene el={el} /> */}
            </UseCanvas>
        </>

    )
}

function HeroScene({ el }) {
    const v = new THREE.Vector3()

    const cameraRef = useRef<THREE.Camera>()

    useFrame((state) => {

        v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 })
        // v.unproject(state.camera)
        // state.camera.position.lerp({ x: -state.pointer.x * 2000, y: -state.pointer.y * 10, z: 160 }, 0.1)
        // console.log(state.camera.position)
        // state.camera.lookAt(0, 0, 0)
        // state.camera.updateProjectionMatrix()

        cameraRef.current.position.lerp({ x: -state.pointer.x * 10, y: -state.pointer.y * 5, z: 20 }, 0.05)
        // cameraRef.current.position.x = - state.pointer.x * 2
        // cameraRef.current.position.y = -state.pointer.y * 2
        // cameraRef.current.position.z = 20
        cameraRef.current.lookAt(0, 0, 0)

    })
    return <ViewportScrollScene track={el} hideOffscreen={false}>
        {(props) => (
            <>
                <StageComponent {...props} />

                <PerspectiveCamera fov={70} ref={cameraRef} makeDefault={true} position={[0, 0, 18]} />
            </>
        )}
    </ViewportScrollScene>

}

function StageComponent(props) {

    console.log(props)
    return (
        <>
            <group position={[0, -2, 0]} scale={props.scale.xy.min() * 0.5}>

                <Float floatIntensity={0.2} rotationIntensity={1} speed={2}>
                    <Box args={[1, 1, 1]} position={[2, 0, 0]} castShadow receiveShadow />
                </Float>
                <mesh>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
            </group>

        </>
    )
}

