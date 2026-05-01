import mindLAMPImg from '/mindLAMP.png';

export default function Experience(props) {
  switch (props.page) {

    case 1:
      return (
        <section id="work">
          <h2>Work Experience - CiCAidA, Drive Assist</h2>

          <span className="work-main-container">
            <img src={mindLAMPImg} width="25%" />
            <span className="work-text-container">
              <p>
                As part of Stony Brook University's Bioengineering Education, Applications and Research team, I participated in the development of two projects (CiCAidA and Drive
                Assist) as a Full Stack Web Developer. My team has recently been working on building our own deployment of the mindLAMP platform, which includes patching many
                backend issues that are on the official commits of the repository and adding custom activities.
              </p>
            </span>
          </span>
        </section>
      )

    case 2:
      return (
        <section id="work">
          <h2>Work Experience - 9/11 Memorial & Museum</h2>

          <span className="work-main-container">

            <span className="work-text-container">
              <p>
                As a Photo Archive Intern, I worked with an archive of over 40,000 photos, marking several thousand with tags and constructing themed collections. My internship
                culminated with a capstone project in which I presented my work and created a photo essay, telling a story using only pictures and a brief description.
              </p>
            </span>
          </span>

        </section >
      )
  }
}