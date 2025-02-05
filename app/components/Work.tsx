'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FilterButton from './FilterButton';

// Image data with tags, background colors, and class types
const images = [
	{
		src: '/images/homepage/zpay.png',
		tags: ['consumer', 'mobile', 'web'],
		bgColor: '#574CFA',
		classType: 'work-item-bg',
		alt: 'Phone payments',
		title: 'The Zebra',
		description: 'Insurance Checkout',
		subtitle: 'Easing customer worries when buying insurance',
		link: '/pay',
	},
	{
		src: '/images/homepage/sonar.svg',
		tags: ['enterprise', 'web'],
		bgColor: '#00B28B',
		classType: 'work-item-bg',
		alt: 'Data Discovery Dashboard',
		title: 'Rubrik',
		description: 'Data Discovery App',
		subtitle: 'Revamping a data security feature to drive user growth',
		link: '/sonar',
	},
	{
		src: '/images/homepage/zboom.jpg',
		tags: ['consumer', 'web'],
		bgColor: '#d8cdc2',
		classType: 'work-item-bg',
		alt: 'Laptop showing Credit Boost landing page',
		title: 'The Zebra',
		description: 'Credit Boost',
		subtitle: 'Launching a financial subscription from 0 to 1',
		link: '/boom',
	},
	{
		src: '/images/homepage/poofhome.png',
		tags: ['consumer', 'mobile', 'web'],
		bgColor: '#ECE6FE',
		classType: 'work-item-2nd',
		alt: 'Poof Website and App',
		title: 'Poof.cash',
		description: 'Web3 Crypto Wallet',
		subtitle: 'Building a secure wallet from scratch',
		link: '/poof',
	},
	{
		src: '/images/homepage/threat.png',
		tags: ['enterprise', 'web'],
		bgColor: '#1DA9DD',
		classType: 'work-item-2nd',
		alt: 'Threat Hunting designs',
		title: 'Rubrik',
		description: 'Threat Hunting',
		subtitle: 'Innovating data storage with a new security feature',
		link: '/threat',
	},
	{
		src: '/images/homepage/spotify.png',
		tags: ['consumer', 'mobile'],
		bgColor: '#1ED760',
		classType: 'work-item-2nd',
		alt: 'Spotify featured podcasts project',
		title: 'Spotify Podcasts',
		description: 'Redesign',
		subtitle: 'Helping listeners discover and try out new podcasts',
		link: '/spotify',
	},
];

const Work = () => {
	const [filter, setFilter] = useState('all');
	const [hideBackground, setHideBackground] = useState(false);

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
			'.button',
			{ opacity: 0 },
			{
				opacity: 1,
				delay: 1,
				duration: 0.4,
				ease: 'power1.out',
				stagger: 0.1,
			}
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
			scrollTrigger: {
				trigger: '.work-item-2nd',
				start: 'top bottom',
			},
			y: '-100%',
			duration: 0.6,
			ease: 'power1.out',
			stagger: 0.2,
		});
	}, []);

	const handleFilterChange = (newFilter: any) => {
		setFilter(newFilter);
		setHideBackground(true);
	};

	const filteredImages =
		filter === 'all'
			? images
			: images.filter((image) => image.tags.includes(filter));

	return (
		<main>
			<div className=''>
				<div className='work-title mt-16 lg:mt-32 2xl:mt-64 mb-4 lg:text-2xl 2xl:text-4xl font-sans leading-loose'>
					Work
				</div>
				<div className='flex mb-6 md:mb-8 flex-wrap gap-2 md:gap-4'>
					<FilterButton
						handleFilterChange={handleFilterChange}
						filter='all'
						currentFilter={filter}
						label='All'
					/>
					<FilterButton
						handleFilterChange={handleFilterChange}
						filter='mobile'
						currentFilter={filter}
						label='Mobile'
					/>

					<FilterButton
						handleFilterChange={handleFilterChange}
						filter='web'
						currentFilter={filter}
						label='Web'
					/>
					<FilterButton
						handleFilterChange={handleFilterChange}
						filter='consumer'
						currentFilter={filter}
						label='Consumer'
					/>
					<FilterButton
						handleFilterChange={handleFilterChange}
						filter='enterprise'
						currentFilter={filter}
						label='Enterprise'
					/>
				</div>
				<div className='grid md:grid-cols-3 gap-8 pb-16 md:pb-20'>
					{filteredImages.map((image, index) => (
						<div key={index}>
							<div className='relative overflow-hidden rounded work-item'>
								<div
									className={`w-full h-full absolute z-10 ${image.classType}`}
									style={{
										backgroundColor: image.bgColor,
										display: hideBackground
											? 'none'
											: 'block', // Hide background when a filter is applied
									}}></div>
								<Link href={image.link}>
									<Image
										src={image.src}
										width={880}
										height={1000}
										alt={image.alt}
										priority
										className='hover:scale-110 ease-out duration-1000'
									/>
								</Link>
							</div>
							<div className='my-6 w-full'>
								<div className='flex items-end justify-start gap-2'>
									<div className='12:text-xl lg:text xl:text-2xl 2xl:text-3xl font-normal'>
										{image.title}
									</div>
									<div className='12:text-xl lg:text xl:text-2xl 2xl:text-3xl text-stone-200 dark:text-stone-600'>
										|
									</div>
									<div className='12:text-[18px] lg:text xl:text-[22px] 2xl:text-[26px] font-normal font-serif italic leading-tight'>
										{image.description}
									</div>
								</div>
								<div className='text 2xl:text-xl mt-1 dark:text-stone-400 text-stone-600'>
									{image.subtitle}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='grid md:grid-cols-3 gap-8 pb-16 md:pb-20'>
				{filteredImages.map((image, index) => (
					<div key={index}>
						<div className='relative overflow-hidden rounded work-item'>
							<div
								className={`w-full h-full absolute z-10 ${image.classType}`}
								style={{
									backgroundColor: image.bgColor,
									display: hideBackground ? 'none' : 'block', // Hide background when a filter is applied
								}}></div>
							<Link href={image.link}>
								<Image
									src={image.src}
									width={880}
									height={1000}
									alt={image.alt}
									priority
									className='hover:scale-110 ease-out duration-1000'
								/>
							</Link>
						</div>
						<div className='my-6 w-full'>
							<div className='flex items-end justify-start gap-2'>
								<div className='12:text-xl lg:text xl:text-2xl 2xl:text-3xl font-normal'>
									{image.title}
								</div>
								<div className='12:text-xl lg:text xl:text-2xl 2xl:text-3xl text-stone-200 dark:text-stone-600'>
									|
								</div>
								<div className='12:text-[18px] lg:text xl:text-[22px] 2xl:text-[26px] font-normal font-serif italic leading-tight'>
									{image.description}
								</div>
							</div>
							<div className='text 2xl:text-xl mt-1 dark:text-stone-400 text-stone-600'>
								{image.subtitle}
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default Work;
