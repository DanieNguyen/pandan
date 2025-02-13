import { UpArrow } from './Arrow';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
	if (!isBrowser()) return;
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Top() {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const button = buttonRef.current;
		if (!button) return;

		// Initially hide the button
		gsap.set(button, { opacity: 0 });

		ScrollTrigger.create({
			start: '5% top',
			onUpdate: (self) => {
				// Show/hide button based on scroll position
				gsap.to(button, {
					opacity: self.progress > 0 ? 1 : 0,
					duration: 0.3,
				});
			},
		});
	}, []);

	return (
		<button
			ref={buttonRef}
			className='w-12 h-12 fixed bottom-6 right-6 md:bottom-12 md:right-12 z-40 text-3xl flex justify-center items-center bg-white dark:bg-stone-900 rounded shadow-md border dark:hover:bg-stone-700 border-gray-300 hover:text-black dark:hover:text-white dark:text-stone-100 text-gray-400 hover:shadow-lg cursor-pointer'
			onClick={scrollToTop}>
			<UpArrow></UpArrow>
		</button>
	);
}
