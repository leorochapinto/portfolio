import React from "react";
import "./App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <section id="main" style={{ width: "800px" }}>
          <header>
            <span className="avatar">
              <img src="images/avatar.jpg" alt="" />
            </span>
            <h1>Leonardo Rocha Pinto</h1>
            <p>Senior Psychonautics Engineer</p>
          </header>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="vertical-timeline-element-title">
                    Creative Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="vertical-timeline-element-title">
                    Art Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="vertical-timeline-element-title">
                    Art Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="vertical-timeline-element-title">
                    Art Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="vertical-timeline-element-title">
                    Art Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="vertical-timeline-element-title">
                    Art Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="vertical-timeline-element-title">
                    Art Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon
            />
          </VerticalTimeline>
          <h2>Extra Stuff!</h2>
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
            <ul className="icons">
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
            <li>&copy; Jane Doe</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
export default App;
