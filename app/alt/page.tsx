'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Statement from '../components/Statement';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
	return (
		<main className='bg-white scroll-smooth' id='home'>
			<div className='p-8 text-2xl md:hidden'>
				Please view on web for now. Mobile coming soon.
			</div>
			<div className='hidden md:block scroll-smooth'>
				<NavBar></NavBar>
				<ScrollBar></ScrollBar>
				<Hero></Hero>
				<Statement></Statement>
				<Carousel></Carousel>
				<Contact></Contact>
				<Analytics></Analytics>
			</div>
		</main>
	);
}
