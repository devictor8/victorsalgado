import React from 'react';

import './Home.css';
import CVButton from '../CVButton/CVBbutton';

function Home() {
	return (
		<section id="1" className="home">
			<div className="home__content">
				<h1 className="home__title green-dot">Hello</h1>
				<h2 className="home__name">I&apos;m Victor Salgado</h2>
				<p className="home__ocupation">Front-end developer</p>
				<CVButton />
			</div>
		</section>
	);
}

export default Home;
