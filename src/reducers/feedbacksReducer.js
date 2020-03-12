import * as actionTypes from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_FEEDBACKS_FOR_SESSION:
            return action.payload

        default:
            return state;
    }
};
