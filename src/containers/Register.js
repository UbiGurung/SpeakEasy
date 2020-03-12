import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { theme } from "../config/theme";
import RegisterForm from "../components/RegisterForm";
import { Typography, Button } from "@material-ui/core";

const styles = {
  root: {
    background: theme.colours.background,
    color: theme.colours.text,
    textAlign: "center",
    minHeight: "100vh",
    paddingTop: "20vh"
  }
};

class Login extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h3">Speak Easy</Typography>
        <RegisterForm />
        <Link to="/">
          <Button variant="outlined">Cancel</Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
