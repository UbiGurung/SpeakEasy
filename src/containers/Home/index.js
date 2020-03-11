import React from 'react';
import AppBarContainer from './AppBarContainer';
import FeedbackControlsContainer from '../participants/FeedbackControlsContainer';

class Home extends React.Component{
    render(){
        return( 
        <div>
            <AppBarContainer />
            <FeedbackControlsContainer />
        </div>)
    }
}

export default Home;