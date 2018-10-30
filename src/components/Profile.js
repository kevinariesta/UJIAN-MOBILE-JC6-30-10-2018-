import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { logoutUser, postCreate } from '../actions';
import ProfileForm from './ProfileForm';

class Profile extends Component {
    state = { email: '' }

    componentWillMount() {
        if (this.props.user) {
            this.setState({ email: this.props.user.email });
        }
    }

    onButtonPostPress = () => {
        const { caption, imageurl } = this.props;

        this.props.postCreate(caption, imageurl);
    }

    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login');
    }

    render() {
        return (
            <View>
                <Header 
                    centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
                    rightComponent={
                    <Icon 
                        name='user'
                        type='font-awesome'
                        color='#fff'
                        onPress={this.logOut}
                    />}
                />
                <Card>
                    <CardSection>
                        <Text>Email : {this.state.email}</Text>
                    </CardSection>
                    <ProfileForm />
                    <CardSection>
                        <Button onPress={this.onButtonPostPress}>
                            Post
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { user, email } = state.auth;
    const { caption, imageurl } = state.post;

    return { user, email, caption, imageurl };
};

export default connect(mapStateToProps, { logoutUser, postCreate })(Profile);
