import * as firebase from 'firebase';

import { todosRef, sessionByIdRef, allSessionsRef, votesRef, usersRef } from '../config/firebase';
import * as actionTypes from './types';
import * as selectors from '../selectors';

import { createRoomCodeID } from '../Helpers';

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

export const createSession = ({ title }) => async (dispatch, getState) => {
    const user = selectors.getAuthUser(getState());
    const uniqueId = createRoomCodeID();

    sessionByIdRef(uniqueId)
        .set({ name: title, userId: user.user.uid })
        .then(() =>
            dispatch({
                type: actionTypes.CREATE_SESSION,
                payload: { sessionId: uniqueId, name: title, userId: user.user.uid }
            })
        );
};

export const sumbitVote = (voteNumber, timeInterval, sessionId) => async (dispatch, getState) => {
    const user = selectors.getAuthUser(getState());
    const userId = user.user.uid;

    const voteRef = votesRef(sessionId, userId, timeInterval);

    voteRef.set({ vote: voteNumber }).then(() => {
        dispatch({
            type: actionTypes.SUMBIT_VOTE,
            payload: { sessionId, userId, voteNumber }
        });
    });
};

export const createUser = (email, password, name, age, gender, roles) => async dispatch => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
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
            console.warn('authUser.user.uid', authUser.user.uid);
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
