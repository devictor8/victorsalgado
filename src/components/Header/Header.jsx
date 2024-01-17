import React from 'react';

import './Header.css';
import logo from './logo_v.png';

function Header() {
	window.addEventListener('resize', () => {
		const width = window.innerWidth;
	});

	return (
		{
			width > 600 ? '': <CiMenuFries />
		}
		<header className="header">
			<img className="header__image" src={logo} alt="logo"/>
		</header>
	);
}

//https://www.treinaweb.com.br/assets/images/treinaweb-logo@2x.webp

export default Header;
