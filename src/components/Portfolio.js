import React from 'react';

import spotifyImg from '../images/spotify.png';
import foodMapImg from '../images/food-map.png';
import soundspaceImg from '../images/soundspace.png';
import ghostImg from '../images/ghost.png';

export default function Portfolio() {

	const data = [
		{
			name: 'Friends Quiz for Spotify',
			href: 'https://react-spotify-quiz.herokuapp.com',
			image: spotifyImg,
			description: `Personalized Kahoot-like that tests you
			and your friends' knowledge on each other's music tastes.`
		},
		{
			name: 'B.o.B. Food Map',
			href: 'https://ajsales.github.io/food_map',
			image: foodMapImg,
			description: `Custom stylized restaurant map.`
		},
		{
			name: 'Sound Space',
			href: 'https://ajsales.itch.io/sound-space',
			image: soundspaceImg,
			description: `Space exploration game that integrates
			Max/MSP into Unity to generate sound through user input.`
		},
		{
			name: 'Ghost Quest',
			href: 'https://ajsales.itch.io/ghost-quest',
			image: ghostImg,
			description: `Dragon Quest-inspired RPG about ghosts. On a
			team of 4, I mainly focused on sound/music integration to
			improve player immersion.`
		}
	];

	const projectList = data.map(item => {
		return <Project {...item} />;
	});

	return (
		<div id="portfolio" className="section portfolio">
			<h1>Portfolio</h1>
			<hr />
			{projectList}
		</div>
	);
}

function Project(props) {
	return (
		<div>
			<img src={props.image} alt={props.name} />
			<div>
				{props.href
					? <a href={props.href} >{props.name}</a>
					: <h2>{props.name}</h2>
				}
				<hr />
				<p>{props.description}</p>
			</div>
		</div>
	);
}