import { UpArrow } from './Arrow';
import { useEffect } from 'react';
import { motion, useScroll, useAnimationControls } from 'framer-motion';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
	if (!isBrowser()) return;
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTopContainerVariants = {
	hide: { opacity: 0 },
	show: { opacity: 1 },
};

export default function Top() {
	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();

	useEffect(() => {
		return scrollYProgress.on('change', (latestValue) => {
			if (latestValue > 0.1) {
				controls.start('show');
			} else {
				controls.start('hide');
			}
		});
	});
	return (
		<motion.button
			variants={ScrollToTopContainerVariants}
			animate={controls}
			initial='hide'
			className='w-12 h-12 fixed bottom-12 right-12 z-40 text-3xl flex justify-center items-center bg-white dark:bg-stone-900 rounded shadow-md border dark:hover:bg-stone-700 border-gray-300 hover:text-black dark:hover:text-white dark:text-stone-100 text-gray-400 hover:shadow-lg cursor-pointer'
			onClick={scrollToTop}>
			<UpArrow></UpArrow>
		</motion.button>
	);
}
