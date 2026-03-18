import { Canvas } from '@react-three/fiber'
import { useTexture, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import Sphere from './sphere'

import galaxyBg from '../assets/galaxy.jpg'

function Background() {
	const t = useTexture(galaxyBg);
	const spaceTexture = t.clone();

	spaceTexture.colorSpace = THREE.SRGBColorSpace;

	return <primitive attach="background" object={spaceTexture} />
}

export default function Scene() {

	return (
		<div id='bg'>
			<Canvas>
				<Background />
				<ambientLight intensity={1} />
				<Sphere pos={[9, 0, -5]} size={[2.5, 32, 32]} />
				<OrbitControls />
			</Canvas>
		</div>
	)
}