import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { DownArrow } from './Arrow';

function MainGrid({ children }: any) {
	return <div className='md:mt-24'>{children}</div>;
}

function TwoImages({ children }: any) {
	return (
		<div className='mt-8 md:mt-16 grid md:grid-cols-2 gap-4'>
			{children}
		</div>
	);
}

const Hero = ({
	src,
	alt,
	headline,
	priority = false,
	loading = 'lazy',
}: {
	src: ImageProps['src'];
	alt: string;
	headline: string;
	priority?: boolean;
	loading?: 'lazy' | 'eager';
}) => {
	const heroRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const hero = heroRef.current;
		if (!hero) return;

		gsap.fromTo(
			hero,
			{
				y: '10%',
				opacity: 0,
			},
			{
				y: '0%',
				opacity: 1,
				duration: 0.6,
				ease: 'power2.out',
			}
		);
	}, []);

	return (
		<div ref={heroRef} className='mt-16 lg:mt-32'>
			<h1 className='text-4xl lg:text-7xl mb-6'>{headline}</h1>
			<Image
				className='h-full w-full object-contain bg-zinc-100'
				src={src}
				quality={75}
				placeholder='blur'
				priority={priority}
				loading={loading}
				alt={alt}></Image>
		</div>
	);
};

function Text(props: any) {
	return (
		<div className='mx-auto md:w-2/5'>
			<div className='text-xl md:text-2xl mt-8 md:mt-12 mb-2 md:mb-4 text-stone-900 dark:text-stone-50 min-[1920px]:text-[28px]'>
				{props.title}
			</div>
			<div className='text-stone-600 dark:text-stone-300 leading-7 text-lg min-[1920px]:text-lg min-[1920px]:leading-relaxed'>
				{props.children}
			</div>
		</div>
	);
}

function LeftCaption({ children }: any) {
	return (
		<div className='col-start-1 col-end-3 font-sf place-self-end text-stone-500 text-right min-[1920px]:col-start-1 min-[1920px]:col-end-2'>
			{children}
		</div>
	);
}

function RightCaption({ children }: any) {
	return (
		<div className='col-start-11 col-end-13 place-self-end text-stone-500 min-[1920px]:col-start-8 min-[1920px]:col-end-9 md:max-xl:col-start-9 md:max-xl:col-end-11'>
			{children}
		</div>
	);
}

function ImageWrap(props: any) {
	return (
		<div className='bg-zinc-100 mt-8 md:mt-16'>
			<Image
				className='object-contain'
				src={props.src}
				quality={100}
				placeholder='blur'
				alt={props.alt}></Image>
		</div>
	);
}

function LeftImage(props: any) {
	return (
		<div className='bg-zinc-100'>
			<Image
				className='object-contain'
				src={props.src}
				quality={100}
				placeholder='blur'
				alt={props.alt}></Image>
		</div>
	);
}

function RightImage(props: any) {
	return (
		<div className=''>
			<Image
				className='object-contain'
				src={props.src}
				quality={100}
				placeholder='blur'
				alt={props.alt}></Image>
		</div>
	);
}

function Goal(props: any) {
	return (
		<div>
			<h1 className='text-xl md:text-2xl text-stone-900 dark:text-white md:text-center mb-4 mt-16 md:mt-24'>
				{props.title}
			</h1>
			<div className='md:text-center text-stone-900 dark:text-white text-3xl md:text-5xl font-light font-serif italic leading-normal min-[1920px]:text-6xl min-[1920px]:leading-relaxed md:max-xl:text-4xl md:max-xl:leading-relaxed'>
				{props.children}
			</div>
		</div>
	);
}

function Span(props: any) {
	return (
		<span className='text-stone-900 dark:text-stone-50 font-normal'>
			{' '}
			{props.children}{' '}
		</span>
	);
}

function Title(props: any) {
	return (
		<h1 className='mx-auto md:w-2/5 text-stone-600 dark:text-stone-400 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight'>
			{props.children}
		</h1>
	);
}

export {
	MainGrid,
	Hero,
	Text,
	Title,
	TwoImages,
	ImageWrap,
	LeftCaption,
	RightCaption,
	LeftImage,
	RightImage,
	Goal,
	Span,
};
