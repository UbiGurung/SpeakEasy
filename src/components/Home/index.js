import React from 'react';
import AppBar from './AppBar';
import FeedbackControls from '../Participants/FeedbackControls';

class Home extends React.Component{
    render(){
        return( 
        <div>
            <AppBar />
            <FeedbackControls />
        </div>)
    }
}

export default Home;