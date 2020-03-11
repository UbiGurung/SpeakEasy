import {todosRef} from '../config/firebase';
import * as actionTypes from './types';

export const addToDo = newToDo => async dispatch => {
  dispatch({
    type: actionTypes.NEW_USER_REGISTER_SUCCEDED,
    payload: newToDo
  });

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