import React from 'react';

import { withSize } from 'react-sizeme';

import backgroundImg from '../images/background.gif';

function BackgroundImage() {
	return (
		<img
			className="BackgroundImage"
			src={backgroundImg}
			alt="Person sleeping at desk"
			useMap="#image-map" 
		/>
	);
}

export default withSize()(BackgroundImage);