import React, { Component } from 'react';
import bellon from './bellon.png'
import belloff from './belloff.png'

export class NewComp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
		 message: "Subscribe to my channel",
		 sub: "Subscribe",
		 imgUrl: belloff
	  };
	}

	styles = {
		fontStyle: "italic",
		color: "purple",
		fontSize: "20px"
	};

	ButtonChange = () => {
		this.setState({
			message: "hit the bell to never miss an update",
			sub: "Subscribed"
		})
	}

	imageChange = () => {
		this.setState({
			message: "Thank you happy learning",
			imgUrl: bellon
		})
	}

  render() {
	return (
	  <div className='appComp'>
		<h1 style={this.styles}>{this.state.message}</h1>
		<button onClick={this.ButtonChange}>{this.state.sub}</button>
		<p/>
		<img src={this.state.imgUrl} alt="" onClick={this.imageChange}></img>
	  </div>
	)
  }
}

export default NewComp;