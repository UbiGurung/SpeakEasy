import React from "react";
import {compose} from 'ramda';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import { theme } from "../config/theme";

import JoinRoomForm from "../components/AudienceView/JoinRoomForm";
import { Button, Typography } from "@material-ui/core";

import history from '../history';
import {fetchSession} from '../actions';

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
  loginButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent
  }
};

class Home extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = { roomCode: null, error: null };
  }

  handleCodeChange = event => {
    console.warn({ event });
    this.setState({ roomCode: event.target.value });
  };

  handleJoinRoom = () => {
    this.state.roomCode
      ? this.joinRoom() && this.setState({ error: null })
      : this.setState({ error: "please enter code" });
  };

  joinRoom = () => {
    this.props.fetchSession(this.state.roomCode).then(() => {
      history.push("/activeRoom/:" + this.state.roomCode)
      setInterval(() => window.location.reload(false), 500)
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h3">Speak Easy</Typography>
        <JoinRoomForm
          error={this.state.error}
          handleChange={this.handleCodeChange}
          handleClick={this.handleJoinRoom}
        />
        <div className={classes.divider}>
          <div className={classes.hr} />
          OR
          <div className={classes.hr} />
        </div>
        <Link to="/login">
          <Button variant="outlined" className={classes.loginButton}>
            Login
          </Button>
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
  connect(mapStateToProps, {fetchSession}),
  withStyles(styles)
)(Home);
