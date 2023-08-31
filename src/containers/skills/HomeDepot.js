import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./HomeDepot.css";
import { Fade } from "react-reveal";
import brainstorming from "./brainstorming.png";
import MuideIntroImage from "./MuideIntroImage.png";
import UXProcessHD from "./UXProcessHD.png";
import EmpathyHD from "./EmpathyHD.png";
import EmpathyInnerImg from "./EmpathyInnerImg.png";
import DefineHD from "./DefineImage.png";
import CurrentComp from "./CurrentComp.png";
import IdeateHD from "./ideate.png";
import Crazy4sImg from "./Crazy4s.png";
import ScenarioMappingImg from "./ScenarioMapping.png";
import SketchReview from "./SketchReview.png";
import DesignHD from "./Design.png";
import UIDesignReviewImg from "./UIDesignReview.png";
import TestHD from "./Test.png";
import PrototypeReviewImg from "./PrototypeReview.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const Box = (props) => {
  return (
    <div className="box">
      <div className="rectangle">
        <div className="frame">
          <div className="text-wrapper">{props.text}</div>
          <img className="group" alt="Group" src={props.img} />
        </div>
      </div>
    </div>
  );
};

function HomeDepot(props) {
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
              <h1 style={{ color: theme.text }}>Overview</h1>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText, marginBottom: "-15px" }}
              >
                During my contract at the Home Depot Canada, I worked on a
                project aimed to enhance the promotion experience on the Home
                Depot App, addressing the challenge of a non-intuitive promotion
                experience during checkout. With a goal to streamline the
                process from the user's first interaction, we ensured products
                could be seamlessly added.
              </p>
              <div className="muide-small-texts">
                <h4
                  className="muide-small-heading"
                  style={{ color: theme.text }}
                >
                  Timeline:&nbsp;
                </h4>
                <p
                  className="subTitle muide-text"
                  style={{ color: theme.secondaryText, marginTop: -20 }}
                >
                  September 2022 – December 2022
                </p>
              </div>
              <div className="muide-small-texts">
                <h4
                  className="muide-small-heading"
                  style={{ color: theme.text }}
                >
                  Role:&nbsp;
                </h4>
                <p
                  className="subTitle muide-text"
                  style={{ color: theme.secondaryText, marginTop: -20 }}
                >
                  UX Design Strategist
                </p>
              </div>
              <div
                className="muide-small-texts"
                style={{ margin: "-20px 0px" }}
              >
                <h4
                  className="muide-small-heading"
                  style={{ color: theme.text }}
                >
                  Collaborated with:&nbsp;
                </h4>
                <p
                  className="subTitle muide-text"
                  style={{
                    color: theme.secondaryText,
                    marginTop: -20,
                    display: "display-block",
                  }}
                >
                  UX Designer, UX Researcher, Business Analyst, Product Manager
                </p>
              </div>
              <div className="muide-small-texts">
                <h4
                  className="muide-small-heading"
                  style={{ color: theme.text }}
                >
                  Tools:&nbsp;
                </h4>
                <p
                  className="subTitle muide-text"
                  style={{ color: theme.secondaryText, marginTop: -20 }}
                >
                  Figma | Miro
                </p>
              </div>
            </div>
            <div className="muide-group-div">
              <h1 style={{ color: theme.text }}>UX Process</h1>
              <img className="home-depot-img" alt="Image" src={UXProcessHD} />
            </div>
          </Fade>
        </div>
        <Box text="Empathy" img={EmpathyHD} />
        <div className="muide-text-div">
          <Fade bottom>
            <div className="muide-group-div">
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText }}
              >
                We kicked off by conducting some research to understand the
                changes needed for the new interaction we're proposing for
                promotional experience. We found valuable insights in articles
                from trusted sources like Baymard and NNg.
              </p>
              <img
                alt=""
                src={EmpathyInnerImg}
                style={{
                  margin: "0 auto",
                  display: "block",
                  width: "60%",
                  height: "700px",
                }}
              />
            </div>
          </Fade>
        </div>
        <Box text="Define" img={DefineHD} />
        <div className="muide-text-div">
          <Fade bottom>
            <div className="muide-group-div">
              <h4 className="hd-small-heading">Problem Statement</h4>
              <p
                className="subTitle muide-text"
                style={{
                  color: theme.secondaryText,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                How might we create a seamless experience for our customers who
                want to take advantage of Buy X<br />
                Select Y - Buy X Get/Select Y promotions on The Home Depot
                Mobile App
              </p>
              <h4 className="hd-small-heading">
                Current State and Competitve Analysis
              </h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText }}
              >
                We then analyzed the current user experience on our website to
                identify areas in need of improvement and determine how to
                enhance the overall interaction. Additionally, we carried out
                competitive analysis to gain insights into how our primary and
                secondary competitors approach their promotion experiences.
              </p>
              <img
                alt=""
                src={CurrentComp}
                style={{
                  margin: "0 auto",
                  display: "block",
                  width: "60%",
                  height: "700px",
                }}
              />
            </div>
          </Fade>
        </div>
        <Box text="Ideate" img={IdeateHD} />
        <div className="muide-text-div">
          <Fade bottom>
            <div className="muide-group-div">
              <h4 className="hd-small-heading">Crazy 4’s</h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText }}
              >
                I facilitated a "Crazy 4’s" brainstorming session with
                stakeholders and our larger team. This exercise encouraged
                everyone to think divergently and come up with a variety of
                solutions for the challenge at hand.
              </p>
              <img
                alt=""
                src={Crazy4sImg}
                style={{
                  margin: "0 auto",
                  display: "block",
                  width: "60%",
                  height: "700px",
                }}
              />
              <h4 className="hd-small-heading">Scenario Mapping</h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText }}
              >
                In the next step, I led scenario mapping meetings with the team
                to outline a diverse range of scenarios for this project. Given
                our focus on the product listing page and product information
                page experiences, we also ensured a seamless flow within these
                aspects.
              </p>
              <img
                alt=""
                src={ScenarioMappingImg}
                style={{
                  margin: "0 auto",
                  display: "block",
                  width: "60%",
                  height: "700px",
                }}
              />
              <h4 className="hd-small-heading">Sketch Review</h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText }}
              >
                During the sketch review meeting with stakeholders, we shared
                detailed mockups to understand their preferred design. After the
                presentation, I led a voting session where each member could
                choose their favorite feature. This approach helped us align
                design choices with their preferences and promote a
                collaborative decision-making process that contributed to the
                project's success.
              </p>
              <img
                alt=""
                src={SketchReview}
                style={{
                  margin: "0 auto",
                  display: "block",
                  width: "60%",
                  height: "700px",
                }}
              />
            </div>
          </Fade>
        </div>
        <Box text="Design" img={DesignHD} />
        <div className="muide-text-div">
          <Fade bottom>
            <div className="muide-group-div">
              <h4 className="hd-small-heading">UI Design Review</h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText }}
              >
                After ideating, we scheduled design review and UI review
                meetings to share the final mocks.
              </p>
              <img
                alt=""
                src={UIDesignReviewImg}
                style={{
                  margin: "0 auto",
                  display: "block",
                  width: "60%",
                  height: "700px",
                }}
              />
            </div>
          </Fade>
        </div>
        <Box text="Test" img={TestHD} />
        <div className="muide-text-div">
          <Fade bottom>
            <div className="muide-group-div">
              <h4 className="hd-small-heading">Prototype Review</h4>
              <p
                className="subTitle muide-text"
                style={{ color: theme.secondaryText }}
              >
                After ideating, we scheduled design review and UI review
                meetings to share the final mocks.
              </p>
              <img
                alt=""
                src={PrototypeReviewImg}
                style={{
                  margin: "0 auto",
                  display: "block",
                  width: "60%",
                  height: "700px",
                }}
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default HomeDepot;
