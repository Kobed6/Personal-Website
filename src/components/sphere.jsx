import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

import galaxyTexture from '../assets/galaxyTexture.jpg'

export default function Sphere({ pos, size }) {
	const [scrollY, setScrollY] = useState(window.scrollY)
	const texture = useTexture(galaxyTexture)
	const ref = useRef();

	function trackScroll() {
		setScrollY(window.scrollY);
	};

	window.addEventListener("scroll", trackScroll);

	useFrame((state, delta) => {
		ref.current.rotation.x += delta;
		ref.current.rotation.y += delta;
		ref.current.position.y = scrollY * 0.02;
	})

	return (
		<mesh position={pos} ref={ref}>
			<sphereGeometry args={size} />
			<meshStandardMaterial map={texture} />
		</mesh>
	)
}