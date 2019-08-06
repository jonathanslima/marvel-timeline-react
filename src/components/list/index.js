import React, { Component } from "react";
import Movie from "../movie/index";

// import { Container } from './styles';

export default class list extends Component {
	state = {
		movies: [
			{
				id: 1,
				title: "Captain America",
				subtitle: "The First Avenger",
				image: require("../../img/1-captain-america-first-avenger.png"),
				time: new Date(),
				cssClass: "c-america"
			},
			{
				id: 2,
				title: "Captain Marvel",
				subtitle: null,
				image: require("../../img/2-captain-marvel.png"),
				time: new Date(),
				cssClass: "c-marvel"
			},
			{
				id: 3,
				title: "Iron Man",
				subtitle: null,
				image: require("../../img/3-iron-man-1.png"),
				time: new Date(),
				cssClass: "ironman"
			},
			{
				id: 4,
				title: "Iron Man 2",
				subtitle: null,
				image: require("../../img/4-iron-man-2.png"),
				time: new Date(),
				cssClass: "ironman"
			},
			{
				id: 5,
				title: "The Incredible Hulk",
				subtitle: null,
				image: require("../../img/5-the-incredible-hulk.png"),
				time: new Date(),
				cssClass: "hulk"
			},
			{
				id: 6,
				title: "Thor",
				subtitle: null,
				image: require("../../img/6-thor-1.png"),
				time: new Date(),
				cssClass: "thor"
			},
			{
				id: 7,
				title: "The Avengers",
				subtitle: null,
				image: require("../../img/7-avengers-1.png"),
				time: new Date(),
				cssClass: "avengers"
			},
			{
				id: 8,
				title: "Iron Man 3",
				subtitle: null,
				image: require("../../img/8-iron-man-3.png"),
				time: new Date(),
				cssClass: "ironman"
			},
			{
				id: 9,
				title: "Thor",
				subtitle: "The Dark World",
				image: require("../../img/9-thor-the-dark-world.png"),
				time: new Date(),
				cssClass: "thor"
			},
			{
				id: 10,
				title: "Captain America",
				subtitle: "The Winter Soldier",
				image: require("../../img/10-captain-america-the-winter-soldier.png"),
				time: new Date(),
				cssClass: "c-america"
			},
			{
				id: 11,
				title: "Guardions of the Galaxy",
				subtitle: null,
				image: require("../../img/11-guardians-of-the-galaxy-1.png"),
				time: new Date(),
				cssClass: "guardians"
			},
			{
				id: 12,
				title: "Guardions of the Galaxy 2",
				subtitle: null,
				image: require("../../img/12-guardians-of-the-galaxy-2.png"),
				time: new Date(),
				cssClass: "guardians"
			},
			{
				id: 13,
				title: "Avenger",
				subtitle: "Age of Ultron",
				image: require("../../img/13-avengers-age-of-ultron-2.png"),
				time: new Date(),
				cssClass: "avengers"
			},
			{
				id: 14,
				title: "Antman",
				subtitle: null,
				image: require("../../img/14-antman-1.png"),
				time: new Date(),
				cssClass: "antman"
			},
			{
				id: 15,
				title: "Captain America",
				subtitle: "Civil War",
				image: require("../../img/15-captain-america-civil-war-3.png"),
				time: new Date(),
				cssClass: "c-america"
			},
			{
				id: 16,
				title: "Spider Man",
				subtitle: "Homecoming",
				image: require("../../img/16-spider-man-homecoming-1.png"),
				time: new Date(),
				cssClass: "spider"
			},
			{
				id: 17,
				title: "Black Panther",
				subtitle: null,
				image: require("../../img/17-black-panther-1.png"),
				time: new Date(),
				cssClass: "blackpanther"
			},
			{
				id: 18,
				title: "Doctor Strange",
				subtitle: null,
				image: require("../../img/18-doctor-strange-1.png"),
				time: new Date(),
				cssClass: "strange"
			},
			{
				id: 19,
				title: "Thor",
				subtitle: "Ragnarok",
				image: require("../../img/19-thor-ragnarok-3.png"),
				time: new Date(),
				cssClass: "thor"
			},
			{
				id: 20,
				title: "Antman and Wasp 2",
				subtitle: null,
				image: require("../../img/20-antman-and-wasp-2.png"),
				time: new Date(),
				cssClass: "antman"
			},
			{
				id: 21,
				title: "Avengers",
				subtitle: "Infiniy War",
				image: require("../../img/21-avengers-infinity-war-2.png"),
				time: new Date(),
				cssClass: "avengers"
			},
			{
				id: 22,
				title: "Avengers",
				subtitle: "Endgame",
				image: require("../../img/22-avengers-endgame-3.png"),
				time: new Date(),
				cssClass: "avengers"
			}
		]
	};

	render() {
		const { movies } = this.state;
		return (
			<main>
				{movies && movies.map(movie => <Movie key={movie.id} data={movie} />)}
			</main>
		);
	}
}
