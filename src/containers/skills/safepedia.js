import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./Safepedia.css";
import { Fade } from "react-reveal";
import PersonaImg from "./UXPersona.png";
import PersonaImg1 from "./UXPersona-1.png";

class Safepedia extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="safepedia-main">
        <Header theme={theme} />
        <div>
          <div className="safepedia-main-div">
            <div className="safepedia-text-div">
              <div>
                <Fade right duration={1000}>
                  <h1 style={{ color: theme.text }}>Overview</h1>
                </Fade>
                <Fade left duration={2000}>
                  <p
                    className="subTitle safepedia-text"
                    style={{ color: theme.secondaryText }}
                  >
                    In this project, I aimed to address the overwhelming and
                    confusing experience many of us encounter when trying to
                    choose the right products from a multitude of options. I
                    recognized the need to empower users by providing them with
                    the necessary information to make informed decisions about
                    the products they use. This application simplifies the
                    product selection process, enabling users to prioritize
                    their personal health, well-being, and preferences.{" "}
                  </p>
                </Fade>
              </div>
              <div>
                <Fade right duration={1000}>
                  <h4
                    className="safepedia-small-heading"
                    style={{ color: theme.text }}
                  >
                    Timeline
                  </h4>
                </Fade>
                <Fade left duration={2000}>
                  <p
                    className="subTitle safepedia-text"
                    style={{ color: theme.secondaryText, marginTop: -20 }}
                  >
                    May 2023 – July 2023
                  </p>
                </Fade>
              </div>
              <div>
                <Fade right duration={1000}>
                  <h4
                    className="safepedia-small-heading"
                    style={{ color: theme.text }}
                  >
                    Role
                  </h4>
                </Fade>
                <Fade left duration={2000}>
                  <p
                    className="subTitle safepedia-text"
                    style={{ color: theme.secondaryText, marginTop: -20 }}
                  >
                    UX Designer and UX Researcher
                  </p>
                </Fade>
              </div>
              <div>
                <Fade right duration={1000}>
                  <h4
                    className="safepedia-small-heading"
                    style={{ color: theme.text }}
                  >
                    Tools
                  </h4>
                </Fade>
                <Fade left duration={2000}>
                  <p
                    className="subTitle safepedia-text"
                    style={{ color: theme.secondaryText, marginTop: -20 }}
                  >
                    Figma | Miro
                  </p>
                </Fade>
              </div>
              <div>
                <Fade right duration={1000}>
                  <h1 style={{ color: theme.text }}>Problem Statement</h1>
                </Fade>
                <Fade left duration={2000}>
                  <p
                    className="subTitle safepedia-text"
                    style={{ color: theme.secondaryText }}
                  >
                    In today's market, users are presented with an overwhelming
                    number of options for similar products across various
                    categories. Unfortunately, some of these products contain
                    harmful or hazardous chemicals, posing potential risks to
                    users' health and well-being. It is crucial to raise
                    awareness and empower users to make informed decisions about
                    the products they use. Therefore, our goal was to design an
                    app that enables users to easily access comprehensive
                    product information, including ingredient analysis, and make
                    educated choices that prioritize their health and safety.
                  </p>
                </Fade>
              </div>
              <div>
                <Fade right duration={1000}>
                  <h4
                    className="safepedia-small-heading"
                    style={{ color: theme.text }}
                  >
                    Process
                  </h4>
                </Fade>
                <Fade right duration={1000}>
                  <h1 style={{ color: theme.text }}>
                    User Research and Discovery
                  </h1>
                </Fade>
                <Fade left duration={2000}>
                  <p
                    className="subTitle safepedia-text"
                    style={{ color: theme.secondaryText }}
                  >
                    I kicked off the project with user research to gain deep
                    insights into the challenges users face when selecting
                    products. Through in-depth interviews, surveys, and
                    competitive analysis, several key pain points and insights
                    were discovered that guided our design decisions. Insights
                    from initial user research revealed that users often felt
                    overwhelmed and confused by the multitude of product options
                    available in the market. They expressed frustration with the
                    lack of easily accessible and reliable information about
                    product ingredients, potential health impacts, and
                    conflicting claims made by different brands.
                  </p>
                </Fade>
                <Fade right duration={1000}>
                  <h4
                    className="safepedia-small-heading"
                    style={{ color: theme.text }}
                  >
                    Pain Points
                  </h4>
                  <ol style={{ color: theme.secondaryText }}>
                    <li>
                      <b>Health and Nutrition Confusion:</b> Determining the
                      nutritional value and healthiness of a product solely
                      based on marketing claims or front-of-package labels can
                      be misleading.{" "}
                    </li>
                    <li>
                      <b>Time-Consuming Research:</b> Users would need to
                      conduct time-consuming research to gather information
                      about the ingredients used in various products.
                    </li>
                    <li>
                      <b>Unfamiliar Ingredients:</b> Products often contain
                      unfamiliar ingredients that users may not understand.
                    </li>
                  </ol>
                </Fade>
                <Fade right duration={1000}>
                  <h1 style={{ color: theme.text }}>
                    Ideation and Concept Development
                  </h1>
                </Fade>
                <Fade left duration={2000}>
                  <p
                    className="subTitle safepedia-text"
                    style={{ color: theme.secondaryText }}
                  >
                    In the ideation phase of this project, I focused on
                    translating user insights into tangible design solutions.
                    This section highlights the key steps I took to develop the
                    final design.
                  </p>
                </Fade>
                <Fade right duration={1000}>
                  <h4
                    className="safepedia-small-heading"
                    style={{ color: theme.text }}
                  >
                    User Personas
                  </h4>
                </Fade>
                <Fade left duration={2000}>
                  <p
                    className="subTitle safepedia-text"
                    style={{ color: theme.secondaryText, marginTop: -20 }}
                  >
                    To ensure a user-centered approach, I conducted extensive
                    research and developed detailed user personas. These
                    personas helped me understand the target audience and their
                    unique needs. By empathizing with the users, I was able to
                    create a design that would resonate with them.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="safepedia-column-div">
            <Fade left duration={2000}>
              <div
                className="safepedia-image-div"
                style={{ paddingRight: "10px" }}
              >
                <img src={PersonaImg} />;
              </div>
            </Fade>
            <Fade left duration={2000}>
              <div
                className="safepedia-image-div"
                style={{ paddingLeft: "10px" }}
              >
                <img src={PersonaImg1} />;
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Safepedia;
