import * as actionTypes from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return {
                ...state,
                authUser: action.payload
            };

        case actionTypes.SIGN_OUT:
            return {
            };

        case actionTypes.CREATE_USER: {
            return {
                ...state,
                userDetails: action.payload
            };
        }

        case actionTypes.GET_USER: {
            return{
                ...state,
                userDetails: action.payload
            }
        }

        default:
            return state;
    }
};
