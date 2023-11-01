import { motion, useScroll } from 'framer-motion';

export default function ScrollBar() {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div
			className='fixed top-0 left-0 right-0 h-1 bg-black origin-top-left'
			style={{ scaleX: scrollYProgress }}
		/>
	);
}
