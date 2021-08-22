import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { signUpStart } = this.props;

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password.</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (UserCredentials) => dispatch(signUpStart(UserCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
