import * as firebase from 'firebase';

import { FirebaseConfig } from '../config/keys';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos');

export const sessionByIdRef = sessionId => firebase.database().ref('sessions/' + sessionId);
export const sessionEnrolmentByIdRef = sessionId => firebase.database().ref('sessionEnrolments/' + sessionId);

export const allSessionsRef = firebase.database().ref('sessions');

export const votesRef = (sessionId, userId, timeInterval) =>
    firebase.database().ref('votes/' + sessionId + '/' + userId + '/' + timeInterval);

export const allVotesForSessionRef = (sessionId) => firebase.database().ref('votes/' + sessionId);

export const feedbackRef = (sessionId, userId, date) => firebase.database().ref('feedbacks/' + sessionId + "/" + userId + "/" + date)

export const allFeedbacksForSessionRef = (sessionId) => firebase.database().ref('feedbacks/' + sessionId);

export const usersRef = userId => firebase.database().ref('users/' + userId);
