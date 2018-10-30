import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Profile from './Profile';

export default createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons 
                        name={'ios-contact'} 
                        size={26}
                        style={{ color: tintColor }} 
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);
