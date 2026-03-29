import './App.css';
import { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Intro from './components/Intro';
import Content from './components/Content';

function Background() {
  return <color attach="background" args={['black']} />;
}

function ZoomCamera(props) {

  useFrame((state, delta) => {
    if (props.doneZooming) return;

    const camera = state.camera;

    if (camera.position.z > 35) {
      camera.position.x -= 0.003;
      camera.position.z -= 0.05;
      camera.rotation.y -= 0.0005;
    }
    else { props.setDoneZooming(true); }

  });

}

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [startClicked, setStartClicked] = useState(false);
  const [doneZooming, setDoneZooming] = useState(false);
  const [reset, setReset] = useState(false);

  return (
    <>
      <Canvas id="bg">
        <Background />
        <ambientLight intensity={2} />
        <Suspense>
          <Intro setIntroFinished={setIntroFinished} startClicked={startClicked} reset={reset} />
        </Suspense>
        {startClicked && <ZoomCamera doneZooming={doneZooming} setDoneZooming={setDoneZooming} />}
      </Canvas>
      <main>
        {introFinished && <Content setIntroFinished={setIntroFinished} startClicked={startClicked} setStartClicked={setStartClicked} doneZooming={doneZooming} setDoneZooming={setDoneZooming} setReset={setReset} />}
      </main>
    </>
  );
}
