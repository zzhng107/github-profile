import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { Container, Header, Content, Thumbnail, Text, Card, CardItem, Body, Footer, FooterTab, Button, Icon, Left, Image } from 'native-base';

class RepoCard extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={()=>{Linking.openURL(this.props.data.html_url)}}>
			<Card>
				<CardItem header>
					<Body>
						<Text>{this.props.data.name}</Text>
						<Text note>{this.props.data.created_at}</Text>
					</Body>
				</CardItem>
				<CardItem>
					<Body>
						<Text>
							{this.props.data.description}
						</Text>
					</Body>
				</CardItem>
				<CardItem footer>
					<Left>
						<Button transparent textStyle={{ color: '#87838B' }}>
							<Icon name="md-git-network" />
							<Text>{this.props.data.owner.login}</Text>
						</Button>
					</Left>
				</CardItem>
			</Card>
			</TouchableOpacity>
			

		)
	}
}

export default class Repos extends React.Component {
	constructor(props){
		super(props);
		this.state={
			repoList: [],
		}

		fetch('https://api.github.com/users/zzhng107/repos?type=all', {
			method: 'GET',
		})
			.then((response)=>response.json())
			.then((response)=>{
				this.setState({
					repoList: response				
				})
			}, ()=>{
					console.log("repo list print")
					console.log(this.state.repoList)
				})
	}

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

	render() {
		let repoList = this.state.repoList.map((repo, i)=><RepoCard data={repo} key={i}/>)
		return (
			<Container >
				<Header />
				<Content>
					{repoList}
				</Content>
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