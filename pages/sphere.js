import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Layout from 'components/layout'
import Sphere from 'components/sphere'
import Roll from 'components/roll'

export default function SpherePage() {
    return (
        <Layout title={'Sphere'}>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Sphere />
            </Canvas>
            <Roll page={'/'} />
        </Layout>
    )
}
