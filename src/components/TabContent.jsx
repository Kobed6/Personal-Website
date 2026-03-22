import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Links from "./Links";

export default function TabContent(props) {

  switch (props.tab) {
    case 'About':
      return (
        <About page={props.page} />
      )

    case 'Experience':
      return (
        <Experience page={props.page} />
      )

    case 'Projects':
      return (
        <Projects page={props.page} />
      )

    case 'Links':
      return (
        <Links />
      )

    default:
      return (
        <div>
          Error: Page not found
        </div>
      )
  }
}