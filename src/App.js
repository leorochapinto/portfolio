import React from 'react';
import './App.css';

function App() {
  return (
    <div id="wrapper">

      <section id="main">
        <header>
          <span className="avatar"><img src="images/avatar.jpg" alt="" /></span>
          <h1>Jane Doe</h1>
          <p>Senior Psychonautics Engineer</p>
        </header>
        <hr />
        <h2>Extra Stuff!</h2>
        <form method="post" action="#">
          <div className="fields">
            <div className="field">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <select name="department" id="department">
                <option value="">Department</option>
                <option value="sales">Sales</option>
                <option value="tech">Tech Support</option>
                <option value="null">/dev/null</option>
              </select>
            </div>
            <div className="field">
              <textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
            </div>
            <div className="field">
              <input type="checkbox" id="human" name="human" /><label for="human">I'm a human</label>
            </div>
            <div className="field">
              <label>But are you a robot?</label>
              <input type="radio" id="robot_yes" name="robot" /><label for="robot_yes">Yes</label>
              <input type="radio" id="robot_no" name="robot" /><label for="robot_no">No</label>
            </div>
          </div>
          <ul className="actions special">
            <li><a href="#" className="button">Get Started</a></li>
          </ul>
        </form>
        <hr />
        <footer>
          <ul className="icons">
            <li><a href="#" className="icon brands fa-twitter">Twitter</a></li>
            <li><a href="#" className="icon brands fa-instagram">Instagram</a></li>
            <li><a href="#" className="icon brands fa-facebook-f">Facebook</a></li>
          </ul>
        </footer>
      </section>

      <footer id="footer">
        <ul className="copyright">
          <li>&copy; Jane Doe</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </footer>

  </div>
  );
}

export default App;
