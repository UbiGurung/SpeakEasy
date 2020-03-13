import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { theme } from "../config/theme";

const styles = {
  root: {
    margin: "24px",
    marginTop: "0px"
  },
  paper: {
    background: theme.colours.background,
    width: "fit-content"
  },
  loginButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    color: theme.colours.accent,
    background: theme.colours.accent,
    fontWeight: "700"
  }
};

const LoginForm = props => {
  const {
    classes,
    passwordError,
    emailError,
    handleChange,
    handleSubmit
  } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <FormControl>
          <Typography>login</Typography>
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
            onClick={() => handleSubmit()}
          >
            Login
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(LoginForm);
