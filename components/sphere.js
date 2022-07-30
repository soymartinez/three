import { Sphere as AnimationSphere, MeshDistortMaterial } from '@react-three/drei'

export default function Sphere() {
    return (
        <AnimationSphere visible args={[1, 100, 200]} scale={1.3}>
            <MeshDistortMaterial
                color={'#a78bfa'}
                attach={'material'}
                distortion={1}
                speed={1.5}
                roughness={0.4}
            />
        </AnimationSphere>
    )
}
