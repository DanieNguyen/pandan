'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/NavBar';

export default function Page() {
	return (
		<main className='p-16 bg-stone-950 text-white'>
			<NavBar></NavBar>
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
			<div className='text-white mt-36 text-2xl font-sans leading-loose'>
				Work
			</div>
			<div className='grid grid-cols-3 gap-8'>
				<div className=''>
					<Image
						src='/images/zboom.svg'
						width={880}
						height={1000}
						alt='Laptop showing Crdit Boost landing page'
					/>
				</div>
				<div className=''>
					<Link href='/sonar'>
						<Image
							src='/images/sonar.svg'
							width={880}
							height={1000}
							alt='Laptop showing Crdit Boost landing page'
						/>
					</Link>
				</div>
				<div className=''>
					<Image
						src='/images/zpay.svg'
						width={880}
						height={1000}
						alt='Laptop showing Crdit Boost landing page'
					/>
				</div>
				<div className=''>
					<Link href='/poof'>
						<Image
							src='/images/poofhome.svg'
							width={880}
							height={1000}
							alt='Laptop showing Crdit Boost landing page'
						/>
					</Link>
				</div>
				<div className=''>
					<Link href='/spotify'>
						<Image
							src='/images/spothero.svg'
							width={880}
							height={1000}
							alt='Laptop showing Crdit Boost landing page'
						/>
					</Link>
				</div>
				<div className=''>
					<Link href='/threat'>
						<Image
							src='/images/threat.svg'
							width={880}
							height={1000}
							alt='Laptop showing Crdit Boost landing page'
						/>
					</Link>
				</div>
			</div>
		</main>
	);
}
