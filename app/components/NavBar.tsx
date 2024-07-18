import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NavBar() {
	return (
		<motion.div
			initial={{ y: '-25%', opacity: 0 }}
			animate={{ y: '0%', opacity: 100 }}
			transition={{
				delay: 0.4,
				ease: [0.6, -0.4, 0.01, 0.9],
				duration: 0.4,
			}}
			className='flex justify-between m-16'>
			<div className='text-xl leading-normal'>
				<Link href='/' className='hover:text-blue-600'>
					Daniel Nguyen
				</Link>
			</div>
			<div className='justify-start items-center gap-16 flex'>
				<div className='text-base leading-normal'>
					<a
						href='/images/resume.pdf'
						className='hover:text-blue-600'
						target='_blank'>
						Resume
					</a>
				</div>
				<div className='text-base leading-normal'>About</div>
				<div className='text-base leading-normal hover:text-blue-600'>
					<a href='mailto:danyen125@gmail.com'>Contact</a>
				</div>
			</div>
		</motion.div>
	);
}
