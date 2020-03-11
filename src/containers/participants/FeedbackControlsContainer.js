import React from 'react';
import {connect} from 'react-redux';

import FeedbackControls from '../../components/Participants/FeedbackControls';


class FeedbackControlsContainer extends React.Component{
    render(){
        return <FeedbackControls />
    }
}



const mapStateToProps = ({data}) => {
    return {
      data
    }
  }

export default connect(mapStateToProps, {})(FeedbackControlsContainer);
