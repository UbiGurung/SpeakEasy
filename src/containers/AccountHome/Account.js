import React from "react";
import AccountHeader from "../../components/AccountHeader";
import { connect } from "react-redux";
import { getAuthUser } from "../../selectors";

import { signOut } from "../../actions";

class AccountContainer extends React.Component {
  render() {
    return (
      <AccountHeader
        signOut={this.props.signOut}
        authUser={this.props.authUser}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: getAuthUser(state)
  };
};

export default connect(mapStateToProps, { signOut })(AccountContainer);
