import React from 'react';

import './Home.css';
import CVButton from '../CVButton/CVBbutton';

function Home() {
	return (
		<section className="home">
			<div className="home__content">
				<h1 className="home__title green-dot">Hello</h1>
				<h2 className="home__name">Eu sou Victor Salgado</h2>
				<p className="home__ocupation">Desevolvedor Front-end</p>
				<CVButton />
			</div>
		</section>
	);
}

export default Home;
