'use client';
import { DiagonalArrow } from '../components/Arrow';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const Contact = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.start', {
			scrollTrigger: {
				trigger: '.trig',
			},
			opacity: '100%',
			duration: 1,
			ease: 'power1.out',
		});
	}, []);

	return (
		<div>
			<div
				id='contact'
				className='relative text-stone-800 dark:text-white'>
				<div className='pt-12 text-4xl md:text-6xl leading-relaxed start'>
					<div className='pb-12 md:pb-24'>
						<span>Let&apos;s work</span>
						<span className='font-serif italic'> together</span>
						<p className='text-xl trig'>
							We can round some rectangles
						</p>
					</div>
					<div className='flex flex-col gap-8 text-4xl font-sans mb-28'>
						<a
							className='max-w-fit'
							href='mailto:danyen125@gmail.com'>
							<span className='font-serif italic bg-left-bottom bg-gradient-to-r dark:from-white from-stone-800 dark:to-white to-stone-900  bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								Email <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
						<a
							className='max-w-fit'
							href='https://www.linkedin.com/in/pandang/'>
							<span className='font-serif italic bg-left-bottom bg-gradient-to-r dark:from-white from-stone-800 dark:to-white to-stone-900  bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								Linkedin <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
						<a className='max-w-fit' href='/images/Daniel-Res.pdf'>
							<span className='font-serif italic bg-left-bottom bg-gradient-to-r dark:from-white from-stone-800 dark:to-white to-stone-900  bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								Resume <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
						<a
							className='max-w-fit'
							href='https://dribbble.com/dangux'>
							<span className='font-serif italic bg-left-bottom bg-gradient-to-r dark:from-white from-stone-800 dark:to-white to-stone-900  bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								Dribbble <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
					</div>
				</div>
			</div>
			<div className='bottom-0 border-t-[1px] py-4 flex flex-row justify-between text-xs md:text-base'>
				<div className=''>
					designed and developed by daniel with tears
				</div>
				<div className=''>© pandan studio</div>
			</div>
		</div>
	);
};

export default Contact;
