import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei'

/**
 * Subtle WebGL hero: a slowly rotating, gently distorting wireframe
 * icosahedron in cyan. Deliberately understated — depth, not spectacle.
 */
function Knot() {
  const ref = useRef()
  const mat = useRef()

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.08
      ref.current.rotation.y += delta * 0.12
      // gentle mouse parallax
      const { x, y } = state.pointer
      ref.current.rotation.x += (y * 0.15 - ref.current.rotation.x * 0) * 0
      ref.current.position.x += (x * 0.4 - ref.current.position.x) * 0.04
      ref.current.position.y += (y * 0.25 - ref.current.position.y) * 0.04
    }
  })

  return (
    <group>
      {/* Solid dark core */}
      <Icosahedron args={[1.55, 6]}>
        <MeshDistortMaterial
          ref={mat}
          color="#0c1417"
          emissive="#0a1a1f"
          roughness={0.55}
          metalness={0.2}
          distort={0.32}
          speed={1.1}
        />
      </Icosahedron>
      {/* Cyan wireframe shell */}
      <Icosahedron ref={ref} args={[1.62, 2]}>
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.28} />
      </Icosahedron>
    </group>
  )
}

const HeroCanvas = () => (
  <Canvas
    dpr={[1, 1.75]}
    camera={{ position: [0, 0, 4.4], fov: 45 }}
    gl={{ antialias: true, alpha: true }}
    style={{ pointerEvents: 'none' }}
  >
    <ambientLight intensity={0.6} />
    <pointLight position={[4, 4, 4]} intensity={18} color="#22d3ee" />
    <pointLight position={[-4, -2, 2]} intensity={10} color="#a78bfa" />
    <Suspense fallback={null}>
      <Knot />
    </Suspense>
  </Canvas>
)

export default HeroCanvas
