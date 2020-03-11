import React from 'react';
import {connect} from 'react-redux';

import FeedbackControls from '../../components/Participants/FeedbackControls';
import {createSession, fetchSessionsForUser} from '../../actions';


class FeedbackControlsContainer extends React.Component{
    render(){
        return <FeedbackControls createSession={this.props.createSession}/>
    }
}

const mapStateToProps = (state) => {
  console.warn({state})
    return {
      
    }
  }

export default connect(mapStateToProps, {createSession, fetchSessionsForUser})(FeedbackControlsContainer);
