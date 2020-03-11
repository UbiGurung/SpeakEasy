import React from 'react';
import AppBar from '../../components/Home/AppBar';
import { connect } from 'react-redux';
import {getAuthUser} from '../../selectors';

import {signInAsAnonymousUser, signOut} from '../../actions';

class AppBarContainer extends React.Component{
    render(){
        return <AppBar signInAsAnonymousUser={this.props.signInAsAnonymousUser} signOut={this.props.signOut} authUser={this.props.authUser}/>
    }
}

const mapStateToProps = (state) => {
    return {
      authUser: getAuthUser(state)
    }
  }

export default connect(mapStateToProps, {signInAsAnonymousUser, signOut})(AppBarContainer)