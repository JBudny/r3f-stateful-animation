import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const StatelessBox = () => {
  const ref = useRef()
  useFrame(({ clock }) => {
    const rotation = Math.sin(clock.getElapsedTime())
    ref.current.rotation.set(rotation, rotation, rotation)
  })

  console.log('Rendering stateless Box')

  return (
    <mesh ref={ref} position={[0, -1, 0]}>
      <boxBufferGeometry />
      <meshStandardMaterial color={'darkcyan'} />
    </mesh>
  )
}

export default StatelessBox
