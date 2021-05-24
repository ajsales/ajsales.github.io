import React, { useState, useEffect, useRef } from 'react';

import BackgroundImage from './BackgroundImage';

export default function ImageMap() {

	const [ imgSize, setImgSize ] = useState(0);

	const onSize = (size) => {
		setImgSize(size);
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

	const areas = areaData.map(area => <Area {...area} imgSize={imgSize} />);
	
	return (
		<div className="ImageMap">
			<BackgroundImage onSize={onSize} />
			<map name="image-map">
				{areas}
			</map>
		</div>
	);
}

function Area(props) {

	const canvasRef = useRef(null);
	const { name, shape, coords, imgSize } = props;

	useEffect(() => {
		canvasRef.current.width = imgSize.width;
		canvasRef.current.height = imgSize.height;
	}, [imgSize])

	// Original image size is 400px
	let resizedCoords = coords.map(coord => coord * imgSize.width / 400);

	return (
		<div className="Area">
			<area
				title={name}
				alt={name}
				shape={shape}
				href=""
				coords={resizedCoords.join()}
				key={name}
			/>
			<canvas ref={node => canvasRef.current = node} />
		</div>
	);
}