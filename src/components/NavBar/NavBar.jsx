import React, { useContext} from 'react';

import './NavBar.css';
import MenuContext from '../../context/MenuContext';

function NavBar() {
	const {setIsMenuOpen, isMenuOpen } = useContext(MenuContext);
	
	const handleMenu = () => setIsMenuOpen(!isMenuOpen);
	
	return (
		<nav onClick={handleMenu} className={`menu ${isMenuOpen? 'active-nav': ''}`}>
			<a style={{animationDelay: '0.1s'}} href="#">Home</a>
			<a style={{animationDelay: '0.3s'}} href="#">Sobre</a>
			<a style={{animationDelay: '0.6s'}} href="#">Serviços</a>
			<a style={{animationDelay: '0.9s'}} href="#">Portifólio</a>
			<a style={{animationDelay: '1.2s'}} href="#">Contato</a>
		</nav>
	);
}

export default NavBar;
