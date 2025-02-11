// import React from 'react';

// const Roles = ({ title, items }) => {
// 	return (
// 		<main>
// 			<div className='divider border-2 border-black'></div>
// 			<div className='my-4'>
// 				<div className='dark:text-stone-400 text-stone-600'>
// 					<p className='font-medium text-stone-900 dark:text-stone-50'>
// 						{title}
// 					</p>
// 					{items.map((item, index) => (
// 						<p key={index} className='font-light'>
// 							{item}
// 						</p>
// 					))}
// 				</div>
// 			</div>
// 		</main>
// 	);
// };

// export default Roles;
import React from 'react';

type Section = {
	title: string;
	items: string[];
};

const Roles = ({ sections }: { sections: Section[] }) => {
	return (
		<main className='md:absolute md:ml-24 my-12'>
			<div className='md:hidden border-t-2 rounded-sm border-slate-200 pb-4'></div>
			{sections.map((section, sectionIndex) => (
				<div key={sectionIndex} className='my-4'>
					<div className='dark:text-stone-400 text-stone-600'>
						<p className='font-medium text-stone-900 dark:text-stone-50'>
							{section.title}
						</p>
						{section.items.map((item, itemIndex) => (
							<p key={itemIndex} className='font-light'>
								{item}
							</p>
						))}
					</div>
				</div>
			))}
			<div className='md:hidden border-b-2 rounded-sm border-slate-200 mt-8'></div>
		</main>
	);
};

export default Roles;
