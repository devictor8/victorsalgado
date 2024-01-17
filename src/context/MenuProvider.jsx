import React, { useState } from 'react';
import MenuContext from './MenuContext';
import propTypes from 'prop-types';
function MenuProvider({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const value = {
		isMenuOpen, 
		setIsMenuOpen
	};

	return (
		<MenuContext.Provider value={ value } >
			{children}
		</MenuContext.Provider>
	);
}

export default MenuProvider;

MenuProvider.propTypes = {
	children: propTypes.any,
}.isRequired;
