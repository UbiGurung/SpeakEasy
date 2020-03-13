import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { theme } from "../config/theme";
import LoginForm from "../components/LoginForm";
import { Button } from "@material-ui/core";
import svg from "../static/speakEasyHeader.svg";
import { connect } from "react-redux";
import { compose } from "ramda";
import history from "../history";

import { signInByEmailAndPassword } from "../actions";

const styles = {
  root: {
    background: theme.colours.background,
    color: theme.colours.text,
    textAlign: "center",
    minHeight: "100vh",
    paddingTop: "12vh"
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
    height: "2px",
    background: theme.colours.orange,
    margin: "12px"
  },
  registerButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent,
    fontWeight: "700",
    color: theme.colours.text,
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

    this.state.email &&
      this.state.password &&
      this.props
        .signInByEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          history.push("/account");
        });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img alt="" src={svg} />
        <LoginForm
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          handleChange={this.handleChange}
          handleSubmit={this.handleLogin}
        />
        <div className={classes.divider}>
          <div className={classes.hr} />
          or
          <div className={classes.hr} />
        </div>
        <div className={classes.actionButtons}>
          <Link to="/register">
            <Button className={classes.registerButton}>Create Account</Button>
          </Link>
          <Link to="/">
            <Button>Cancel</Button>
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
  connect(mapStateToProps, { signInByEmailAndPassword }),
  withStyles(styles)
)(Login);
