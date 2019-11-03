import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const request = require('request');

/***

{
  request.post('http://service.com/upload', {name:{name:this.state.username}})\
}
**/
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        var theUrl = "http://localhost:8080/coder-login";
        xmlhttp.open("POST", theUrl);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
            }
        }

        xmlhttp.send(JSON.stringify({ "coder_id": '3',
        "coder_name":this.state.name,
        "coder_profile_pic":'profile_pic',
        "coder_bio":'Im gay', "coder_location":'Columbus, Ohio', "coder_email": this.state.email }));

    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;
