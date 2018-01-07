import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import '../../styles/uploadBio.css';

class UploadBio extends Component {
	constructor(props) {
	super(props);
		this.state = {
				categories: [],
				catch_phrase: '',
		}
	}

	handleClick = (e) => {
		let check = this.state.categories
		if(check.indexOf(e.target.name) === -1) {
			this.setState({categories: this.state.categories.concat(e.target.name)})
		} else {
			check.splice(check.indexOf(e.target.name), 1)
		}
		console.log(this.state)
	}

	handleChange = (e) => {
		this.setState({catch_phrase: e.target.value})
	}

	submitProfile = () => {
		let UserId = this.props.props.user.id
		let profile = this.props.props.profile.profile
		let arr = profile.categories
		let catch_phrase = this.state.catch_phrase
		let data = {...profile, catch_phrase, categories: arr.concat(this.state.categories), UserId: UserId}
		let { submitProfile } = this.props.props
		console.log('COMPILED DATA===>>>',data)
		console.log('userid===>>>', UserId)
		submitProfile(data)
	}

	render() {
		console.log('In render', this.state)
		console.log('UserId', this.props.props.user.id)
		return (
			<div>
				<div className="bioContainer">
					<center>
					<div className="welcome">
						<h1 className="bioTitle"> Welcome, traveler!</h1>
						<p id="aboutMe"> Tell us a little more about yourself. </p>
					</div>


				<div className="bioQuestions">
					<p id="questions"> What types of travel do you like? </p>

					<div className="bioButtons">
						<button onClick={this.handleClick} name='Food' type="button" className="btn btn-default one" id="btnOne">Food</button>
						<button onClick={this.handleClick} name='Culture & Art' type="button" className="btn btn-default two" id="btnTwo">Culture & Art</button>
						<button onClick={this.handleClick} name='Relaxation' type="button" className="btn btn-default three" id="btnThree">Relaxation</button>
						<button onClick={this.handleClick} name='Backpacking' type="button" className="btn btn-default four" id="btnFour">Backpacking</button>
						<button onClick={this.handleClick} name='Activities' type="button" className="btn btn-default five" id="btnFive">Activities</button>
						<button onClick={this.handleClick} name='Independence' type="button" className="btn btn-default six" id="btnSix">Independence</button>
					</div>
				</div>

				<div className="bioIntro">
					<p className="questions"> Introduce yourself </p>
					<input onChange={this.handleChange} type="text" placeholder="Write a brief intro..." className="intro"></input>
					<button onClick={this.submitProfile} className="btn btn-default done" type="button">All done!</button>
					<Link to='/' id="skip">Skip this step</Link>
				</div>
			</center>
			</div>
		</div>
		)
	}
};

export default UploadBio;
