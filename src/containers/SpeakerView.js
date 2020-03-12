import React from "react";
import SpeakerView from "../components/SpeakerView";
import { connect } from "react-redux";
import { getAuthUser } from "../selectors";

import { signOut, createSession } from "../actions";

class SpeakerViewContainer extends React.Component {
  render() {
    return (
      <SpeakerView
        signOut={this.props.signOut}
        authUser={this.props.authUser}
        createRoom={this.props.createSession}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: getAuthUser(state)
  };
};

export default connect(mapStateToProps, { createSession, signOut })(
  SpeakerViewContainer
);
