import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { postUpdate } from '../actions';

class ProfileForm extends Component {

    onCaptionChange = (text) => {
        this.props.postUpdate('caption', text);
    }

    onImageUrlChange = (text) => {
        this.props.postUpdate('imageurl', text);
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Caption"
                        placeholder="Fill This Caption"
                        value={this.props.caption}
                        onChangeText={this.onCaptionChange}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Image URL"
                        placeholder="Image URL"
                        value={this.props.imageurl}
                        onChangeText={this.onImageUrlChange}
                    />
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { caption, imageurl } = state.post;

    return { caption, imageurl };
};

export default connect(mapStateToProps, { postUpdate })(ProfileForm);
