import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { theme } from "../config/theme";
import LoginForm from "../components/LoginForm";
import { Typography, Button } from "@material-ui/core";

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
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h3">Speak Easy</Typography>
        <LoginForm />
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

export default withStyles(styles)(Login);
