import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/logo_v.png';
import MenuContext from '../../context/MenuContext';
import { CiMenuFries } from 'react-icons/ci';

function Header() {
	const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
	const [windowWitdth, setWindowWidth] = useState(window.innerWidth);
	const handleMenu = () => setIsMenuOpen(!isMenuOpen);
	
	window.addEventListener('resize', () => {
		setWindowWidth(window.innerWidth);
	});


	return (
		<header className="header">
			<img className="header__image" src={logo} alt="logo"/>
			{windowWitdth <= 600? <CiMenuFries onClick={handleMenu} className="menu__icon"/> : ''}
		</header>
	);
}

//https://www.treinaweb.com.br/assets/images/treinaweb-logo@2x.webp

export default Header;
