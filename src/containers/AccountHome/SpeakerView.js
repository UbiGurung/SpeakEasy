import React from "react";
import SpeakerView from "../../components/SpeakerView";
import { connect } from "react-redux";
import { getAuthUser, getSessionsForUser } from "../../selectors";

import { signOut, createSession, startSession, fetchSession, fetchSessionsForUser } from "../../actions";

import {createRoomCodeID} from '../../Helpers';

import history from '../../history';

class SpeakerViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: null,
        titleError: null,
      }
    };
  }

  componentDidMount(){
    this.props.fetchSessionsForUser(this.props.authUser.user)
  }

  handleFormChange = (event, target) => {
    this.setState({ form: { [target]: event.target.value } });
  };

  handleCreateRoom = isStarting => {
    const sessionId = createRoomCodeID();

    !this.state.form.title ?
      this.setState({ form: { titleError: "title required" } }) : this.props.createSession(this.state.form.title, isStarting, sessionId);

      if(isStarting){
        this.props.fetchSession(sessionId).then(() => history.push('/activeRoom'))
      }
  };

  render() {
    return (
      <SpeakerView
        signOut={this.props.signOut}
        authUser={this.props.authUser}
        createRoom={this.handleCreateRoom}
        form={this.state.form}
        handleFormChange={this.handleFormChange}
        sessionsForUser={this.props.sessionsForUser}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: getAuthUser(state),
    sessionsForUser: getSessionsForUser(state)
  };
};

export default connect(mapStateToProps, { createSession, signOut, startSession, fetchSession, fetchSessionsForUser })(
  SpeakerViewContainer
);
