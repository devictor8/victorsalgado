import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo_v.png';

import { CiMenuFries } from 'react-icons/ci';
import MenuContext from '../../context/MenuContext';

function Header() {
	const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
	const [windowWitdth, setWindowWidth] = useState(window.innerWidth);
	const handleMenu = () => setIsMenuOpen(!isMenuOpen);

	window.addEventListener('resize', () => {
		setWindowWidth(window.innerWidth);
	});


	return (
		<header className="header">
			<img className="header__image" src={logo} alt="logo" />
			{windowWitdth <= 750 ? <CiMenuFries onClick={handleMenu} className="menu__icon" /> : ''}
		</header>
	);
}


export default Header;
