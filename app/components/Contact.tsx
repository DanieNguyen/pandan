import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	const y = useTransform(scrollYProgress, [0, 0.25], ['50%', '0%']);
	const yt = useTransform(scrollYProgress, [0, 0.4], ['100%', '0%']);
	const yf = useTransform(scrollYProgress, [0, 1], ['200%', '0%']);
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.4, 0.5, 1],
		[0, 0, 1, 1]
	);
	return (
		<motion.div
			ref={ref}
			style={{ y }}
			id='contact'
			className='relative h-[100vh] bg-black pr-8 pl-8'>
			<motion.div
				style={{ y: yt, opacity }}
				className='text-white pt-[20vh] text-[96px] tracking-tighter leading-relaxed col-span-12'>
				<motion.div className='mb-20'>
					<h1>LET&apos;S WORK TOGETHER</h1>
				</motion.div>
				<div className='flex flex-col gap-8'>
					<a
						className='group text-white text-4xl tracking-normal font-sans'
						href='mailto:danyen125@gmail.com'>
						<span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
							EMAIL &#x2197;
						</span>
					</a>
					<a
						className='group text-white text-4xl tracking-normal font-sans'
						href=''>
						<span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
							LINKEDIN &#x2197;
						</span>
					</a>
					<a
						className='group text-white text-4xl tracking-normal font-sans'
						href=''>
						<span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
							DRIBBBLE &#x2197;
						</span>
					</a>
					<a
						className='group text-white text-4xl tracking-normal font-sans mb-2'
						href=''>
						<span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
							INSTAGRAM &#x2197;
						</span>
					</a>
				</div>
			</motion.div>
			<motion.div
				style={{ y: yf }}
				className='text-white grid grid-cols-12 gap-4 w-full border-t-[1px] py-4'>
				<div className='col-span-2'>©PANDAN STUDIO</div>
				<div className='col-start-4 col-span-4'>
					DESIGNED & DEVELOPED BY DANIEL NGUYEN
				</div>
				<div className='col-start-11 col-span-2 text-right'>
					FONTS {'->'} INTER & SFITZIA
				</div>
			</motion.div>
		</motion.div>
	);
}
