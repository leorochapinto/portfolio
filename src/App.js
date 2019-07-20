import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div id="wrapper">

      <section id="main">
        <header>
          <span className="avatar"><img src="images/avatar.jpg" alt="" /></span>
          <h1>Leonardo Rocha Pinto</h1>
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
            </div>
          </div>
        </form>
        <hr />
        <footer>
          <ul className="icons">
            <li><a href="https://github.com/leorochapinto" className="icon brands fa-github">Git Hub</a></li>
            <li><a href="https://www.instagram.com/rochaa.leo/" className="icon brands fa-instagram">Instagram</a></li>
            <li><a href="https://www.facebook.com/leonardo.rocha.94617" className="icon brands fa-facebook-f">Facebook</a></li>
          </ul>
        </footer>
      </section>

      <footer id="footer">
        <ul className="copyright">
          <li>&copy; Jane Doe</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </footer>

  </div>
        )
    }
}
export default App;

