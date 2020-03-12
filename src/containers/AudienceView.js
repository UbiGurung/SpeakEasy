import React from "react";
import AudienceView from "../components/AudienceView";
import { connect } from "react-redux";
import { getAuthUser } from "../selectors";

import { signOut /*joinSession,*/ } from "../actions";

class AudienceViewContainer extends React.Component {
  render() {
    return (
      <AudienceView
        signOut={this.props.signOut}
        authUser={this.props.authUser}
        joinRoom={this.props.joinSession}
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
