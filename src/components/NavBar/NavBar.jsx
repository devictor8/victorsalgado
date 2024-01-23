import React, { useContext } from 'react';

import './NavBar.css';
import MenuContext from '../../context/MenuContext';

function NavBar() {
	const {isMenuOpen } = useContext(MenuContext);

	return (
		<nav className={`menu ${isMenuOpen? 'active-nav': ''}`}>
			<a href="#1">Home</a>
			<a href="#2">My Projects</a>
			<a href="#">Services</a>
			<a href="#">Resume</a>
			<a href="#">Contact</a>
		</nav>
	);
}

export default NavBar;
