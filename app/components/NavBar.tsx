'use client';
import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Sunglasses, MoonStars } from '@phosphor-icons/react';

const NavBar = () => {
	const [theme, setTheme] = useState('dark');

	useLayoutEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.toggle(
				'dark',
				savedTheme === 'dark'
			);
		} else {
			// Ensure dark mode is set by default
			document.documentElement.classList.add('dark');
		}
		console.log('Initial theme:', savedTheme || 'dark');
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
		localStorage.setItem('theme', newTheme);
		console.log('Theme toggled to:', newTheme);
	};

	useLayoutEffect(() => {
		gsap.fromTo(
			'.navbar',
			{ y: '-25%', opacity: 0 },
			{
				y: '0%',
				opacity: 1,
				delay: 0.4,
				duration: 0.4,
				ease: 'power1.out',
			}
		);
	}, []);

	return (
		<div className='navbar flex justify-between flex-col md:flex-row my-6 md:my-12'>
			<div className='md:text-xl'>
				<Link
					href='/'
					passHref
					className='hover:text-blue-600 dark:hover:text-blue-500'>
					Daniel Nguyen
				</Link>
			</div>
			<div className='justify-between items-center gap-6 md:gap-16 flex'>
				<div className=''>
					<a
						href='/images/Daniel-Res.pdf'
						className='hover:text-blue-500 dark:hover:text-blue-500'
						target='_blank'
						rel='noopener noreferrer'>
						Resume
					</a>
				</div>
				<div className=''>
					<Link
						href='/about'
						passHref
						className='hover:text-blue-600 dark:hover:text-blue-500'>
						About
					</Link>
				</div>
				<div className='hover:text-blue-600 dark:hover:text-blue-500'>
					<Link href='/#contact'>Contact</Link>
				</div>

				<button
					onClick={toggleTheme}
					className='flex items-center px-2 py-2 dark:text-stone-50 dark:bg-stone-800 text-stone-800 bg-stone-100 rounded'>
					{theme === 'dark' ? (
						<Sunglasses size={24} className='' />
					) : (
						<MoonStars size={24} className='' />
					)}
				</button>
			</div>
		</div>
	);
};

export default NavBar;
