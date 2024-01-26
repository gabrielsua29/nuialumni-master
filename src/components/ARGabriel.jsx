import { Canvas} from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Dashboard from './Dashboard'

function ARGabriel() {
   return (
    <Dashboard />
   )
}

function Scene() {
    const gltf = useLoader(GLTFLoader, '/Poimandres.gltf')
    return <primitive object={gltf.scene} position={[0,0,-5]}/>
   }

export default ARGabriel;