import { POST_UPDATE, POST_CREATE } from '../actions/types';

const INITIAL_STATE = { caption: '', imageurl: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case POST_CREATE: 
            return INITIAL_STATE;
        default: 
            return state;
    }
};
