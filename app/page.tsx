'use client'; // This is a client component 👈🏽
import ScrollBar from './components/ScrollBar';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Carousel from './components/Carousel';
import Contact from './components/Contact';

export default function Home() {
	return (
		<main className='bg-white' id='home'>
			<NavBar></NavBar>
			<ScrollBar></ScrollBar>
			<Hero></Hero>
			<Statement></Statement>
			<Carousel></Carousel>
			<Contact></Contact>
		</main>
	);
}
