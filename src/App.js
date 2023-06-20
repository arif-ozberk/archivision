import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

// Styles
import './App.css';

// Components
import WelcomePage from './components/WelcomePage';
import Loader from './components/Loader';
import About from './components/About';
import Info from './components/Info';
import Stats from './components/Stats';
import Options from './components/Options';
import Pricing from './components/Pricing';
import Categories from './components/Categories';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoad(true);
		}, 3000)
	}, []);


	return (
		<div className="App" style={{ height: isLoad ? "fit-content" : "100vh", overflowY: isLoad ? "" : "hidden" }}>
			<Loader />
			<WelcomePage isLoad={isLoad} />
			<About />
			<Info />
			<Stats />
			<Options />
			<Pricing />
			<Categories />
			<Comments />
			<Contact />
			<Footer />
			<Link 
				className="backToTop"
				to="home"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			><i className='fas fa-chevron-up'></i></Link>
		</div>
	);
}

export default App;
