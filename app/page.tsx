'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/NavBar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			'.main-content',
			{ y: '10%', opacity: 0 },
			{ y: '0%', opacity: 1, delay: 0.4, duration: 1, ease: 'power1.out' }
		);

		gsap.fromTo(
			'.work-title',
			{ opacity: 0 },
			{ opacity: 1, delay: 0.8, duration: 0.6, ease: 'power1.out' }
		);

		gsap.fromTo(
			'.work-item',
			{ opacity: 0 },
			{
				opacity: 1,
				delay: 1,
				duration: 0.6,
				ease: 'power3.in',
			}
		);

		gsap.to('.work-item-bg', {
			y: '-100%',
			delay: 1.6,
			duration: 0.6,
			ease: 'power1.out',
			stagger: 0.2,
		});

		gsap.to('.work-item-2nd', {
			scrollTrigger: '.work-item-2nd',
			y: '-100%',
			duration: 0.6,
			ease: 'power1.out',
			stagger: 0.2,
		});
	}, []);

	return (
		<main className='text-white bg-stone-900'>
			<NavBar></NavBar>
			<div className='main-content'>
				<div className='mx-16'>
					<div className='mac:w-4/5 w-full mt-44 leading-[64px]'>
						<span className='text-white text-5xl'>
							Currently helping people save money at
						</span>
						<span className='text-[#574CFA] text-[44px] font-serif italic'>
							{' '}
							<a
								href='https://www.thezebra.com'
								target='_blank'
								rel='noopener noreferrer'
								className='cursor-zebra'>
								The Zebra.
							</a>{' '}
						</span>
						<span className='text-white text-5xl'>
							Previously crafting data security tools at
						</span>
						<span className='bg-gradient-to-r from-[#00B28B] via-[#00A9BD] to-[#00A3DF] text-transparent bg-clip-text text-[44px] font-serif italic'>
							{' '}
							<a
								href='https://www.rubrik.com'
								target='_blank'
								rel='noopener noreferrer'
								className='cursor-rubrik'>
								Rubrik
							</a>{' '}
						</span>
						<br />
						<span className='text-white text-5xl'>
							and a Web3 crypto app at{' '}
						</span>
						<span className='text-[#5352FC] text-[44px] font-serif italic hover:cursor-poof'>
							Poof.Cash.
						</span>
					</div>
				</div>
			</div>
			<div className='mx-16'>
				<div className='work-title text-white mt-36 mb-8 text-3xl font-sans leading-loose'>
					Work
				</div>
				<div className='grid grid-cols-3 gap-8 pb-24'>
					<div className='relative overflow-hidden rounded work-item'>
						<div className='bg-[#d8cdc2] w-full h-full absolute z-10 work-item-bg'></div>
						<Image
							src='/images/homepage/zboom.jpg'
							width={880}
							height={1000}
							priority
							alt='Laptop showing Credit Boost landing page'
						/>
						<div className='my-6 w-full'>
							<div className='flex items-end justify-start gap-2'>
								<div className='text-2xl font-normal'>
									The Zebra
								</div>
								<div className='text-2xl'>|</div>
								<div className='text-[22px] font-normal font-serif italic leading-tight'>
									Credit Boost
								</div>
							</div>

							<div className='text-xl mt-1 text-stone-300'>
								Launching a financial subscription from 0 to 1
							</div>
						</div>
					</div>
					<div className='relative overflow-hidden rounded work-item'>
						<div className='bg-[#00B28B] w-full h-full absolute z-10 work-item-bg'></div>
						<Link href='/sonar'>
							<Image
								src='/images/homepage/sonar.svg'
								width={880}
								height={1000}
								priority
								alt='Data Discovery Dashboard'
							/>
						</Link>
						<div className='my-6 w-full'>
							<div className='flex items-end justify-start gap-2'>
								<div className='text-2xl font-normal'>
									Rubrik
								</div>
								<div className='text-2xl'>|</div>
								<div className='text-[22px] font-normal font-serif italic leading-tight'>
									Data Discovery App
								</div>
							</div>

							<div className='text-xl mt-1 text-stone-300'>
								Revamping a data security feature to drive user
								growth
							</div>
						</div>
					</div>
					<div className='relative overflow-hidden rounded work-item'>
						<div className='bg-[#574CFA] w-full h-full absolute z-10 work-item-bg'></div>
						<Image
							src='/images/homepage/zpay.png'
							width={880}
							height={1000}
							priority
							alt='Phone payments'
						/>
						<div className='my-6 w-full'>
							<div className='flex items-end justify-start gap-2'>
								<div className='text-2xl font-normal'>
									The Zebra
								</div>
								<div className='text-2xl'>|</div>
								<div className='text-[22px] font-normal font-serif italic leading-tight'>
									Payment and Checkout{' '}
								</div>
							</div>

							<div className='text-xl mt-1 text-stone-300'>
								Easing customer worries when buying insurance
							</div>
						</div>
					</div>
					<div className='relative overflow-hidden rounded'>
						<div className='bg-[#ECE6FE] w-full h-full absolute z-10 work-item-2nd'></div>
						<Link href='/poof'>
							<Image
								src='/images/homepage/poofhome.png'
								width={880}
								height={1000}
								alt='Poof Website and App'
							/>
						</Link>
						<div className='my-6 w-full'>
							<div className='flex items-end justify-start gap-2'>
								<div className='text-2xl font-normal'>
									Poof.cash
								</div>
								<div className='text-2xl'>|</div>
								<div className='text-[22px] font-normal font-serif italic leading-tight'>
									Web3 Crypto Wallet{' '}
								</div>
							</div>

							<div className='text-xl mt-1 text-stone-300'>
								Building a secure wallet from scratch{' '}
							</div>
						</div>
					</div>
					<div className='relative overflow-hidden rounded'>
						<div className='bg-[#1DA9DD] w-full h-full absolute z-10 work-item-2nd'></div>
						<Link href='/threat'>
							<Image
								src='/images/homepage/threat.png'
								width={880}
								height={1000}
								alt='Threat Hunting designs'
							/>
						</Link>
						<div className='my-6 w-full'>
							<div className='flex items-end justify-start gap-2'>
								<div className='text-2xl font-normal'>
									Rubrik{' '}
								</div>
								<div className='text-2xl'>|</div>
								<div className='text-[22px] font-normal font-serif italic leading-tight'>
									Threat Hunting{' '}
								</div>
							</div>

							<div className='text-xl mt-1 text-stone-300'>
								Innovating data storage with a new security
								feature
							</div>
						</div>
					</div>
					<div className='relative overflow-hidden rounded'>
						<div className='bg-[#1ED760] w-full h-full absolute z-10 work-item-2nd'></div>
						<Link href='/spotify'>
							<Image
								src='/images/homepage/spotify.png'
								width={880}
								height={1000}
								alt='Spotify featured podcasts project'
							/>
						</Link>
						<div className='my-6 w-full'>
							<div className='flex items-end justify-start gap-2'>
								<div className='text-2xl font-normal'>
									Spotify Podcasts
								</div>
								<div className='text-2xl'>|</div>
								<div className='text-[22px] font-normal font-serif italic leading-tight'>
									Redesign
								</div>
							</div>

							<div className='text-xl mt-1 text-stone-300'>
								Helping listeners discover and try out new
								podcasts
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Page;
