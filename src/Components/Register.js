import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";

  export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone:"",
      password: "",
      confirmPassword: "",
    };
  }

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.phone.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
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

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
          <legend>Registration Form</legend>
          <FormGroup controlId="name" bssize="large">
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email" bssize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="phone" bssize="large">
          <FormLabel>Phone</FormLabel>
          <FormControl
            autoFocus
            type="tel"
            value={this.state.phone}
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
        <FormGroup controlId="confirmPassword" bssize="large">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit">
            Submit
        </Button>
      </form>
    );
  }

  render() {
    return (
      <div className="Register">
        {this.renderForm()}
      </div>
    );
  }
}