import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Layout from 'components/layout'
import Box from 'components/box'
import Roll from 'components/roll'

export default function BoxPage() {
  return (
    <Layout title={'Three'}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
      </Canvas>
      <Roll page={'sphere'} />
    </Layout>
  )
}
