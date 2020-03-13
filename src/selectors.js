import moment from 'moment';

export const getAuthUser = state => state.userConfig.authUser;
export const getUserDetails = state => state.userConfig.userDetails;

export const getSessionTimeInterval = state => {
    return (
        state.sessions.currentSessionEnrolment &&
        state.sessions.currentSessionEnrolment.CurrentTimeFrame
    );
};

export const getIsCurrentSessionActive = state => {
    return (
        state.sessions.currentSessionEnrolment && state.sessions.currentSessionEnrolment.isActive
    );
};

export const getCurrentSessionId = state => {
    return state.sessions.currentSession && state.sessions.currentSession.id;
};

export const getCurrentSessionDetails = state => {
    return state.sessions.currentSession;
};

export const getChartDataForAllVotes = state => {
    const allVotes = state.votes && state.votes.allVotes;

    if (allVotes) {
        const summaryVotes = [];
        let length = 1;

        for (var key in allVotes) {
            const votesForUser = allVotes[key];
            length++;

            for (let index = 0; index < votesForUser.length; index++) {
                let vote = votesForUser[index] === undefined ? null : votesForUser[index].vote;

                if (summaryVotes[index] === undefined) {
                    summaryVotes[index] = { x: index, y: vote };
                } else if (!isNaN(summaryVotes[index].y) && !isNaN(vote)) {
                    summaryVotes[index].y += vote;
                }
            }
        }

        const averagedVotes = summaryVotes.map(x => {
            return {
                x: x.x / length,
                y: x.y
            };
        });

        return averagedVotes;
    }
    return [];
};

export const getSessionsForUser = state => {
    const filteredSessions = state.sessions.filteredSessionsForUser;
    const result = [];

    let index = 0;
    for (var key in filteredSessions) {
        result[index] = {
            id: key,
            title: filteredSessions[key].name,
            date: moment(filteredSessions[key].date).format('MMM Do YY')
        };
        index++;
    }
    return result;
};
