import { DiagonalArrow, ReverseArrow } from './Arrow';
import React from 'react';

const ProjectNav = ({ previous, prevlink, next, nextlink }) => {
	return (
		<div>
			<div className='flex justify-between mt-24 mb-24'>
				<div className=''>
					<p className='font-sfital2 text-xl mb-4 text-stone-600 dark:text-stone-400 text-right'>
						Previous
					</p>
					<a className='max-w-fit' href={prevlink}>
						<span className='bg-right-bottom bg-gradient-to-l text-stone-900 from-stone-900 to-stone-900 dark:text-stone-50 dark:from-stone-50 dark:to-stone-50 bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl'>
							<ReverseArrow></ReverseArrow> {previous}
						</span>
					</a>
				</div>
				<div className=''>
					<p className='font-sfital2 text-xl mb-4 text-stone-600 dark:text-stone-400'>
						Next
					</p>
					<a className='max-w-fit' href={nextlink}>
						<span className='bg-left-bottom bg-gradient-to-r text-stone-900 from-stone-900 to-stone-900 dark:text-stone-50 dark:from-stone-50 dark:to-stone-50  bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl'>
							{next} <DiagonalArrow></DiagonalArrow>
						</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectNav;
