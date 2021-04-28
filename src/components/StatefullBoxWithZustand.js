import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import useStore from '../zustand/store'

const StatefullBoxWithZustand = () => {
  const boxRef = useRef()
  const rotationRef = useRef(useStore.getState().rotation)
  const setRotation = useStore(state => state.setRotation)

  useEffect(() => useStore.subscribe(
    rotation => rotationRef.current = rotation,
    state => state.rotation
  ))

  useFrame(({ clock }) => {
    const { current: rotation } = rotationRef
    boxRef.current.rotation.set(rotation, rotation, rotation)
    setRotation(Math.sin(clock.getElapsedTime()))
  })

  console.log('Rendering statefull Box with Zustand')

  return (
    <mesh ref={boxRef} position={[0, -3, 0]} rotation={[rotationRef.current, rotationRef.current, rotationRef.current]}>
      <boxBufferGeometry />
      <meshStandardMaterial color={'burlywood'} />
    </mesh>
  )
}

export default StatefullBoxWithZustand
