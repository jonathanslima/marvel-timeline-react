import React, { Component } from 'react';
import '../../styles/header.scss';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<h1 className="main-title">Cronologia <span className="marvel">Marvel</span></h1>
			</header>
		);
	}
}
