import React, {Component} from 'react';
import Config from './config.json';

export default class Greeter extends Component {
	render() {
		return (
			<div>
				{Config.greetText}
			</div>
		)
	}
}