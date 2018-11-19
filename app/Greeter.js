import React, {Component} from 'react';
import Config from './config.json';
import styles from './Greeter.css';

export default class Greeter extends Component {
	render() {
		return (
			<div className={styles.root}>
				{Config.greetText}
			</div>
		)
	}
}