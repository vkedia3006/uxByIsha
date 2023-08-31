import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Safepedia from "./skills/Safepedia";
import Muide from "./skills/Muide";
import HomeDepot from "./skills/HomeDepot";
import ScrollToTop from "./ScrollToTop";

export default class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <ScrollToTop />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/opensource"
              render={(props) => (
                <Opensource {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/safepedia"
              render={(props) => (
                <Safepedia {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/muide"
              render={(props) => <Muide {...props} theme={this.props.theme} />}
            />
            <Route
              path="/homedepot"
              render={(props) => (
                <HomeDepot {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
          {/* </ScrollToTop> */}
        </HashRouter>
      </div>
    );
  }
}
