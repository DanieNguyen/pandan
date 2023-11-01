import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Statement() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	const yd = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '0%', '0%']);
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.5, 0.7, 1],
		[0, 1, 0, 0]
	);
	return (
		<div className='h-[60vh]'>
			<motion.div
				ref={ref}
				style={{ y: yd, opacity }}
				className='relative top-24 flex flex-col text-[7vh] leading-relaxed'>
				<motion.div className='flex flex-row justify-center'>
					<h1>A&nbsp;</h1>
					<span className='font-sfital common-ligatures ss-01'>
						MULTIDISCIPLINARY&nbsp;
					</span>
					<h1 className='tracking-tight'>DESIGNER BASED IN </h1>
					<span className='font-sfital common-ligatures ss-01'>
						&nbsp;SEATTLE
					</span>
				</motion.div>
				<motion.div className='flex flex-row justify-center'>
					<h1 className='tracking-tight'>WITH&nbsp;</h1>
					<span className='font-sfital common-ligatures ss-01'>
						3 YEARS
					</span>
					<h1 className='tracking-tight'>
						&nbsp;OF EXPERIENCE CREATING
					</h1>
				</motion.div>
				<motion.div className='flex flex-row justify-center'>
					<span className='font-sfital common-ligatures ss-01'>
						REMARKABLE EXPERIENCES
					</span>
					<h1 className='tracking-tight'>&nbsp;FOR&nbsp;</h1>
					<span className='font-sfital common-ligatures ss-01'>
						CONSUMER
					</span>
				</motion.div>
				<motion.div className='flex flex-row justify-center'>
					<span className='font-sfital common-ligatures ss-01'>
						& ENTERPRISE
					</span>
					<h1 className='tracking-tight'>&nbsp;PRODUCTS</h1>
				</motion.div>
			</motion.div>
		</div>
	);
}
