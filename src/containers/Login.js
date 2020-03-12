import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { theme } from "../config/theme";
import LoginForm from "../components/LoginForm";
import { Typography, Button } from "@material-ui/core";
import {connect} from 'react-redux';
import {compose} from 'ramda';

import {signInByEmailAndPassword} from '../actions';

const styles = {
  root: {
    background: theme.colours.background,
    color: theme.colours.text,
    textAlign: "center",
    minHeight: "100vh",
    paddingTop: "20vh"
  },
  divider: {
    display: "flex",
    alignSelf: "center",
    margin: "24px",
    fontWeight: "bold",
    color: theme.colours.orange
  },
  hr: {
    width: "35vw",
    height: "6px",
    background: theme.colours.orange,
    margin: "12px"
  },
  registerButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent,
    marginBottom: "24px"
  },
  actionButtons: {
    display: "grid"
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      emailError: null,
      passwordError: null
    };
  }

  handleChange = (event, target) => {
    this.setState({ [target]: event.target.value });
  };

  handleLogin = () => {
    !this.state.email && this.setState({ emailError: "email required" });
    !this.state.password && this.setState({ emailError: "password required" });

    this.state.email && this.state.password && this.props.signInByEmailAndPassword(this.state.email, this.state.password)
  };

  render() {
    console.warn({state: this.props.state})
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h3">Speak Easy</Typography>
        <LoginForm
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          handleChange={this.handleChange}
          handleSubmit={this.handleLogin}
        />
        <div className={classes.divider}>
          <div className={classes.hr} />
          OR
          <div className={classes.hr} />
        </div>
        <div className={classes.actionButtons}>
          <Link to="/register">
            <Button variant="outlined" className={classes.registerButton}>
              Create Account
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outlined">Cancel</Button>
          </Link>
        </div>
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
  connect(mapStateToProps, {signInByEmailAndPassword}),
  withStyles(styles)
)(Login);
