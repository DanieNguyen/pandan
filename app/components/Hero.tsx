import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end', 'end start'],
	});
	const xd = useTransform(
		scrollYProgress,
		[0, 0.7, 0.85, 1],
		['0%', '25%', '32%', '40%']
	);
	const xn = useTransform(
		scrollYProgress,
		[0, 0.7, 0.85, 1],
		['0%', '-25%', '-32%', '-40%']
	);
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.8, 0.9, 1],
		[, 1, 0.2, 0]
	);
	const opal = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
	{
		/*
	useMotionValueEvent(scrollY, 'change', (latest) => {
		const prev = scrollY.getPrevious();
		console.log(latest, prev);
	});*/
	}

	return (
		<div className='hidden md:block h-screen z-10'>
			<div ref={ref} className='absolute bottom-8 left-8'>
				<motion.div style={{ x: xd, opacity: opal }}>
					<motion.div
						initial={{ y: 40, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							ease: [0.6, -0.4, 0.01, 0.9],
							duration: 1.4,
							delay: 0.6,
						}}
						className='ml-3 w-[20vw] text-[2vh]'>
						SENIOR PRODUCT DESIGNER PREVIOUSLY AT{' '}
						<span className='font-semibold'>RUBRIK</span> &{' '}
						<span className='font-semibold'>GARMIN</span>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ y: 200 }}
					animate={{ y: 0 }}
					transition={{
						ease: [0.6, -0.4, 0.01, 0.9],
						duration: 1.2,
					}}
					style={{ x: xd, opacity }}
					className='text-[20vh] text-white mix-blend-difference mt-8 leading-none font-medium tracking-tighter'>
					DANIEL
				</motion.div>
			</div>
			<div className='absolute grid justify-items-end bottom-8 right-8'>
				<motion.div
					className='flex justify-end'
					style={{ x: xn, opacity: opal }}>
					<motion.div
						initial={{ y: 40, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							ease: [0.6, -0.4, 0.01, 0.9],
							duration: 1.4,
							delay: 0.6,
						}}
						className='w-[30vw] text-[2vh] text-right'>
						DESIGNING EXPERIENCES TO MAKE DREAMS COME TRUE & LOOKING
						FORWARD TO WORKING WITH YOU
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ y: 200 }}
					animate={{ y: 0 }}
					transition={{
						ease: [0.6, -0.4, 0.01, 0.9],
						duration: 1.2,
					}}
					style={{ x: xn, opacity }}
					className='text-[20vh] text-white mix-blend-difference leading-none mt-8 font-medium tracking-tighter'>
					NGUYEN
				</motion.div>
			</div>
		</div>
	);
}
