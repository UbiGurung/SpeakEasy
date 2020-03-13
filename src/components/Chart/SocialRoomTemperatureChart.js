import React from 'react';
import {connect} from 'react-redux';

import CanvasJSReact from "../../canvasjs.react";
import * as selectors from '.././../selectors';
import {signInByEmailAndPassword, getAllVotesForSession, fetchSession, sumbitVote, setSessionTimeFrame, startSession, endSession} from '../../actions';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SocialRoomTemperatureChart extends React.Component{
    componentDidMount(){
        console.warn({sessionId: this.props.sessionId})
        this.props.getAllVotesForSession(this.props.sessionId);
    }

    render(){
        const options = {
            title: {
                text: "Social Room Temperature"
            },
            data: [{
                type: "line",
                dataPoints: this.props.chartData
            }]
        }
        return(
            <div>
                <CanvasJSChart options = {options} onRef={ref => this.chart = ref} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chartData: selectors.getChartDataForAllVotes(state),
        sessionId: selectors.getCurrentSessionId(state)
    };
};

export default connect(mapStateToProps, {signInByEmailAndPassword, getAllVotesForSession, fetchSession, sumbitVote, setSessionTimeFrame, startSession, endSession})(
    SocialRoomTemperatureChart
);