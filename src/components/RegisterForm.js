import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Typography, TextField, Button } from "@material-ui/core";
import { theme } from "../config/theme";

const styles = {
  root: {
    margin: "24px"
  },
  loginButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent
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
          className={classes.loginButton}
          variant="outlined"
          onClick={() => handleSubmit()}
        >
          >
        </Button>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(RegisterForm);
