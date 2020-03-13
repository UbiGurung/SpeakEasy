import React from 'react';
import {connect} from 'react-redux';

import CanvasJSReact from "../../canvasjs.react";
import * as selectors from '.././../selectors';
import {signInByEmailAndPassword, getAllVotesForSession, fetchSession, sumbitVote, setSessionTimeFrame, startSession, endSession} from '../../actions';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SocialRoomTemperatureChart extends React.Component{
    componentDidMount(){
        this.props.signInByEmailAndPassword("testemailone@gmail.com", "password");
        this.props.fetchSession("y5928");
        this.props.getAllVotesForSession("y5928");
        this.props.startSession("y5928")

        let timeFrame = 1;

        const timedEvent = setInterval(() => {
            this.props.setSessionTimeFrame("y5928", timeFrame)
            timeFrame++

            if(timeFrame >= 6){
                this.props.endSession(this.props.sessionId)
                clearInterval(timedEvent)
            }
        }, 3000)
    }

    componentDidUpdate(prevProps){
        if(this.props.isSessionActive){
            if(prevProps.timeInterval !== undefined && (prevProps.timeInterval !== this.props.timeInterval)){
                const randomNumber = Math.floor(Math.random() * 6) + 1  
                this.props.sumbitVote(randomNumber,this.props.timeInterval, "y5928" )
            }
        }
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
        timeInterval: selectors.getSessionTimeInterval(state),
        sessionId: selectors.getCurrentSessionId(state),
        isSessionActive: selectors.getIsCurrentSessionActive(state)
    };
};

export default connect(mapStateToProps, {signInByEmailAndPassword, getAllVotesForSession, fetchSession, sumbitVote, setSessionTimeFrame, startSession, endSession})(
    SocialRoomTemperatureChart
);