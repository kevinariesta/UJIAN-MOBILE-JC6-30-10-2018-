import { POST_GET_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_GET_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
