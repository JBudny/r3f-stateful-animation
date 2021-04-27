import { Canvas } from '@react-three/fiber'
import StatefullBox from './StatefullBox'
import StatelessBox from './StatelessBox'

const App = () =>
  <Canvas>
    <ambientLight intensity={1} />
    <directionalLight intensity={1} />
    <StatefullBox />
    <StatelessBox />
  </Canvas>

export default App
