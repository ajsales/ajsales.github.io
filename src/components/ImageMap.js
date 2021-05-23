import React, { useState } from 'react';

import BackgroundImage from './BackgroundImage';

export default function ImageMap() {

	const [ imgSize, setImgSize ] = useState(0);

	const onSize = (size) => {
		setImgSize(size.width);
	}

	const areaData = [
		{
			name: 'About Me',
			shape: 'poly',
			coords: [31,223,99,121,161,115,197,104,231,122,239,146,247,146,247,174,261,188,259,198,242,199,165,189,155,210,122,212,99,241,174,240,206,245,220,265,35,265]
		},
		{
			name: 'Projects',
			shape: 'poly',
			coords: [224,71,305,66,307,131,236,133,228,115]
		}
	];

	const areas = areaData.map(area => {

		// 400px is original width of image
		let resizedCoords = area.coords.map(coord => coord * imgSize / 400);
		return (
			<area
				title={area.name}
				alt={area.name}
				shape={area.shape}
				href=""
				coords={resizedCoords.join()}
				key={area.name}
			/>
		);
	});

	console.log(imgSize);
	
	return (
		<div>
			<div class="bg">
				<BackgroundImage onSize={onSize} />
			</div>
			<map name="image-map">
				{areas}
			</map>
		</div>
	);
}