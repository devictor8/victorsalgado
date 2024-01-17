import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';


function App() {
	return (
		<section>
			<NavBar />
			<Header />
			<Home />
		</section>
	);
}

export default App;
