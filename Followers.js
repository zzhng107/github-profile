import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Thumbnail, Text, Card, CardItem, Body, Footer, FooterTab, Button, Icon} from 'native-base';
export default class Followers extends React.Component{
    navToProfile = () => {
		this.props.navigation.navigate('Profile');
	}

	navToRepos = () => {
		this.props.navigation.navigate('Repos');
	}

	navToFollowing = () => {
		this.props.navigation.navigate('Following');
	}

	navToFollowers = () => {
		this.props.navigation.navigate('Followers');
	}
    render(){
        return(
            <Container>
            <Header />
            <Content />
            <Footer>
                <FooterTab>
                    <Button vertical >
                        <Icon name="logo-github" onPress={this.navToProfile} />
                        <Text>Profile</Text>
                    </Button>

                    <Button vertical onPress={this.navToRepos}>
                        <Icon name="folder" />
                        <Text>Repos</Text>
                    </Button>

                    <Button vertical onPress={this.navToFollowing}>
                        <Icon active name="navigate" />
                        <Text>Following</Text>
                    </Button>

                    <Button vertical onPress={this.navToFollowers}>
                        <Icon name="person" />
                        <Text>Followers</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
        );
    }
}