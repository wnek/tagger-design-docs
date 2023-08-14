import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'

export default function Modular() {
    const el = useRef()

    return (
        <>
            <div ref={el} className="modular-scene"></div>
            <UseCanvas>
                <ScrollScene track={el}>{(props) => <SpinningBoxWebGL {...props} />}</ScrollScene>
            </UseCanvas>
        </>

    )
}

function SpinningBoxWebGL({ scale, scrollState }) {
    const mesh = useRef()
    useFrame(() => {
        mesh.current.rotation.y = scrollState.progress * Math.PI * 2
    })

    console.log(mesh)
    return (
        <group scale={[1, 1, 1]} position={[0, 0, 0]} >
            <mesh ref={mesh}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </group >
    )
}
