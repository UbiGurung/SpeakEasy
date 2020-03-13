import React from "react";
import {compose} from 'ramda';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import { theme } from "../config/theme";

import JoinRoomForm from "../components/AudienceView/JoinRoomForm";
import { Button } from "@material-ui/core";
import svg from "../static/speakEasyHeader.svg";

import history from '../history';
import {fetchSession} from '../actions';
import * as selectors from '../selectors';

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
  loginButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { roomCode: null, error: null };
  }

  handleCodeChange = event => {
    this.setState({ roomCode: event.target.value });
  };

  handleJoinRoom = () => {
    this.state.roomCode
      ? this.joinRoom() && this.setState({ error: null })
      : this.setState({ error: "please enter code" });
  };

  joinRoom = () => {
    this.props.fetchSession(this.state.roomCode)
  };

  componentDidUpdate(prevProps){
    // if(!this.props.isSessionActive){
    //   alert("Unavailable to join session")
    // }
    if(this.props.isSessionActive){
      history.push("/activeRoom")
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img alt="" src={svg} />
        <JoinRoomForm
          error={this.state.error}
          handleChange={this.handleCodeChange}
          handleClick={this.handleJoinRoom}
        />
        <div className={classes.divider}>
          <div className={classes.hr} />
          or
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
    isSessionActive: selectors.getIsCurrentSessionActive(state)
  };
};

export default compose(
  connect(mapStateToProps, {fetchSession}),
  withStyles(styles)
)(Home);
