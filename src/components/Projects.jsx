import vraImg from '/VRA.png';
import mushroomImg from '/mushroom.png'
import btImg from '/behaviorTree.png'

export default function Projects(props) {
  switch (props.page) {

    case 1:
      return (
        <section id="projects">
          <h2>Projects - Voting Rights Act Repeal Analysis</h2>

          <span className="projects-main-container">
            <img src={vraImg} width="40%" />
            <span className="projects-text-container">
              <p>
                A web application analyzing the potential effects of repealing the Voting Rights Act on minority groups in the United States through graphical visualizations of
                demographic, historial electoral data, and simulated district ensembles.
              </p>
            </span>
          </span>
        </section>
      )

    case 2:
      return (
        <section id="projects">
          <h2>Projects - Vuck</h2>
          <span className="projects-main-container">
            <span className="projects-images-container">
              <img src={mushroomImg} width="20%" />
              <img src={btImg} width="30%" />
            </span>
            <span className="projects-text-container">
              <p>
                An action game project created using Unreal Engine, done as a team of two. I mainly created and animated 3D assets, including map props, enemy design, and enemy
                attacks, as well as implemented AI behavior trees.
              </p>
            </span>
          </span>
        </section>
      )

    case 3:
      return (
        <section id="projects">
          <h2>Projects - Phreddit</h2>
          <p>
            A web application that mimics the functionalities and look of Reddit, complete with a MongoDB database to store posts, comments, communities, and users.
          </p>
        </section >
      )

    default:
      return (
        <div>
          Error: Page not found
        </div>
      )
  }
}