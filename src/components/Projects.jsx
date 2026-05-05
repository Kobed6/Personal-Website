import vraImg from '/VRA.png';
import vraGinglesImg from '/VRAGingles.png'
import mushroomImg from '/mushroom.png'
import btImg from '/behaviorTree.png'
import phredditImg from '/phreddit.png'
import phredditPostImg from '/phredditPost.png'

export default function Projects(props) {
  switch (props.page) {

    case 1:
      return (
        <section id="projects">
          <h2>Projects - Voting Rights Act Repeal Analysis</h2>

          <span className="projects-main-container">
            <span className="projects-images-container">
              <img src={vraImg} width="40%" />
              <img src={vraGinglesImg} width="40%" />
            </span>
            <span className="projects-text-container">
              <p>
                A web application analyzing the potential effects of repealing the Voting Rights Act on minority groups in the United States through graphical visualizations of
                demographic, historical electoral data, and simulated district ensembles.
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
                An action game project created using Unreal Engine, designed and developed as a team of two. I mainly created and animated 3D assets, including map props,
                enemy design, and enemy attacks, as well as implemented AI behavior trees.
              </p>
            </span>
          </span>
        </section>
      )

    case 3:
      return (
        <section id="projects">
          <h2>Projects - Phreddit</h2>
          <span className="projects-main-container">
            <span className="projects-images-container">
              <img src={phredditImg} width="40%" />
              <img src={phredditPostImg} width="40%" />
            </span>
            <span className="projects-text-container">
              <p>
                A Reddit-style web application with users, posts, comments, voting, and communities stored using MongoDB.
              </p>
            </span>
          </span>
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