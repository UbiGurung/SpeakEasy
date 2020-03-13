import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import { theme } from "../config/theme";

import JoinRoomForm from "../components/AudienceView/JoinRoomForm";
import { Button } from "@material-ui/core";
import svg from "../static/speakEasyHeader.svg";

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
    console.warn({ event });
    this.setState({ roomCode: event.target.value });
  };

  handleJoinRoom = () => {
    this.state.roomCode
      ? this.joinRoom() && this.setState({ error: null })
      : this.setState({ error: "please enter code" });
  };

  joinRoom = () => {
    console.warn({ props: this.props });
    this.props.history.push("/activeRoom");
  };

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

export default withStyles(styles)(Home);
