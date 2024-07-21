import { DiagonalArrow } from '../components/Arrow';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const Contact = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.start', {
			scrollTrigger: {
				trigger: '.trig',
			},
			opacity: '100%',
			duration: 1,
			ease: 'power1.out',
		});
	}, []);

	return (
		<div>
			<div id='contact' className='relative h-[90vh] px-16'>
				<div className='text-white pt-20 text-6xl leading-relaxed start'>
					<div className='pb-32'>
						<span>Let&apos;s work</span>
						<span className='font-serif italic'> together</span>
						<p className='text-2xl trig'>
							We can round some rectangles
						</p>
					</div>
					<div className='flex flex-col gap-[2vh] text-white text-[4vh] font-sans'>
						<a
							className='max-w-fit'
							href='mailto:danyen125@gmail.com'>
							<span className='font-serif italic bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								Email <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
						<a
							className='max-w-fit'
							href='https://www.linkedin.com/in/pandang/'>
							<span className='font-serif italic bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								Linkedin <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
						<a
							className='max-w-fit'
							href='https://dribbble.com/dangux'>
							<span className='font-serif italic bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								Dribbble <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
						<a
							className='max-w-fit'
							href='https://www.instagram.com/pandan.lion/'>
							<span className='font-serif italic bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
								Instagram <DiagonalArrow></DiagonalArrow>
							</span>
						</a>
					</div>
				</div>
			</div>
			<div className='bottom-0 text-white w-screen border-t-[1px] py-4 px-16 flex flex-row justify-between'>
				<div className=''>
					designed and developed by daniel with tears
				</div>
				<div className=''>© pandan studio</div>
			</div>
		</div>
	);
};

export default Contact;
