import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MyFooter from './MyFooter'
import { Container, Header, Content, Thumbnail, Text, Card, CardItem, Body, Footer, FooterTab, Button, Icon } from 'native-base';

class MyCard extends Component {
	render() {
		return (
			<Card>
				<CardItem>
					<Body style={styles.card}>
						<Text>{this.props.header}</Text>
						<Text>{this.props.mainContent}</Text>
					</Body>
				</CardItem>
			</Card>
		)
	}
}

export default class MyProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatar_img_url: 'https://avatars0.githubusercontent.com/u/10734180?v=4',
			email: 'zzhng107@illinois.edu',
			repos: 0,
			following: 0,
			followers: 0,
			name: '',
			bio: 'This is a sample bio',
			acctInfo: '',
			username: ''
		}

		fetch('https://api.github.com/users/zzhng107', {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					avatar_img_url: response.avatar_url,
					repos: response.public_repos,
					followers: response.followers,
					following: response.following,
					name: response.name,
					username: response.login,
					created_at: response.created_at,
					acctInfo: 'Username - ' + response.login + '\n'
						+ 'Email - ' + this.state.email + '\n'
						+ 'Created on - ' + response.created_at
				})
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

		return (
			<Container >
				<Header />
				<Content>
					<View style={styles.avatar}>
						<Thumbnail large source={{ uri: this.state.avatar_img_url }} />
						<Text>{'\n'}{this.state.name}</Text>
					</View>
					<View style={styles.mainView}>

						<MyCard header="Username" mainContent={this.state.username} />
						<MyCard header="Email" mainContent={this.state.email} />
						<MyCard header="Created at" mainContent={this.state.created_at} />

						<Text></Text>

						<Button block success onPress={this.navToRepos} style={styles.button}>
							<Text style={styles.buttonText}>Owned Repositories:{'\t' + this.state.repos}</Text>
						</Button>
						<Button block info onPress={this.navToFollowing} style={styles.button}>
							<Text style={styles.buttonText}>Following:{'\t' + this.state.following}</Text>
						</Button>
						<Button block warning onPress={this.navToFollowers} style={styles.button}>
							<Text style={styles.buttonText}>Followers:{'\t' + this.state.followers}</Text>
						</Button>

					</View>

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

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		margin: 12,
		justifyContent: 'center',
	},

	avatar: {
		flex: 1,
		paddingTop: 15,
		paddingBottom: 15,
		backgroundColor: 'lightgrey',
		alignItems: 'center',
	},
	button: {
		height: 85,
		marginBottom: 10,
	},
	buttonText: {
		textAlign: 'left',
	},
	card: {
		justifyContent: 'space-between',
		// flex: 1,
		flexDirection: 'row'
	}

});