import React, { Component } from "react";
import axios from 'axios'
import {
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";
import App from '../App'
import Register from './Register';

const API_URL = 'http://localhost:8080/user';
  export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone:"",
      password: "",
      confirmPassword: "",
      status: ""
    };
    this.registerUser = this.registerUser.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  registerUser() {
    const url = API_URL + '/login';
    const loginData = { email:this.state.email,
                           password:this.state.password};
    axios.post(url,loginData )
      .then(res => {
        if(res.data.statusCode != 202){
            sessionStorage.setItem('loggedUser', res.data.message)
            window.location.replace('/')
        }else{
           alert(res.data.message);
        }
      })
      .catch(error => {
          console.log(error);
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.registerUser();
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
      </form>
    );
  }

  redirectToRegister() {
    sessionStorage.setItem('loggedUser', 'register')
    window.location.reload();
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
          <legend>Login Form</legend>
          <FormGroup controlId="email" bssize="large">
          <FormLabel>Email Id</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit">
            Login
        </Button>
       <Button
            block
            bssize="large"
            onClick={this.redirectToRegister}>
            New User? Register
        </Button>
      </form>
    );
  }

  render() {
    const isLogged = sessionStorage.getItem('loggedUser') != "register" &&  sessionStorage.getItem('loggedUser') != "login" && !!sessionStorage.getItem('loggedUser')
    const isNewUser = sessionStorage.getItem('loggedUser') == "register";
    const isRegisteredUser = sessionStorage.getItem('loggedUser') == "login";

    if(isLogged){
        return(
            <App />
            )
    }
    else if(isNewUser){
        return(
            <Register />
        )
    }
    else if(isRegisteredUser){
        return (
            <div className="CustomForm">
               {this.renderForm()}
            </div>
           );
    }else{
        return (
            <div className="CustomForm">
               {this.renderForm()}
            </div>
           );
    }
}
}