import {databaseRef, speakEasyUsersRef} from '../config/firebase';
import * as actions from './types';

export const createUser = ({age, gender, description}) => async dispatch => {
    const newUser = {
        age,
        gender,
        description
    }

    speakEasyUsersRef.push().set(newUser);
  };

  export const createUser = ({age, gender, description}) => async dispatch => {
    const newUser = {
        age,
        gender,
        description
    }

    firebase.database().ref('users/').set({
      username: name,
      age,
      gender
    });
  };
  
  export const fetchAllUsers = () => async dispatch => {
    speakEasyUsersRef.on("value", snapshot => {
      dispatch({
        type: actions.GET_ALL_USERS_SUCCEDED,
        payload: snapshot.val()
      });
    });
  };

