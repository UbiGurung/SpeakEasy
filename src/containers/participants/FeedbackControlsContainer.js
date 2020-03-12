import React from 'react';
import {connect} from 'react-redux';

import FeedbackControls from '../../components/Participants/FeedbackControls';
import {createSession, sumbitVote} from '../../actions';

class FeedbackControlsContainer extends React.Component{

  state ={
    timeInterval: 0
  }

  handleSubmitVote = () => {
    setInterval(() => {
      this.setState({timeInterval: this.state.timeInterval + 1})
      this.props.sumbitVote(4, this.state.timeInterval, "2ynpz")

      if(this.state.timeInterval >= 5){
        clearInterval()
      }
    }, 5000);
  }

    render(){
        return <FeedbackControls props={this.props} handleSubmitVote={this.handleSubmitVote} />
    }
}

const mapStateToProps = (state) => {
    return {
      
    }
  }

export default connect(mapStateToProps, {createSession, sumbitVote})(FeedbackControlsContainer);
