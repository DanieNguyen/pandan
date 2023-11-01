import { motion } from 'framer-motion';
import Link from 'next/link';
import Clock from 'react-live-clock';

export default function NavBar() {
	return (
		<motion.div
			initial={{ y: '-25%', opacity: 0 }}
			animate={{ y: '0%', opacity: 100 }}
			transition={{
				delay: 0.8,
				ease: [0.6, -0.4, 0.01, 0.9],
				duration: 1,
			}}
			className='scroll-smooth sticky top-0 z-20 text-white mix-blend-difference pt-8 px-8 grid grid-cols-12 gap-4 w-full'>
			<div className='col-span-2'>
				<Link
					href='#home'
					className='font-semibold tracking-tight text-sm 2xl:text-xl hover:text-[#767676]'>
					DANIEL NGUYEN
				</Link>
			</div>
			<div className='col-start-5 col-end-8 text-sm 2xl:text-xl font-medium tracking-tight'>
				<Link href='#work' className='pr-16 hover:text-[#767676]'>
					WORK
				</Link>
				<Link
					href='/images/DanielNResume.pdf'
					target='_blank'
					className='pr-16 hover:text-[#767676]'>
					RESUME
				</Link>
				<Link href='#contact' className='pr-16 hover:text-[#767676]'>
					CONTACT
				</Link>
				<Link href='' className='hover:text-[#767676]'>
					ABOUT
				</Link>
			</div>
			<div className='col-span-2 col-start-11 text-sm 2xl:text-xl'>
				<div className='flex flex-row justify-end w-full mb-4'>
					<p className='pr-1'>SEATTLE /</p>
					<Clock
						format={'h:mm:ss A'}
						timezone={'US/Pacific'}
						ticking={true}
					/>
				</div>
				<div className='flex flex-row justify-end w-full'>
					<p className='pr-1'>DA NANG /</p>
					<Clock
						format={'h:mm:ss A'}
						timezone={'Asia/Saigon'}
						ticking={true}
					/>
				</div>
			</div>
		</motion.div>
	);
}
