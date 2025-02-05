import React from 'react';
import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';
import { DownArrow } from './Arrow';

function MainGrid({ children }: any) {
	return <div className='md:mt-24'>{children}</div>;
}

function Hero(props: any) {
	return (
		<motion.div
			initial={{ y: '10%', opacity: 0 }}
			animate={{ y: '0%', opacity: 100 }}
			transition={{
				duration: 0.6,
			}}
			className='mt-16 lg:mt-32'>
			<h1 className='text-4xl lg:text-7xl mb-6'>{props.headline}</h1>
			<Image
				className='h-full w-full object-contain bg-zinc-100'
				src={props.src}
				quality={100}
				placeholder='blur'
				priority
				alt={props.alt}></Image>
		</motion.div>
	);
}

function Text(props: any) {
	return (
		<div>
			<div className='text-xl md:text-2xl mt-8 md:mt-12 mb-2 md:mb-4 text-stone-900 dark:text-stone-50 min-[1920px]:text-[28px]'>
				{props.title}
			</div>
			<div className='text-stone-600 dark:text-stone-300 leading-7 text-lg md:text-justify min-[1920px]:text-lg min-[1920px]:leading-relaxed'>
				{props.children}
			</div>
		</div>
	);
}

function TextGrid({ children }: any) {
	return <div className='mx-auto md:w-2/5'>{children}</div>;
}

function ImageGrid({ children }: any) {
	return <div className='mt-8 md:mt-16'>{children}</div>;
}

function ImageWrap(props: any) {
	return (
		<div className='bg-zinc-100'>
			<Image
				className='h-full w-full object-contain'
				src={props.src}
				quality={100}
				placeholder='blur'
				alt={props.alt}></Image>
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

function LeftImage(props: any) {
	return (
		<div className='bg-zinc-100'>
			<Image
				className='h-full w-full object-contain'
				src={props.src}
				quality={100}
				placeholder='blur'
				alt={props.alt}></Image>
		</div>
	);
}

function RightImage(props: any) {
	return (
		<div className='bg-zinc-100 min-[1920px]:col-start-5 min-[1920px]:col-end-8 md:max-xl:col-start-6 md:max-xl:col-end-9'>
			<Image
				className='h-full w-full object-contain'
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

const InfoSection = ({ title, items, link }) => {
	return (
		<div className='col-start-3 col-end-5 text-sm text-stone-600 dark:text-stone-600 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
			<p className='font-medium text-stone-900 dark:text-white'>
				{title}
			</p>
			{items.map((item, index) => (
				<p key={index} className='font-light'>
					{item}
				</p>
			))}
			{link && (
				<a
					href={link.href}
					className='mt-8 block font-medium text-stone-900 dark:text-stone-50'>
					<DownArrow /> {link.label} <DownArrow />
				</a>
			)}
		</div>
	);
};

export {
	MainGrid,
	Hero,
	Text,
	TextGrid,
	ImageGrid,
	ImageWrap,
	LeftCaption,
	RightCaption,
	LeftImage,
	RightImage,
	Goal,
	Span,
	InfoSection,
};
