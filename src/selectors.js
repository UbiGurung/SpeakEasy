import * as R from 'ramda';

export const getAuthUser = state => state.userConfig.authUser;

export const getSessionTimeInterval = state => {
    return state.sessions.currentSessionEnrolment &&
    state.sessions.currentSessionEnrolment.CurrentTimeFrame
}

export const getIsCurrentSessionActive = state => {
    return state.sessions.currentSessionEnrolment &&
    state.sessions.currentSessionEnrolment.isActive
}

export const getCurrentSessionId = state => {
    return state.sessions.currentSession &&
    state.sessions.currentSession.id
}

export const getChartDataForAllVotes = state => {
    const allVotes = state.votes && state.votes.allVotes;

    if(allVotes){
        const summaryVotes = []

        for (var key in allVotes){
            const votesForUser = allVotes[key];

            for(let index = 0; index < votesForUser.length; index++){
                let vote = votesForUser[index] === undefined ? null : votesForUser[index].vote;

                if(summaryVotes[index] === undefined){
                    summaryVotes[index] = {x: index, y: vote}
                }else if(!isNaN(summaryVotes[index].y) && !isNaN(vote)){
                    summaryVotes[index].y += vote
                }
            }
        }

        return summaryVotes;
    }
    return []
}