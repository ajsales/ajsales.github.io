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
			coords: [115,812,138,785,118,771,149,752,237,596,380,454,457,449,602,429,726,384,827,401,901,468,912,535,944,536,959,623,937,649,1004,694,1001,740,893,732,846,711,830,759,781,725,697,713,629,711,609,760,548,785,511,780,427,851,392,897,572,873,671,886,712,901,815,901,846,947,846,970,138,973]
		},
		{
			name: 'Projects',
			shape: 'poly',
			coords: [871,257,1176,236,1182,489,906,495,893,455,874,432]
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
	let resizedCoords = coords.map(coord => coord * imgSize.width / 1536);

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