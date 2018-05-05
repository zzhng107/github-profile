import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import MyProfile from '../components/MyProfile'
import Repos from '../components/Repos'
import Following from '../components/Following'
import Followers from '../components/Followers'

const StackNavigatorConfig = {
    transitionConfig : () => ({
        transitionSpec: {
            duration: 0,
            timing: Animated.timing,
            easing: Easing.step0,
        },
    }),
  }

const MainNav = StackNavigator(
    {
        Profile: {
            screen: MyProfile
        },
        Repos: {
            screen: Repos
        },
        Following: {
            screen: Following
        },
        Followers: {
            screen: Followers
        }
    },
    {
        initialRouteName: 'Profile',
        headerMode: 'none',
        transitionConfig : () => ({
            transitionSpec: {
                duration: 0,
                // timing: Animated.timing,
                // easing: Easing.step0,
            },
        }),
    }
)



export default MainNav