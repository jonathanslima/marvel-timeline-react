import React, { Component } from "react";

// import CSS
import "../../styles/card-hero.scss";

export default class movie extends Component {
	render() {
		const { id, title, subtitle, image, cssClass } = this.props.data;

		return (
			<section id={id} className={`card-hero ${cssClass}`}>
				<div className="name-movie">
					<h2 className="title">{title}</h2>
					{subtitle ? <h3 className="subtitle">{subtitle}</h3> : ""}
				</div>

				<div className="image-movie">
					<img src={image} alt={title} />
				</div>
			</section>
		);
	}
}
