import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Typography,
  TextField,
  Button,
  Paper
} from "@material-ui/core";
import { theme } from "../config/theme";

const styles = {
  root: {
    margin: "24px",
    marginTop: "0px",
    display: "inline-grid"
  },
  paper: {
    background: theme.colours.background,
    width: "fit-content",
    marginLeft: "84px",
    padding: "12px"
  },
  registerButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent,
    fontWeight: "700",
    color: theme.colours.text
  }
};

const RegisterForm = props => {
  const {
    classes,
    usernameError,
    emailError,
    passwordError,
    handleChange,
    handleSubmit
  } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <FormControl>
          <Typography>create account</Typography>
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            error={usernameError}
            helperText={usernameError}
            onChange={e => handleChange(e, "username")}
          />
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            error={emailError}
            helperText={emailError}
            onChange={e => handleChange(e, "email")}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            error={passwordError}
            helperText={passwordError}
            onChange={e => handleChange(e, "password")}
          />
          <Button
            className={classes.registerButton}
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(RegisterForm);
