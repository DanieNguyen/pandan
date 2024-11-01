import { useRef } from 'react';
import { easeIn, motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Sonar from '../../public/images/oldhome/sonar.png';
import Spotify from '../../public/images/oldhome/spotify.png';
import Threat from '../../public/images/oldhome/threat.png';
import Poof from '../../public/images/oldhome/poof.png';

function CaseStudy(props: any) {
	return (
		<div className='group snap-center snap-always'>
			<a href={props.link}>
				<motion.div className='object-cover h-[50vh] 2xl:h-[50vh] 2xl:w-[80vh] rounded overflow-hidden'>
					<Image
						className='h-full w-full object-cover transition ease-out duration-1000 hover:scale-105'
						src={props.url}
						quality={100}
						placeholder='blur'
						priority
						alt={props.project}></Image>
				</motion.div>
				<div className='hidden group-hover:flex flex-row mt-4 items-center justify-between'>
					<div className='text-3xl font-sfital'>{props.project}</div>
					<div className='text-gray-500 font-light'>
						{props.company}
					</div>
				</div>
			</a>
		</div>
	);
}

export default function Carousel() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	const x = useTransform(scrollYProgress, [0, 1], ['50%', '-80%']);
	const yd = useTransform(scrollYProgress, [0, 0.2, 1], ['70%', '0%', '0%']);

	const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	return (
		<section>
			<div
				ref={ref}
				id='work'
				className='relative h-[300vh] w-full text-black'>
				<div className='sticky top-0 h-screen items-center overflow-hidden snap'>
					<motion.div
						style={{ y: yd, opacity }}
						className='text-center text-[25vh] mt-[8vh] tracking-tighter mb-[-20vh] text-black'>
						WOR<span className='font-sfital ss-01'>K</span>
					</motion.div>
					<motion.div
						style={{ x }}
						className='flex w-[4160px] flex-row gap-16 snap-y snap-mandatory'>
						<CaseStudy
							project='Sensitive Data Dashboard'
							url={Sonar}
							link='/sonar'
							company='RUBRIK 2022 / UX DESIGN'></CaseStudy>
						<CaseStudy
							project='Poof App'
							url={Poof}
							link='/poof'
							company='FREELANCE / UX DESIGN + DEV'></CaseStudy>
						<CaseStudy
							project='Threat Hunts'
							url={Threat}
							link='/threat'
							company='RUBRIK 2022 / UX DESIGN'></CaseStudy>
						<CaseStudy
							project='Spotify Podcasts'
							url={Spotify}
							link='/spotify'
							company='APPLIED 2020 / UX DESIGN'></CaseStudy>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
