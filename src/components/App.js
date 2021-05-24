import React from 'react';

import ImageMap from './ImageMap';
import SidePanel from './SidePanel';

export default function App() {

	return (
		<div className="window">
			<ImageMap />
			<SidePanel />
		</div>
	);
}