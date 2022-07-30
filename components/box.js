export default function Box() {
    return (
        <mesh rotation={[90, 0, 30]}>
            <boxBufferGeometry attach={'geometry'} args={[2, 2, 2]} />
            <meshNormalMaterial attach={'material'} />
        </mesh>
    )
}
