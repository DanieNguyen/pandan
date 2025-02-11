import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ScrollBar() {
	const progressBar = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(progressBar.current, {
			scaleX: 1,
			ease: 'none',
			transformOrigin: 'left center',
			scrollTrigger: {
				trigger: 'body',
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
		});
	}, []);

	return (
		<div
			ref={progressBar}
			className='fixed top-0 left-0 right-0 h-1 bg-black dark:bg-white z-10'
			style={{ transform: 'scaleX(0)' }}
		/>
	);
}
