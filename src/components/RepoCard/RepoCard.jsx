import React from 'react';
import propTypes from 'prop-types';
import './RepoCard.css';
import { DiGithubBadge } from 'react-icons/di';

function RepoCard({ data }) {
	console.log(data);
	const { name, repo } = data;
	const { description, language, html_url } = repo;
	return (
		<section className="card">
			<div  className="card__header">
				<h1 className="card__title green-dot">{name}</h1>
				<a className="git-icon" href={html_url} target="_blank" rel="noreferrer"><DiGithubBadge /></a>
			</div>
			<p  className="card__descripition">{description}</p>
			<p className="card__language">Language: {language}</p>
		</section>
	);
}

export default RepoCard;

RepoCard.propTypes = {
	data: propTypes.any,
}.isRequired;
