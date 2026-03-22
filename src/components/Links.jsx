import githubImg from '/github.png'
import linkedInImg from '/LinkedIn.png'

export default function Links() {
  return (
    <section id="links">
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
  )
}