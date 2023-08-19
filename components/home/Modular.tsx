import { useRef } from 'react'

import { Environment, Lightformer } from '@react-three/drei'
import { UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'
import Branding from '/components/3d/Branding'

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

    return (
        <>

            <Environment blur={2}>
                <Lightformer
                    position={[0, 0, 2]}
                    form="rect" // circle | ring | rect (optional, default = rect)
                    intensity={4} // power level (optional = 1)
                    color="white" // (optional = white)
                    scale={[50, 50]} // Scale it any way you prefer (optional = [1, 1])
                    target={[0, 10, 0]} // Target position (optional = undefined)
                />

            </Environment>

            <group scale={scale.xy.min() * 0.5} position={[0, 0, 0]}>
                <Branding scrollState={scrollState} />
            </group >


        </>
    )
}
