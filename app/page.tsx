'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/NavBar';
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion';

export default function Page() {
	return (
		<main className='text-white'>
			<NavBar></NavBar>
			<motion.div
				initial={{ y: '10%', opacity: 0 }}
				animate={{ y: '0%', opacity: 100 }}
				transition={{
					delay: 0.4,
					ease: [0.2, -0.6, 0.01, 0.4],
					duration: 1,
				}}>
				<div className='mx-16'>
					<div className='w-3/4 mt-60 leading-[64px]'>
						<span className='text-white text-5xl'>
							Currently helping people save money at
						</span>
						<span className='text-[#574CFA] text-[44px] font-serif italic'>
							{' '}
							<a
								href='www.thezebra.com'
								target='_blank'
								className='cursor-zebra'>
								The Zebra
							</a>{' '}
						</span>
						<span className='text-white text-5xl'>
							Previously crafting data security tools at
						</span>
						<span className='bg-gradient-to-r from-[#00B28B] via-[#00A9BD] to-[#00A3DF] text-transparent bg-clip-text text-[44px] font-serif italic'>
							{' '}
							<a
								href='www.rubrik.com'
								target='_blank'
								className='cursor-rubrik'>
								Rubrik
							</a>{' '}
						</span>
						<br></br>
						<span className='text-white text-5xl'>
							and a Web3 crypto app at{' '}
						</span>
						<span className='text-[#5352FC] text-[44px] font-serif italic hover:cursor-poof'>
							Poof.Cash.
						</span>
					</div>
				</div>
			</motion.div>
			<div className='mx-16'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 100 }}
					transition={{
						delay: 0.8,
						ease: [0.2, -0.6, 0.01, 0.4],
						duration: 0.6,
					}}
					className='text-white mt-32 mb-8 text-3xl font-sans leading-loose'>
					Work
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 100 }}
					transition={{
						delay: 1,
						ease: [0.6, 0.4, 0.2, 0.1],
						duration: 0.6,
					}}
					className='grid grid-cols-3 gap-8'>
					<div className='relative overflow-hidden rounded'>
						<motion.div
							initial={{ y: 0 }}
							animate={{ y: '-100%' }}
							transition={{
								delay: 1.6,
								duration: 0.6,
							}}
							className='bg-[#d8cdc2] w-full h-full absolute z-10'></motion.div>
						<Image
							src='/images/zboom.svg'
							width={880}
							height={1000}
							priority
							alt='Laptop showing Crdit Boost landing page'
						/>
					</div>
					<div className='relative overflow-hidden rounded'>
						<motion.div
							initial={{ y: 0 }}
							animate={{ y: '-100%' }}
							transition={{
								delay: 1.8,
								duration: 0.6,
							}}
							className='bg-[#00B28B] w-full h-full absolute z-10'></motion.div>
						<Link href='/sonar'>
							<Image
								src='/images/sonar.svg'
								width={880}
								height={1000}
								priority
								alt='Laptop showing Crdit Boost landing page'
							/>
						</Link>
					</div>
					<div className='relative overflow-hidden rounded'>
						<motion.div
							initial={{ y: 0 }}
							animate={{ y: '-100%' }}
							transition={{
								delay: 2,
								duration: 0.6,
							}}
							className='bg-[#574CFA] w-full h-full absolute z-10'></motion.div>{' '}
						<Image
							src='/images/zpay.svg'
							width={880}
							height={1000}
							priority
							alt='Laptop showing Crdit Boost landing page'
						/>
					</div>
					<div className='relative overflow-hidden rounded'>
						<Link href='/poof'>
							<motion.div
								initial={{ y: 0 }}
								whileInView={{ y: '-100%' }}
								transition={{
									duration: 0.6,
								}}
								className='bg-[#ECE6FE] w-full h-full absolute z-10'></motion.div>{' '}
							<Image
								src='/images/poofhome.svg'
								width={880}
								height={1000}
								alt='Laptop showing Crdit Boost landing page'
							/>
						</Link>
					</div>
					<div className='relative overflow-hidden rounded'>
						<Link href='/threat'>
							<motion.div
								initial={{ y: 0 }}
								whileInView={{ y: '-100%' }}
								transition={{
									delay: 0.2,
									duration: 0.6,
								}}
								className='bg-[#1DA9DD] w-full h-full absolute z-10'></motion.div>{' '}
							<Image
								src='/images/threat.svg'
								width={880}
								height={1000}
								alt='Laptop showing Crdit Boost landing page'
							/>
						</Link>
					</div>
					<div className='relative overflow-hidden rounded'>
						<Link href='/spotify'>
							<motion.div
								initial={{ y: 0 }}
								whileInView={{ y: '-100%' }}
								transition={{
									delay: 0.4,
									duration: 0.6,
								}}
								className='bg-[#1ED760] w-full h-full absolute z-10'></motion.div>{' '}
							<Image
								src='/images/spothero.svg'
								width={880}
								height={1000}
								alt='Laptop showing Crdit Boost landing page'
							/>
						</Link>
					</div>
				</motion.div>
			</div>
		</main>
	);
}
