'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '../../public/images/about.png';

const Page = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.main-content',
			{ y: '10%', opacity: 0 },
			{ y: '0%', opacity: 1, delay: 0.4, duration: 1, ease: 'power1.out' }
		);
	}, []);

	return (
		<main className='text-white h-[100vh] bg-stone-900'>
			<NavBar />
			<div className='m-24 flex justify-center main-content'>
				<div className='mr-32'>
					<h1 className='font-serif italic text-4xl'>hey there~</h1>
					<p className='mt-4 text-xl'>
						I'm Daniel, a product designer based in Seattle, WA.{' '}
						<br></br>I've been working for 4 years on consumer and
						enterprise projects<br></br> ranging from 0 to 1 product
						launches and redesigning key user flows.
					</p>
					<p className='mt-4 text-xl'>
						I'm looking to work where I can make a big impact on
						meaningful <br></br>products and grow alongside my
						coworkers.
					</p>
					<h3 className='font-serif italic text-2xl mt-12'>
						coffee chat topics I can contribute
					</h3>
					<ol className='mt-4 text-xl list-disc'>
						<li>
							my golden retriever, Nala (will share pics without
							being asked)
						</li>
						<li>sports - trade rumors, memes, and all</li>
						<li>foodie spots</li>
						<li>Tiktok trends</li>
						<li>silly random questions I find online</li>
					</ol>
				</div>
				<Image
					src={About}
					width={340}
					height={400}
					alt='me'
					className='rounded'></Image>
			</div>
		</main>
	);
};

export default Page;
