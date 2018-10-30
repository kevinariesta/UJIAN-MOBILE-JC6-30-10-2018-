import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
import PostGetReducer from './PostGetReducer';

export default combineReducers({
   auth: AuthReducer,
   post: PostReducer,
   postlist: PostGetReducer
});
