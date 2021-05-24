import React from 'react';

import ImageMap from './ImageMap';
import BottomPanel from './BottomPanel';

export default function App() {

	return (
		<div className="window">
			<ImageMap />
			<BottomPanel />
		</div>
	);
}