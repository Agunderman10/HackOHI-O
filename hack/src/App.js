import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignUpPage from './signup/SignUpPage.js';

function App() {
  document.title = "CrowdCode"
  return (
    <Router>
    <div>
    <section>
      <header className="App-header">
        <strong>CrowdCode</strong>
        <div>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/coders">For Coders</Link>
            </li>
            <li>
              <Link to="/companies">For Companies</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/learnmore">Learn more</Link>
            </li>
          </ul>
        </div>
      </header>
    </section>

    <hr/>

    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/coders">
            <SignUpPage userType={'Coder'} />
          </Route>
          <Route path="/companies">
            <SignUpPage userType={'Company'} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/learnmore">
            <Learnmore />
          </Route>
    </Switch>
    </div>
  </Router>
  );
}

function Companies() {
  return <h2>Companies</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Learnmore() {
  return <h2>Learnmore</h2>;
}

function Home(){
  return (
  <div>

  <section id="main">
    <div className="main-text">
      <span>CrowdCode.</span> <br></br> where you earn money coding<br></br>
    </div>
  </section>

  <section id="buttons">
    <div className="button_cont"><a className="toSignUpBtn">To Coders</a></div>
    <br></br>
    <br></br>
    <div className="button_cont"><a className="toSignUpBtn">To Companies</a></div>
  </section>
  </div>)
}

export default App;
