import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./Muide.css";
import { Fade } from "react-reveal";
import brainstorming from "./brainstorming.png";
import MuideIntroImage from "./MuideIntroImage.png";
import Carousel from "react-elastic-carousel";
import Item from "./item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Muide(props) {
  const theme = props.theme;
  return (
    <div className="muide-main">
      <Header theme={theme} />
      <div className="muide-main-div">
        <Fade bottom>
          <img style={{ width: "100%" }} src={MuideIntroImage} />
        </Fade>
        <div className="muide-text-div">
          <Fade bottom>
            <div className="muide-group-div">
              <h1 style={{ color: theme.text }}>Introduction</h1>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText }}
              >
                As a UX Professional, I had the exciting opportunity to work on
                a startup project that aimed to connect prospective
                international students with current/alumni students from their
                prospective universities. The goal was to provide valuable
                insights, guidance, and support to students during their
                university selection process. Throughout this project, I
                followed a user-centered approach to ensure the platform's
                design aligns with the needs and expectations of both the
                founders and the target users.{" "}
              </p>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                Timeline
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                May 2023 – July 2023
              </p>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                Role
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                UX Designer and UX Researcher
              </p>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                Tools
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                Figma | Miro
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="muide-group-div">
              <h1 style={{ color: theme.text }}>Understanding the Project</h1>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText }}
              >
                To kickstart the project, I conducted an in-depth discussion
                with the founders to understand their vision and objectives.
                Here are some example questions I asked:
                <ul>
                  <li>What inspired you to create this startup?</li>
                  <li>How did you identify the need for such a platform?</li>
                  <li>
                    What are the primary goals you want to achieve with this
                    platform?
                  </li>
                  <li>
                    How do you envision the platform impacting prospective
                    international students?
                  </li>
                </ul>
              </p>
              <div className="muide-column-div">
                <div style={{ paddingRight: 25 }}>
                  <h4
                    className="muide-small-heading"
                    style={{ color: theme.text }}
                  >
                    Empathy Building Session
                  </h4>
                  <p
                    className="subTitle muide-text"
                    style={{ color: theme.secondaryText, marginTop: -20 }}
                  >
                    Next, I organized a meeting with the project team, which
                    included the founder, product manager, and software
                    developer. In this session, I aimed to build empathy for the
                    prospective users by having each team member put themselves
                    in the users' shoes. We explored various aspects, such as:
                    <ul>
                      <li>
                        Challenges faced by students while shortlisting
                        universities.
                      </li>
                      <li>
                        Factors they consider during their university search.
                      </li>
                      <li>
                        The type of experiences they seek during the
                        decision-making process.
                      </li>
                    </ul>
                  </p>
                  <h4
                    className="muide-small-heading"
                    style={{ color: theme.text }}
                  >
                    Brainstorming and HMW Questions
                  </h4>
                  <p
                    className="subTitle muide-text"
                    style={{ color: theme.secondaryText, marginTop: -20 }}
                  >
                    Following the empathy building exercise, I facilitated a
                    brainstorming session to gather ideas from the team as
                    potential users. We discussed what features they would like
                    to see in the platform. Using the "How Might We" (HMW)
                    framework, we formulated questions to refine and focus our
                    design direction.
                    <center>
                      <strong>
                        <ul style={{ listStyleType: "none" }}>
                          <li style={{ marginBottom: 5 }}>
                            HMW make it easier for students to connect with
                            mentors from their desired universities?
                          </li>
                          <li>
                            HMW provide personalized recommendations based on a
                            student's preferences?
                          </li>
                        </ul>
                      </strong>
                    </center>
                  </p>
                </div>
                <div
                  className="muide-image-div"
                  style={{ paddingLeft: "10px", marginBlockStart: "1.33em" }}
                >
                  <img src={brainstorming} />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="muide-group-div">
              <h1 style={{ color: theme.text }}>User Research</h1>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                User Survey
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                To validate our assumptions and better understand user
                preferences, I conducted a survey among prospective
                international students. The survey aimed to identify desired
                features, gauge interest in using such a platform, and collect
                feedback for improvement. You can find the survey forms here:
                <ul>
                  <li>
                    Mentor Survey: Among the 85 participants, 64 individuals
                    expressed their willingness to contribute their experiences
                    to assist upcoming students.
                  </li>
                  <li>
                    Mentee Survey: Out of the 85 participants, 70 individuals
                    indicated that they perceive this platform as valuable for
                    acquiring insights about their potential university.
                  </li>
                </ul>
              </p>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                Competitive Analysis
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                To gain insights into the current market and user expectations,
                I conducted a competitive analysis. This involved analyzing
                similar platforms, understanding their strengths and weaknesses,
                and identifying opportunities for differentiation.
              </p>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                Journey Map
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                I created a journey map to outline the steps and emotions users
                might experience while using the platform.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="muide-group-div">
              <h1 style={{ color: theme.text }}>Ideation</h1>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                Crazy 8's Exercise:
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                To gain insights into the current market and user expectations,
                I conducted a competitive analysis. This involved analyzing
                similar platforms, understanding their strengths and weaknesses,
                and identifying opportunities for differentiation.
              </p>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                High-Fidelity Mockups and Prototype
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                Based on the selected UI ideas, I proceeded to create
                high-fidelity mockups. These detailed visual representations
                allowed the team to visualize the platform's look and feel,
                enabling constructive feedback and refinement.
              </p>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                To provide an interactive experience and demonstrate the
                platform's flow, I developed a high-fidelity prototype. The
                prototype allowed stakeholders to navigate through the platform
                and experience key interactions, facilitating a deeper
                understanding of the user journey.
              </p>
              <center>
                <iframe
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  width="1000"
                  height="650"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeKAhMrkSQoJs4EeL0gcoPQ%2FMuide%3Ftype%3Ddesign%26node-id%3D2-2%26t%3DYuxV7JiBcjoJ4fxc-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A2%26mode%3Ddesign"
                  allowfullscreen
                ></iframe>
              </center>
            </div>
          </Fade>
          <Fade bottom>
            <div className="muide-group-div">
              <h1 style={{ color: theme.text }}>Challenge</h1>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                Switching from App to Website platform
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                During the course of the project, after designing the
                high-fidelity prototype and being on the verge of handing it
                over to the IT team for app development, we received crucial
                feedback from investors that would significantly impact the
                platform's accessibility. The feedback highlighted that the
                platform would be better served as a website instead of an app
                as it will have cross-platform compatibility and is
                cost-effective. This posed a considerable challenge for the
                entire team.
              </p>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -10 }}
              >
                The decision to switch to a website came with its share of
                challenges. After investing significant time and effort in
                designing the app and creating the high-fidelity prototype, I
                had to face the reality of starting from scratch. This required
                redesigning the entire user interface and user experience to
                adapt it for the website platform.
              </p>
              <h4 className="muide-small-heading" style={{ color: theme.text }}>
                Redesigning the Experience
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -20 }}
              >
                One of the critical challenges was to ensure that the website
                experience matched the intuitive and user-friendly interactions
                envisioned for the app. I had to carefully restructure the
                navigation, layout, and interactions to optimize the experience
                for larger screens and mouse/trackpad input.
              </p>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginTop: -10 }}
              >
                As a UX Professional, I had to emphasize adaptability and
                resilience to accommodate this change. I saw this challenge as
                an opportunity to revisit and refine the design, ensuring that
                the website platform would deliver a seamless and engaging
                experience for users.
              </p>
            </div>
          </Fade>
          <div className="muide-group-div">
            <Carousel breakPoints={breakPoints}>
              <Item>One</Item>
              <Item>Two</Item>
              <Item>Three</Item>
              <Item>Four</Item>
              <Item>Five</Item>
              <Item>Six</Item>
              <Item>Seven</Item>
              <Item>Eight</Item>
            </Carousel>
          </div>
        </div>
        {/* <div className="muide-column-div">
            <Fade bottom left duration={2000}>
              <div className="muide-image-div" style={{ paddingRight: "10px" }}>
                <img src={PersonaImg} />;
              </div>
            </Fade>
            <Fade bottom left duration={2000}>
              <div className="muide-image-div" style={{ paddingLeft: "10px" }}>
                <img src={PersonaImg1} />;
              </div>
            </Fade>
          </div> */}
      </div>
    </div>
  );
}

export default Muide;
