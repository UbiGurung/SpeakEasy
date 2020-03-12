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
  const { classes } = props;
  return (
    <div className={classes.root}>
      <FormControl>
        <Typography>create account</Typography>
        <TextField id="outlined-basic" label="username" variant="outlined" />
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" />
        <Button className={classes.loginButton} variant="outlined">
          >
        </Button>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(RegisterForm);
