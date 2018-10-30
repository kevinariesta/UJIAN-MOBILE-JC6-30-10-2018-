import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCc-yBT7tOpv3AohoR7JpFKzcjYM1oidEQ',
            authDomain: 'database-ujian-mobile.firebaseapp.com',
            databaseURL: 'https://database-ujian-mobile.firebaseio.com',
            projectId: 'database-ujian-mobile',
            storageBucket: 'database-ujian-mobile.appspot.com',
            messagingSenderId: '340683205284'
          };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.alreadyLogin(user);
            } else {
                this.props.notLoginYet();
            }
        });
    }

    render() {
        return (
            <Main />
        );
    }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
