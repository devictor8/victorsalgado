import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import MenuProvider from './context/MenuProvider';

function App() {
	return (
		<section>
			<MenuProvider>
				<NavBar />
				<Header />
			</MenuProvider>
			<Home />
		</section>
	);
}

export default App;
