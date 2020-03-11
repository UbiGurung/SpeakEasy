import * as firebase from 'firebase'

import {todosRef} from '../config/firebase';
import * as actionTypes from './types';

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: actionTypes.FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const signInAsAnonymousUser = () => async dispatch => {
  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  
    if (errorCode === 'auth/operation-not-allowed') {
      alert('You must enable Anonymous auth in the Firebase Console.');
    } else {
      console.error(error);
    }
  }).then((authUser) => {
    dispatch({
      type: actionTypes.SIGN_IN_ANON,
      payload: authUser
    })
  })
}

export const signOut = () => async dispatch => {
  firebase.auth().signOut().then(() => dispatch({
    type: actionTypes.SIGN_OUT
  }))
}