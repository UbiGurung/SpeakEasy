import React from 'react';
import { connect } from 'react-redux';

import CanvasJSReact from '../../canvasjs.react';
import * as selectors from '.././../selectors';
import { sumbitVote, setSessionTimeFrame, startSession, endSession } from '../../actions';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SocialRoomTemperatureChart extends React.Component {
    render() {
        const options = {
            data: [
                {
                    type: 'line',
                    dataPoints: this.props.chartData || []
                }
            ]
        };
        return (
            <div>
                <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sessionId: selectors.getCurrentSessionId(state)
    };
};

export default connect(mapStateToProps, {
    sumbitVote,
    setSessionTimeFrame,
    startSession,
    endSession
})(SocialRoomTemperatureChart);
