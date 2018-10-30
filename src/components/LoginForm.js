import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { Header } from 'react-native-elements';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    state = { statusChecked: false }

    componentWillReceiveProps(newProps) {
        if (newProps.user) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'MainMenu' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
        this.setState({ statusChecked: true }); 
    }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress}>
                Log In
            </Button>
        );
    }

    renderContent() {
        if (this.state.statusChecked === false) {
            return <Spinner size="large" />;
        }

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }

    render() {
        return (
            <View>
                <Header
                        placement="left"
                        centerComponent={{ text: 'Please Login', style: { color: '#fff' } }}
                />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    const { email, password, error, loading, user, status } = state.auth;

    return { email, password, error, loading, user, status };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
