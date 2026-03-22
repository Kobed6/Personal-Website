import pythonImg from '/python.png';
import jsImg from '/javascript.svg';
import CImg from '/C.png';
import reactImg from '/react.png';
import nodejsImg from '/Nodejs.png';
import mongodbImg from '/MongoDB.png';
import ueImg from '/ue.png';
import blenderImg from '/Blender.png';

export default function Technologies() {
  return (
    <section id="technologies">
      <h2>Technologies</h2>
      <div id="tech-main-div">
        <section className="tech-subsection">
          <div className="tech-subdiv">
            <h3>Python</h3>
            <img src={pythonImg} width="40px" height="auto" />
          </div>
          <div className="tech-subdiv">
            <h3>Javascript</h3>
            <img src={jsImg} width="40px" height="auto" />
          </div>
          <div className="tech-subdiv">
            <h3>C</h3>
            <img src={CImg} width="40px" height="auto" />
          </div>
        </section>
        <section className="tech-subsection">
          <div className="tech-subdiv">
            <h3>React</h3>
            <img src={reactImg} width="45px" height="auto" />
          </div>
          <div className="tech-subdiv">
            <h3>Node.js</h3>
            <img src={nodejsImg} width="40px" height="auto" />
          </div>
          <div className="tech-subdiv">
            <h3>MongoDB</h3>
            <img src={mongodbImg} width="40px" height="auto" />
          </div>
        </section>
        <section className="tech-subsection">
          <div className="tech-subdiv">
            <h3></h3>
          </div>
          <div className="tech-subdiv">
            <h3>Unreal Engine</h3>
            <img src={ueImg} width="40px" height="auto" />
          </div>
          <div className="tech-subdiv">
            <h3>Blender</h3>
            <img src={blenderImg} width="45px" height="auto" />
          </div>
          <div className="tech-subdiv">
            <h3></h3>
          </div>
        </section>
      </div>
    </section>
  )
}