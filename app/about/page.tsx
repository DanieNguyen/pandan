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
		<main className=''>
			<NavBar />
			<div className='flex flex-col md:flex-row md:justify-center gap-16 md:gap-32 pt-24'>
				<div className=''>
					<h1 className='font-serif italic text-4xl 2xl:text-6xl'>
						hey there~
					</h1>
					<p className='mt-4 text-xl'>
						I&apos;m Daniel, a product designer based in Seattle,
						WA. <br></br>I&apos;ve been working for 4+ years on
						consumer and enterprise projects<br></br> ranging from 0
						to 1 product launches and redesigning key user flows.
					</p>
					<p className='mt-4 text-xl'>
						I&apos;m looking to work where I can make a big impact
						on meaningful <br></br>products and grow alongside my
						coworkers.
					</p>
					<h3 className='font-serif italic text-2xl mt-12'>
						coffee chat topics I can contribute
					</h3>
					<ol className='mt-4 text-xl list-disc list-inside'>
						<li>
							my golden retriever, Nala (will share pics without
							being asked)
						</li>
						<li>sports - trade rumors, memes, and all</li>
						<li>latest restaurants and desserts</li>
						<li>Tiktok trends</li>
					</ol>
				</div>
				<Image
					src={About}
					width={360}
					height={500}
					alt='me'
					className='rounded object-contain'></Image>
			</div>
		</main>
	);
};

export default Page;
