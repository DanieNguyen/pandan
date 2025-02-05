import React from 'react';
import { DownArrow } from './Arrow';

const Roles = ({ title, items }) => {
	return (
		<main>
			<div className='my-4'>
				<div className='dark:text-stone-400 text-stone-600'>
					<p className='font-medium text-stone-900 dark:text-stone-50'>
						{title}
					</p>
					{items.map((item, index) => (
						<p key={index} className='font-light'>
							{item}
						</p>
					))}
				</div>
			</div>
		</main>
	);
};

export default Roles;
