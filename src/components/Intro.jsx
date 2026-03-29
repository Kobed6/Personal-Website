import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Intro(props) {
  const { scene, animations, cameras } = useGLTF("/Personal-Website/pathfinderSwinging.glb");
  const mixer = useRef();
  const { camera } = useThree();

  function handleFinished() {
    props.setIntroFinished(true);
  }

  useEffect(() => {
    if (!animations.length) return;

    mixer.current = new THREE.AnimationMixer(scene);

    const cameraAnim = mixer.current.clipAction(animations[0]);
    cameraAnim.clampWhenFinished = true;
    cameraAnim.loop = THREE.LoopOnce;
    cameraAnim.play();

    const swingAnim = mixer.current.clipAction(animations[1]);
    swingAnim.clampWhenFinished = true;
    swingAnim.loop = THREE.LoopOnce;
    swingAnim.play();

    mixer.current.addEventListener('finished', handleFinished);

  }, [props.reset]);

  useFrame((state, delta) => {
    if (!props.startClicked) {
      mixer.current?.update(delta)
      camera.position.copy(cameras[0].position);
      camera.rotation.copy(cameras[0].rotation);
    }
  });

  return (
    <primitive object={scene} />
  );
}