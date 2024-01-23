import React from 'react';
import './Portifolio.css';
import imagem from '../../assets/images/img-teste.png';
import Carousel from '../Carousel/Carousel';

function Portifolio() {


	return (
		<section id="2" className="portifolio">
			<div className="portifolio__txt">
				<h1 className="green-dot">My projects</h1>
				<p>Projects on my GitHub</p>
			</div>
			<div className="portifolio__content">
				<div className="portifolio__image">
					<img src={imagem} alt="" />
				</div>
				<Carousel />
			</div>
		</section>
	);
}

export default Portifolio;
