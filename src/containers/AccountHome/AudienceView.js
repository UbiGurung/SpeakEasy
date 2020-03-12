import React from "react";
import AudienceView from "../../components/AudienceView";
import { connect } from "react-redux";
import { getAuthUser } from "../../selectors";

import { signOut /*joinSession,*/ } from "../../actions";

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
  };

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
    authUser: getAuthUser(state)
  };
};

export default connect(mapStateToProps, { /*joinSession,*/ signOut })(
  AudienceViewContainer
);
