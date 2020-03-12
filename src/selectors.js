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