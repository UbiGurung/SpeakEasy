import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from 'ramda';

import { withStyles } from "@material-ui/core/styles";
import { theme } from "../config/theme";
import RegisterForm from "../components/RegisterForm";
import { Button } from "@material-ui/core";
import svg from "../static/speakEasyHeader.svg";

import {createUser} from '../actions';

const styles = {
  root: {
    background: theme.colours.background,
    color: theme.colours.text,
    textAlign: "center",
    minHeight: "100vh",
    paddingTop: "12vh"
  }
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      usernameError: null,
      emailError: null,
      passwordError: null
    };
  }

  handleChange = (event, target) => {
    this.setState({ [target]: event.target.value });
  };

  handleRegister = () => {
    !this.state.username &&
      this.setState({ usernameError: "username required" });
    !this.state.email && this.setState({ emailError: "email required" });
    !this.state.password &&
      this.setState({ passwordError: "password required" });

    this.state.username && this.state.email && this.state.password && this.props.createUser({email:this.state.email, password: this.state.password, name:this.state.username})
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img alt="" src={svg} />
        <RegisterForm
          usernameError={this.state.usernameError}
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          handleChange={this.handleChange}
          handleSubmit={this.handleRegister}
        />
        <Link to="/">
          <Button variant="outlined">Cancel</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default compose(
  connect(mapStateToProps, {createUser}),
  withStyles(styles)
)(Register);
