import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getPostList } from '../actions';
import { Card, CardSection } from './common';

class Home extends Component {

    componentWillMount() {
        this.props.getPostList();
    }

    renderPost() {
        console.log(this.props.posts);
        console.log('masuk');

        const { 
            thumbnailStyle, 
            thumbnailContainerStyle, 
            headerContentStyle, 
            headerTextStyle, 
            imageStyle,
            userStyle
        } = styles;

        return (this.props.posts.reverse()).map((item, index) => {
            return (
                <Card key={index}>
                    <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image style={thumbnailStyle} source={{ uri: item.imageurl }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{item.email}</Text>
                    </View>
                    </CardSection>
                    <CardSection>
                        <Image style={imageStyle} source={{ uri: item.imageurl }} />
                    </CardSection>
                    <CardSection>
                        <Text style={userStyle}>{item.email}</Text>
                        <Text>{item.caption}</Text>
                    </CardSection>
                </Card>
            );
        });
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {this.renderPost()}
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        width: '100%'
    },
    userStyle: {
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 14
    }
  };

const mapStateToProps = (state) => {
    console.log(state.postlist);

    const posts = _.map(state.postlist, (val, uid) => {
        return { ...val, uid };
    });
    console.log(posts);
    return { posts };
};

export default connect(mapStateToProps, { getPostList })(Home);
