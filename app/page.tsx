'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/NavBar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from './components/Contact';
import Headline from './components/Headline';
import FilterButton from './components/FilterButton';
import Work from './components/Work';
import Top from './components/Top';

const Page = () => {
	return (
		<main className=''>
			<NavBar />
			<Headline></Headline>
			<Work></Work>
			<Contact></Contact>
			<Top></Top>
		</main>
	);
};

export default Page;
