import React, { Component } from 'react';

// CSS
import '../../styles/guideline.scss';

export default class guideline extends Component {
	render() {
		return (
			<div className="container-line">
				<div className="guide-line-hor grow-line-right-1"></div>
				<div className="guide-line-vert-right grow-line-bottom-right"></div>
				<div className="guide-line-show show-opac-line"></div>
				<div className="guide-line-vert-left grow-line-bottom-left"></div>
				<div className="guide-line-hor grow-line-right-2"></div>
				<div className="guide-line-vert-right grow-line-bottom-right-2"></div>
				<div className="guide-line-show show-opac-line-2"></div>
				<div className="guide-line-vert-left grow-line-bottom-left-2"></div>

			</div>
		);
	}
}
