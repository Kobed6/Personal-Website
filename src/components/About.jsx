import Technologies from "./Technologies";

export default function About(props) {
  switch (props.page) {

    case 1:
      return (
        <header>
          <h1>Kobe Du</h1>
          <h3>Senior computer science student at Stony Brook University, with interests in software engineering, data analysis, and game development. I enjoy learning
            new technologies, motivating my studies in computer science.
          </h3>
        </header>
      )

    case 2:
      return (
        <Technologies />
      )

    default:
      return (
        <div>
          Error: Page not found
        </div>
      )
  }

}