import React, { Component} from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './SignUpPage.css';
import SignUpForm from './pages/SignUpForm.js';
import SignInForm from './pages/SignInForm.js';
import SignUpFormCompany from './pages/SignUpFormCompany.js';

class SignupPage extends Component {

  render() {
    return (
      <Router basename="/react-auth-ui/">


      {(()=> {
        switch (this.props.userType) {
          case "Coder":
          return(
            <div className="App">
              <div className="App__Aside"></div>
              <div className="App__Form">
                <div className="PageSwitcher">
                    <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                  </div>

                  <div className="FormTitle">
                      <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                  </div>


                  <Route exact path="/" >
                    <SignUpForm goto_projectlistings={this.props.goto_projectlistings}/>
                  </Route>
                  <Route path="/sign-in" component={SignInForm}>
                  </Route>
              </div>
              </div>
          );
          case "Company":
          return (
            <div className="App">
              <div className="App__Aside"></div>
              <div className="App__Form">
                <div className="PageSwitcher">
                    <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                  </div>

                  <div className="FormTitle">
                      <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                  </div>

                  <Route exact path="/" component={SignUpFormCompany}>
                  </Route>
                  <Route path="/sign-in" component={SignInForm}>
                  </Route>
              </div>
              </div>
          )}
      })()}


      </Router>
    );
}
}


export default SignupPage;
