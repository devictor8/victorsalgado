import React, { useContext} from 'react';

import './NavBar.css';
import MenuContext from '../../context/MenuContext';

function NavBar() {
	const {isMenuOpen } = useContext(MenuContext);

	return (
		<nav className={`menu ${isMenuOpen? 'active-nav': ''}`}>
			<a href="#">Home</a>
			<a href="#">Sobre</a>
			<a href="#">Serviços</a>
			<a href="#">Portifólio</a>
			<a href="#">Contato</a>
		</nav>
	);
}

export default NavBar;
