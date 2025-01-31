'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const NavBar = () => {
	useEffect(() => {
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
		<div className='navbar flex justify-between pt-12'>
			<div className='md:text-xl leading-normal'>
				<Link
					href='/'
					passHref
					className='hover:text-blue-600 dark:hover:text-blue-500'>
					Daniel Nguyen
				</Link>
			</div>
			<div className='justify-start items-center gap-4 md:gap-16 flex'>
				<div className='text-base leading-normal'>
					<a
						href='/images/Daniel-Res.pdf'
						className='hover:text-blue-500 dark:hover:text-blue-500'
						target='_blank'
						rel='noopener noreferrer'>
						Resume
					</a>
				</div>
				<div className='text-base leading-normal'>
					<Link
						href='/about'
						passHref
						className='hover:text-blue-600'>
						About
					</Link>
				</div>
				<div className='text-base leading-normal hover:text-blue-600 dark:hover:text-blue-500'>
					<Link href='/#contact'>Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
