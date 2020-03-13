import * as firebase from 'firebase';

import { todosRef, sessionByIdRef, allSessionsRef, votesRef, usersRef, sessionEnrolmentByIdRef, allVotesForSessionRef, feedbackRef, allFeedbacksForSessionRef } from '../config/firebase';
import * as actionTypes from './types';
import * as selectors from '../selectors';

export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
    todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
    todosRef.on('value', snapshot => {
        dispatch({
            type: actionTypes.FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};

export const signInAsAnonymousUser = () => async dispatch => {
    firebase
        .auth()
        .signInAnonymously()
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;

            if (errorCode === 'auth/operation-not-allowed') {
                alert('You must enable Anonymous auth in the Firebase Console.');
            } else {
                console.error(error);
            }
        })
        .then(authUser => {
            dispatch({
                type: actionTypes.SIGN_IN,
                payload: authUser
            });
        });
};

export const signInByEmailAndPassword = (email, password) => async dispatch => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        })
        .then(authUser => {
            dispatch({
                type: actionTypes.SIGN_IN,
                payload: authUser
            });

            dispatch(fetchUser(authUser));

            firebase.auth().onAuthStateChanged(function(user) {
                if (user && !user.isAnonymous) {
                    // User is signed in.
                    dispatch(fetchSessionsForUser(user));
                }
            });
        });
};

export const signOut = () => async dispatch => {
    firebase
        .auth()
        .signOut()
        .then(() =>
            dispatch({
                type: actionTypes.SIGN_OUT
            })
        );
};

export const fetchUser = user => async dispatch => {
    usersRef(user.user.uid).once('value').then((snapshot) => dispatch({
        type: actionTypes.GET_USER,
        payload: snapshot.val()
    }))
}

export const fetchSessionsForUser = user => async dispatch => {
    allSessionsRef.on('value', snapshot => {
        dispatch({
            type: actionTypes.FETCH_ALL_SESSIONS,
            payload: { allSessions: snapshot.val(), userId: user.uid }
        });
    });
};

export const createSession = (title, isActive, sessionId) => async (dispatch, getState) => {
    const user = selectors.getAuthUser(getState());
    const date = new Date();

    sessionByIdRef(sessionId)
        .set({ name: title, speakerId: user.user.uid, date })
        .then(() =>
            dispatch({
                type: actionTypes.CREATE_SESSION,
                payload: { sessionId, name: title, speakerId: user.user.uid, date}
            })
        );

    sessionEnrolmentByIdRef(sessionId).set({
        Attendees: [],
        CurrentTimeFrame: 0,
        isActive
    })
};

export const fetchSession = (sessionId) => async dispatch => {
    sessionEnrolmentByIdRef(sessionId).on('value', snapshot => {
        dispatch({
            type: actionTypes.FETCH_SESSION_ENROLMENT,
            payload: snapshot.val()
        })
    })

    sessionByIdRef(sessionId).on('value', snapshot => {
        dispatch({
            type: actionTypes.FETCH_SESSION,
            payload: {sessionId, data: snapshot.val()}
        })
    })
}

export const sumbitVote = (voteNumber, timeInterval, sessionId) => async (dispatch, getState) => {
    const user = selectors.getAuthUser(getState());
    const userId = user.user.uid;

    const voteRef = votesRef(sessionId, userId, timeInterval);

    voteRef.set({ vote: voteNumber }).then(() => {
        dispatch({
            type: actionTypes.SUMBIT_VOTE,
            payload: { sessionId, userId, voteNumber, timeInterval}
        });
    });
};

export const getAllVotesForSession = (sessionId) => async dispatch => {
    allVotesForSessionRef(sessionId).on('value', snapshot => dispatch({
        type: actionTypes.GET_ALL_VOTES_FOR_SESSION,
        payload: snapshot.val()
    }));
}

export const createUser = ({email, password, name, age = 12, gender = "Male", roles = ["Speaker"]}) => async dispatch => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        })
        .then(authUser => {
            dispatch({
                type: actionTypes.SIGN_IN,
                payload: authUser
            });
            usersRef(authUser.user.uid)
                .set({
                    name,
                    age,
                    gender,
                    roles
                })
                .then(() => {
                    dispatch({
                        type: actionTypes.CREATE_USER,
                        payload: { name, age, gender, roles }
                    });
                });
        });
};

export const setSessionTimeFrame = (sessionId, timeFrameNumber) => async dispatch => {
    sessionEnrolmentByIdRef(sessionId).update({CurrentTimeFrame: timeFrameNumber});
}

export const startSession = (sessionId) => async dispatch => {
    sessionEnrolmentByIdRef(sessionId).update({isActive: true});
}

export const endSession = (sessionId) => async dispatch => {
    sessionEnrolmentByIdRef(sessionId).update({isActive: false});
}

export const submitFeedback = (sessionId, message) => async (dispatch, getState) => {
    const user = selectors.getAuthUser(getState());
    const userId = user.user.uid;

    feedbackRef(sessionId, userId, new Date()).set({message: message})
}

export const getAllFeedbacks = (sessionId) => async dispatch => {
    allFeedbacksForSessionRef(sessionId).on('value', snapshot => dispatch({
        type: actionTypes.GET_ALL_FEEDBACKS_FOR_SESSION,
        payload: snapshot.val()
    }))
}