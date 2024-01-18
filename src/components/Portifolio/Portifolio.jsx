import React, { useEffect, useState } from 'react';
import RepoCard from '../RepoCard/RepoCard';
import './Portifolio.css';
import fetchRepos from '../../api/fetchRepos';
import imagem from '../../images/img-teste.png';
function Portifolio() {
	const [dataRepo, setDataRepo] = useState([]);
	useEffect(()=> {
		fetchRepos().then((response) => {
			setDataRepo(response);
		});
	}, []);

	return (
		<section id="2" className="portifolio">
			<h1  className="portifolio__title green-dot">My projects</h1>
			<div className="portifolio__content">
				<div className="portifolio__image">
					<img src={imagem} alt="" />
				</div>
				<div className="portifolio__repo-card">
					{
						dataRepo.map((repo) => {
							const name = repo.name;
							if(repo.license != null) {
								return <RepoCard key={repo.id} data = {{name, repo}}/>;
							}
						})
					}
				</div>
			</div>
		</section>
	);
}

export default Portifolio;
