import { useFrame } from '@react-three/fiber'
import { useState } from 'react'

const StatefullBox = () => {
  const [rotation, setRotation] = useState(0)
  useFrame(({ clock }) => setRotation(() => Math.sin(clock.getElapsedTime())))

  console.log('Rendering statefull Box')

  return (
    <mesh position={[0, 1, 0]} rotation={[rotation, rotation, rotation]}>
      <boxBufferGeometry />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

export default StatefullBox
