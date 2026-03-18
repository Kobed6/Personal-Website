import './App.css'
import Scene from './components/scene'
import pythonImg from './assets/python.png'
import jsImg from './assets/javascript.svg'
import CImg from './assets/C.png'
import reactImg from './assets/react.png'
import nodejsImg from './assets/Nodejs.png'
import mongodbImg from './assets/MongoDB.png'
import ueImg from './assets/ue.png'
import blenderImg from './assets/Blender.png'
import mindLAMPImg from './assets/mindLAMP.png'
import vraImg from './assets/VRA.png'
import mushroomImg from './assets/mushroom.png'
import btImg from './assets/behaviorTree.png'
import githubImg from './assets/github.png'
import linkedInImg from './assets/LinkedIn.png'

function App() {

  return (
    <>
      <Scene />
      <main id="about" className="left">
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work Experience</a>
          <a href="#projects">Projects</a>
          <a href="#links">Links</a>
        </nav>
        <header>
          <h1>Kobe Du</h1>
          <h3>Senior computer science student at Stony Brook University, with interests in software engineering, data analysis, and game development. I enjoy learning
            new technologies, motivating my studies in computer science.
          </h3>
        </header>
        <section id="technologies" className="right small center-content">
          <h2>Technologies</h2>
          <div id="tech-main-div">
            <section className="subsection">
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
            <section className="subsection">
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
            <section className="subsection">
              <div className="tech-subdiv">
                <h3>Unreal Engine</h3>
                <img src={ueImg} width="40px" height="auto" />
              </div>
              <div className="tech-subdiv">
                <h3>Blender</h3>
                <img src={blenderImg} width="45px" height="auto" />
              </div>
            </section>
          </div>
        </section>

        <section id="work" className="left">
          <h2>Work Experience</h2>

          <h3>CiCAidA, Drive Assist</h3>
          <p>
            As part of Stony Brook University's VIP Team "BEAR", I participated in the development of two projects (CiCAidA and Drive Assist) as a Full Stack Web Developer and
            UI/UX Designer. My team has recently been working on building our own deployment of the mindLAMP platform, which includes patching many backend issues on the official
            commits of the repository and adding custom activities.
          </p>
          <img src={mindLAMPImg} width="70%" />
          <h3>9/11 Memorial & Museum</h3>
          <p>
            As a Photo Archive Intern, I worked with an archive of over 40,000 photos, marking several thousand with tags and constructing themed collections. My internship
            culminated with a capstone project in which I presented my work and created a photo essay, telling a story using only pictures and a brief description.
          </p>
        </section>

        <section id="projects" className="right">
          <h2>Projects</h2>

          <h3>Voting Rights Act Repeal Analysis</h3>
          <p>
            A web application analyzing the potential effects of repealing the Voting Rights Act on minority groups in the United States through graphical visualizations of
            historical electoral and demographic data.
          </p>
          <img src={vraImg} width="70%" />

          <h3>Vuck</h3>
          <p>
            An action game project created using Unreal Engine, done as a team of two. My main role in the project was creating and animating 3D sc, including map props, enemy
            design, and enemy attacks, as well as implementing AI behavior trees.
          </p>
          <img src={mushroomImg} width="30%" />
          <img src={btImg} width="50%" />

          <h3>Phreddit</h3>
          <p>
            A web application that mimics the functionalities and look of Reddit, complete with a MongoDB database to store posts, comments, communities, and users.
          </p>
        </section>

        <section id="links" className="left">
          <h2>Links</h2>

          <a href="https://github.com/Kobed6" target="_blank">
            <div className="links-subcontainer">
              Github
              <img src={githubImg} width="35px" height="auto" />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/kobe-du-004b2b2a6/" target="_blank">
            <div className="links-subcontainer">
              LinkedIn
              <img src={linkedInImg} width="35px" height="auto" />
            </div>
          </a>
        </section>

      </main>
    </>
  )
}

export default App
