import React from "react";
import "./App.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ButtonComponent from "./Components/ButtonComponent";
import RowTimelineComponent from "./Components/RowTimelineComponent";
import FontAwesomeEnum from "./Enum/FontAwesomeEnum";
import classNames from "classnames/bind";
import IconComponent from "./Components/IconComponent";

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <section id="main">
          <header>
            <span className="avatar">
              <img src="images/avatar.jpg" alt="" />
            </span>
            <h1>Leonardo Rocha Pinto</h1>
            <p>Developer Front & Backend</p>
          </header>
          <hr />
          <VerticalTimeline>
            <RowTimelineComponent
              icon={
                <IconComponent
                  className={classNames(FontAwesomeEnum.FA_GLOBE, "fa-app")}
                />
              }
              date="2019 - present"
            >
              <div className="card">
                <div className="card-body">
                  <p>JExperts</p>
                  <br></br>
                  <h4 className="vertical-timeline-element-subtitle">
                    Full Stack trainee developer since January 2019, working
                    with react, java, node, javascript, html and css and some
                    APIs
                  </h4>
                </div>
              </div>
            </RowTimelineComponent>
            <RowTimelineComponent
              icon={
                <IconComponent
                  className={classNames(FontAwesomeEnum.FA_FILE_CODE, "fa-app")}
                />
              }
              date="June - 2019"
            >
              <div className="card">
                <div className="card-body">
                  <p>Stock Control Software</p>
                  <br></br>
                  <h4 className="vertical-timeline-element-subtitle">
                    Software developed in Java, for object-oriented programming
                    grid. What, the intent is to get inventory control storing
                    into object classes
                  </h4>
                  <br></br>
                  <h5>
                    <ButtonComponent>
                      <a href="https://github.com/leorochapinto/Stock-Control">
                        View Source Code
                      </a>
                    </ButtonComponent>
                  </h5>
                </div>
              </div>
            </RowTimelineComponent>
            <RowTimelineComponent
              date="November 17,18 - 2018"
              icon={
                <IconComponent
                  className={classNames(
                    FontAwesomeEnum.FA_ADDRESS_BOOK,
                    "fa-app"
                  )}
                />
              }
            >
              <div className="card">
                <div className="card-body">
                  <p>PHP from basic to database</p>
                  <br></br>
                  <h4 className="vertical-timeline-element-subtitle">
                    16 Hours PHP course at ACATE, held from November 17 and 18,
                    2018. In which a series of practical exercises are developed
                    from the introduction of PHP to the creation of MySQL
                    tables. The link bellow for more course informations:
                  </h4>
                  <br></br>
                  <a href="http://bigbossweb.com.br/">
                    <ButtonComponent>View Course</ButtonComponent>
                  </a>
                </div>
              </div>
            </RowTimelineComponent>
            <RowTimelineComponent
              icon={
                <IconComponent
                  className={classNames(FontAwesomeEnum.FA_FILE_CODE, "fa-app")}
                />
              }
              date="September - 2018"
            >
              <div className="card">
                <div className="card-body">
                  <p>Income Tax Software</p>
                  <br></br>
                  <h4 className="vertical-timeline-element-subtitle">
                    Software produced in Java for academic purposes, which
                    serves to control expenses, targets and income tax
                  </h4>
                  <br></br>
                  <a href="https://github.com/leorochapinto/Financial-Control">
                    <ButtonComponent>View Source Code</ButtonComponent>
                  </a>
                </div>
              </div>
            </RowTimelineComponent>
            <RowTimelineComponent
              date="June - 2018"
              icon={
                <IconComponent
                  className={classNames(FontAwesomeEnum.FA_FILE_CODE, "fa-app")}
                />
              }
            >
              <div className="card">
                <div className="card-body">
                  <p>Array Java</p>
                  <br></br>
                  <h4 className="vertical-timeline-element-subtitle">
                    Software designed to better learn how to handle a Java
                    Array, was one of the first software I produced
                  </h4>
                  <br></br>
                  <a href="https://github.com/leorochapinto/Array-Java">
                    <ButtonComponent>View Source Code</ButtonComponent>
                  </a>
                </div>
              </div>
            </RowTimelineComponent>
          </VerticalTimeline>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="field"></div>
            </div>
          </form>
          <hr />
          <footer>
            <p>Find me on: </p>
            <ul className="icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/leonardo-rocha-pinto-19188818b/"
                  className="icon brands fa-linkedin"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/leorochapinto"
                  className="icon brands fa-github"
                >
                  Git Hub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rochaa.leo/"
                  className="icon brands fa-instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/leonardo.rocha.94617"
                  className="icon brands fa-facebook-f"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </footer>
        </section>
        <footer id="footer">
          <ul className="copyright">
            <li>&copy; Leonardo Rocha Pinto</li>
          </ul>
        </footer>
      </div>
    );
  }
}
export default App;
