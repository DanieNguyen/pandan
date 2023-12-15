import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { DiagonalArrow } from '../components/Arrow';

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
		<div>
			<motion.div
				ref={ref}
				style={{ y }}
				id='contact'
				className='relative h-[100vh] bg-black pr-8 pl-8'>
				<motion.div
					style={{ y: yt, opacity }}
					className='text-white pt-[20vh] text-[10vh] tracking-tighter leading-relaxed col-span-12'>
					<motion.div className='mb-[12vh]'>
						<h1>LET&apos;S WORK TOGETHER</h1>
					</motion.div>
					<div className='flex flex-col gap-[2vh] text-white text-[4vh] tracking-normal font-sans'>
						<a
							className='max-w-fit'
							href='mailto:danyen125@gmail.com'>
							<span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								EMAIL <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
						<a
							className='max-w-fit'
							href='https://www.linkedin.com/in/pandang/'>
							<span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								LINKEDIN <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
						<a
							className='max-w-fit'
							href='https://dribbble.com/dangux'>
							<span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								DRIBBBLE <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
						<a
							className='max-w-fit'
							href='https://www.instagram.com/pandan.lion/'>
							<span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								INSTAGRAM <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
					</div>
				</motion.div>
			</motion.div>
			<div className='bottom-0 bg-black text-white grid grid-cols-12 gap-4 w-screen border-t-[1px] py-4 px-8'>
				<div className='col-span-2'>©PANDAN STUDIO</div>
				<div className='col-start-4 col-span-6'>
					DESIGNED & DEVELOPED BY DANIEL NGUYEN
				</div>
				<div className='col-start-10 col-span-3 text-right'>
					FONTS {'->'} INTER & SFITZIA
				</div>
			</div>
		</div>
	);
}
