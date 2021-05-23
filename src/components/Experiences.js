import React from 'react';

import plentinaImg from '../images/plentina.png';
import berkeleyImg from '../images/berkeley.png';
import icsiImg from '../images/icsi.png';
import pasaeImg from '../images/pasae.png';

export default function Experiences() {

	const data = [
		{
			name: 'Plentina',
			href: 'https://plentina.com',
			image: plentinaImg,
			title: 'Program Manager (Volunteer) | July - October 2020',
			description: `As a volunteer Program Manager at Plentina, I helped the
			executive team complete the 2020 Techstars & Western Union Accelerator Program.
			I worked directly with the founders to ensure that they were getting the most
			out of the program, keeping up with weekly deadlines, and connecting with
			mentors/investors. Additionally, I'm helped program manage as we prepared for
			launch in the Philippines.`
		},
		{
			name: 'UC Berkeley',
			href: null,
			image: berkeleyImg,
			title: 'B.A. Computer Science, Cognitive Science | 2016 - 2020',
			description: `I came into Berkeley as a Computer Science (CS) major, though I
			soon became interested in cognitive science, specifically linguistics, and the
			role CS played in the field. While there, I also got involved in a variety of
			on-campus organizations such as Cal Band, PASAE (more on that below), CS
			Scholars, and CS Mentors.`
		},
		{
			name: 'ICSI',
			href: 'https://framenet.icsi.berkeley.edu/fndrupal',
			image: icsiImg,
			title: 'Research Apprentice | February - May 2020',
			description: `Under Dr. Collin Baker, I helped expand the FrameNet lexical
			database, which is widely used in NLP around the world. My team wanted to
			explore automatic semantic role labeling (ASRL) to aid in FrameNet. My specific
			role was to produce manual lexicographic and full-text annotations of technical
			documents to use as training data for ASRL programs.`
		},
		{
			name: 'PASAE',
			href: 'https://pasae.berkeley.edu',
			image: pasaeImg,
			title: [
				'President | May 2019 - May 2020',
				'Science Representative | May 2018 - May 2019'
			],
			description: `PASAE is an undergraduate organization at Berkeley aimed at
			uplifting Filipinos and other underrepresented minorities in STEAM. Being
			Filipino and interested in tech, it was an incredibly important space for me
			during undergrad as growing up, I wasn't really exposed to those types of
			opportunities. When I became Science Rep and later President, I got the chance
			to give back to this space and help other students like me who might've not had
			the opportunity to explore STEAM before. Tangibly, I planned, facilitated, and
			executed professional and academic development workshops and panels, alumni
			networking dinners, and other events.`
		}
	];

	const experienceList = data.map(item => {
		return <ExperienceItem {...item} />;
	});

	return (
		<div id="experiences" className="section experiences">
			<h1>Experiences</h1>
			<hr />
			{experienceList}
		</div>
	);
}

function ExperienceItem(props) {
	return (
		<div>
			<img src={props.image} alt={props.name} />
			<hr />
			{props.href
				? <a href={props.href} >{props.name}</a>
				: <h2>{props.name}</h2>
			}
			<hr />
			<p>{props.description}</p>
		</div>
	);
}