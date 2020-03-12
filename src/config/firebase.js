import * as firebase from 'firebase';

import { FirebaseConfig } from '../config/keys';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos');

export const sessionByIdRef = sessionId => firebase.database().ref('sessions/' + sessionId);

export const allSessionsRef = firebase.database().ref('sessions');

export const votesRef = (sessionId, userId, timeInterval) =>
    firebase.database().ref('votes/' + sessionId + '/' + userId + '/' + timeInterval);

export const usersRef = userId => firebase.database().ref('users/' + userId);
