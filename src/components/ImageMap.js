import React, { useState, useEffect, useRef } from 'react';

import BackgroundImage from './BackgroundImage';

export default function ImageMap() {

	const [ imgSize, setImgSize ] = useState(0);
	const canvasRef = useRef(null);

	const onSize = (size) => {
		setImgSize(size);
	}

	useEffect(() => {
		canvasRef.current.width = imgSize.width;
		canvasRef.current.height = imgSize.height;
	}, [imgSize]);

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

	const drawArea = (coords) => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		coords = coords.reduce(
			(a, v, i, s) => (i % 2 ? a : [...a, s.slice(i, i + 2)]),
			[]
		);
		
		context.beginPath();
		let first = coords.unshift();
		context.moveTo(first[0], first[1]);
		coords.forEach(c => context.lineTo(c[0], c[1]));
		context.closePath();
		context.stroke();
		context.fill();
	}

	const clearArea = () => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		context.clearRect(0, 0, imgSize.width, imgSize.height);
	}

	const areas = areaData.map(area => {
		return (
			<Area 
				{...area}
				imgSize={imgSize}
				key={area.name}
				onMouseEnter={drawArea}
				onMouseLeave={clearArea}
			/>
		);
	});
	
	return (
		<div className="ImageMap">
			<BackgroundImage onSize={onSize} />
			<canvas ref={node => canvasRef.current = node} />
			<map name="image-map">
				{areas}
			</map>
		</div>
	);
}

function Area(props) {

	const { name,
		shape,
		coords,
		imgSize,
		onMouseEnter,
		onMouseLeave
	} = props;


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
				onMouseEnter={() => onMouseEnter(resizedCoords)}
				onMouseLeave={onMouseLeave}
			/>
		</div>
	);
}