import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';

function MainGrid({ children }: any) {
	return (
		<div className='p-16 grid grid-cols-12 gap-6 w-full mt-36 min-[1920px]:grid-cols-8 md:max-xl:grid-cols-10'>
			{children}
		</div>
	);
}

function Hero(props: any) {
	return (
		<motion.div
			initial={{ y: '25%', opacity: 0 }}
			animate={{ y: '0%', opacity: 100 }}
			transition={{
				delay: 0.2,
				ease: [0.6, 0.4, 0.2, 0.1],
				duration: 1,
			}}
			className='mt-24 mx-16 bg-zinc-100'>
			<Image
				className='h-full w-full object-contain'
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
			<p className='font-sf text-2xl mt-16 mb-6 text-black min-[1920px]:text-[28px]'>
				{props.title}
			</p>
			<p className='text-neutral-500 leading-7 text-justify tracking-tight font-light min-[1920px]:text-lg min-[1920px]:leading-relaxed'>
				{props.children}
			</p>
		</div>
	);
}

function TextGrid({ children }: any) {
	return (
		<div className='mb-8 col-start-5 col-end-9 w-full min-[1920px]:col-start-4 min-[1920px]:col-end-6 md:max-xl:col-start-4 md:max-xl:col-end-8'>
			{children}
		</div>
	);
}

function ImageGrid({ children }: any) {
	return (
		<div className='col-start-3 col-end-11 w-full min-[1920px]:col-start-2 min-[1920px]:col-end-8 md:max-xl:col-start-3 md:max-xl:col-end-9'>
			{children}
		</div>
	);
}

function ImageWrap(props: any) {
	return (
		<div className='bg-zinc-100'>
			<Image
				className='h-full w-full object-contain'
				src={props.src}
				quality={100}
				placeholder='blur'
				priority
				alt={props.alt}></Image>
		</div>
	);
}

function LeftCaption({ children }: any) {
	return (
		<div className='col-start-1 col-end-3 font-sf place-self-end text-neutral-500 text-right min-[1920px]:col-start-1 min-[1920px]:col-end-2'>
			{children}
		</div>
	);
}

function RightCaption({ children }: any) {
	return (
		<div className='col-start-11 col-end-13 font-sf place-self-end text-neutral-500 min-[1920px]:col-start-8 min-[1920px]:col-end-9 md:max-xl:col-start-9 md:max-xl:col-end-11'>
			{children}
		</div>
	);
}

function LeftImage(props: any) {
	return (
		<div className='col-start-3 col-end-7 bg-zinc-100 min-[1920px]:col-start-2 min-[1920px]:col-end-5 md:max-xl:col-start-3 md:max-xl:col-end-6'>
			<Image
				className='h-full w-full object-contain'
				src={props.src}
				quality={100}
				placeholder='blur'
				priority
				alt={props.alt}></Image>
		</div>
	);
}

function RightImage(props: any) {
	return (
		<div className='col-start-7 col-end-11 bg-zinc-100 min-[1920px]:col-start-5 min-[1920px]:col-end-8 md:max-xl:col-start-6 md:max-xl:col-end-9'>
			<Image
				className='h-full w-full object-contain'
				src={props.src}
				quality={100}
				placeholder='blur'
				priority
				alt={props.alt}></Image>
		</div>
	);
}

function Goal(props: any) {
	return (
		<div>
			<h1 className='text-2xl text-black font-light tracking-tight text-center mb-4 mt-24'>
				{props.title}
			</h1>
			<div className='w-full text-center text-black text-5xl font-normal font-sfital2 leading-normal min-[1920px]:text-6xl min-[1920px]:leading-relaxed md:max-xl:text-4xl md:max-xl:leading-relaxed'>
				{props.children}
			</div>
		</div>
	);
}

function Span(props: any) {
	return <span className='text-black font-normal'> {props.children} </span>;
}
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
};
