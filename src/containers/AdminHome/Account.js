import React from "react";
import AccountHeader from "../../components/AccountHeader";
import { connect } from "react-redux";
import { getAuthUser, getUserDetails } from "../../selectors";

import { signOut } from "../../actions";

class AccountContainer extends React.Component {
  render() {
    return (
      <AccountHeader
        signOut={this.props.signOut}
        userDetails={{ name: "Admin" }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userDetails: getUserDetails(state)
  };
};

export default connect(mapStateToProps, { signOut })(AccountContainer);
