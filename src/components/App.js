import React from 'react';

import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Portfolio from './Portfolio';
import Footer from './Footer';

export default function App() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<AboutMe />
			<Experiences />
			<Portfolio />
			<Footer />
		</div>
	);
}