import React from "react";
import AudienceView from "../../components/AudienceView";
import { connect } from "react-redux";
import { getAuthUser, getIsCurrentSessionActive } from "../../selectors";
import history from '../../history';
import { signOut, fetchSession } from "../../actions";

class AudienceViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { roomCode: null, codeError: null };
  }

  handleCodeChange = event => {
    this.setState({ roomCode: event.target.value });
  };

  handleJoinRoom = () => {
    this.state.roomCode
      ? /*this.props.joinRoom(this.state.roomCode)*/ null &&
        this.setState({ codeError: null })
      : this.setState({ codeError: "please enter code" });

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
    return (
      <AudienceView
        signOut={this.props.signOut}
        authUser={this.props.authUser}
        codeError={this.state.codeError}
        handleCodeChange={this.handleCodeChange}
        handleJoinRoom={this.handleJoinRoom}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: getAuthUser(state),
    isSessionActive: getIsCurrentSessionActive(state)
  };
};

export default connect(mapStateToProps, { fetchSession, signOut })(
  AudienceViewContainer
);
