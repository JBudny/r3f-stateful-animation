import { Canvas } from '@react-three/fiber'
import StatefullBox from './StatefullBox'
import StatelessBox from './StatelessBox'
import StatefullBoxWithZustand from './StatefullBoxWithZustand'

const App = () =>
  <Canvas>
    <ambientLight intensity={1} />
    <directionalLight intensity={1} />
    <StatefullBox />
    <StatelessBox />
    <StatefullBoxWithZustand />
  </Canvas>

export default App
