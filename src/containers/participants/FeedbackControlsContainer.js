import React from 'react';
import { connect } from 'react-redux';

import FeedbackControls from '../../components/Participants/FeedbackControls';
import * as selectors from '../../selectors';
import { createSession, sumbitVote, createUser, fetchSession, getAllVotesForSession } from '../../actions';

class FeedbackControlsContainer extends React.Component {
    state = {
        timeInterval: 0
    };

    componentDidUpdate(prevProps){
        if(this.props.isSessionActive){
            console.warn('prevTimeFrame', prevProps.currentTimeFrame)
            console.warn('nowTimeFrame', this.props.currentTimeFrame)

            if(prevProps.currentTimeFrame !== undefined && (prevProps.currentTimeFrame !== this.props.currentTimeFrame)){
                this.props.sumbitVote(2, this.props.currentTimeFrame, this.props.currentSessionId)
            }
        }
    }

    render() {
        return <FeedbackControls props={this.props} handleSubmitVote={this.handleSubmitVote} />;
    }
}

const mapStateToProps = state => {
    console.warn({state})
    return {
        currentTimeFrame: selectors.getSessionTimeInterval(state),
        currentSessionId: selectors.getCurrentSessionId(state),
        isSessionActive: selectors.getIsCurrentSessionActive(state)
    };
};

export default connect(mapStateToProps, { createSession, sumbitVote, createUser, fetchSession, getAllVotesForSession })(
    FeedbackControlsContainer
);
