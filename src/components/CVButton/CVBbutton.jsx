import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import './CVBbutton.css';
function CVButton() {
	return (
		<button className="button__CV"> <FaFileDownload />Download CV</button>
	);
}

export default CVButton;
