import React from "react";
import SpeakerView from "../../components/SpeakerView";
import { connect } from "react-redux";
import { getAuthUser } from "../../selectors";

import { signOut, createSession } from "../../actions";

class SpeakerViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: null,
        speaker: null,
        duration: null,
        titleError: null,
        speakerError: null,
        durationError: null
      }
    };
  }

  handleFormChange = (event, target) => {
    this.setState({ form: { [target]: event.target.value } });
  };

  handleCreateRoom = isStarting => {
    !this.state.title &&
      this.setState({ form: { titleError: "title required" } });
    !this.state.speaker &&
      this.setState({ form: { speakerError: "speaker required" } });
    !this.state.duration &&
      this.setState({ form: { durationError: "time required" } });

    // this.state.username && this.state.email && this.state.password && //sendrequest
  };

  render() {
    return (
      <SpeakerView
        signOut={this.props.signOut}
        authUser={this.props.authUser}
        createRoom={this.handleCreateRoom}
        form={this.state.form}
        handleFormChange={this.handleFormChange}
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
