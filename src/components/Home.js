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
            imageStyle
        } = styles;

        return (this.props.posts.reverse()).map((data, key) => {
            return (
                <Card key={key}>
                    <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image style={thumbnailStyle} source={{ uri: data.imageurl }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{data.email}</Text>
                    </View>
                    </CardSection>
                    <CardSection>
                        <Image style={imageStyle} source={{ uri: data.imageurl }} />
                    </CardSection>
                    <CardSection>
                    <Text>
                        {data.caption}
                    </Text>
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
