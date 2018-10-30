import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { POST_UPDATE, POST_CREATE, POST_GET_SUCCESS } from './types';

export const postUpdate = (prop, value) => {
    return {
        type: POST_UPDATE,
        payload: { prop, value }
    };
};

export const postCreate = (caption, imageurl) => {
    const email = firebase.auth().currentUser.email;

    return (dispatch) => {
        console.log(dispatch);
        firebase.database().ref('/posts')
        .push({ caption, imageurl, email })
        .then(() => {
            dispatch({ type: POST_CREATE });
        });
    };
};

export const getPostList = () => {
    console.log('getPostList');

    return (dispatch) => {
        console.log(dispatch);
        firebase.database().ref('/posts')
        .on('value', snapshot => {
            dispatch({ type: POST_GET_SUCCESS, payload: snapshot.val() });
        });
    };
};
