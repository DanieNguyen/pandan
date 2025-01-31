export default function Headline() {
	return (
		<div className='main-content text-stone-800 dark:text-white'>
			<div className='mx-12'>
				<div className='w-full mt-36 2xl:mt-64 lg:leading-[48px] xl:leading-[64px]'>
					<div className='text-xl mb-5 text-blue-600 dark:text-blue-500'>
						Product Designer
					</div>
					<span className='lg:text-4xl xl:text-5xl 2xl:text-6xl'>
						Previously saving people money at
					</span>
					<a
						href='https://www.thezebra.com'
						target='_blank'
						rel='noopener noreferrer'
						className='cursor-zebra'>
						<span className='text-[#574CFA] lg:text-[32px] xl:text-[44px] 2xl:text-[56px] font-serif italic'>
							{' '}
							The Zebra,{' '}
						</span>
					</a>
					<br></br>
					<span className='lg:text-4xl xl:text-5xl 2xl:text-6xl'>
						crafting data security tools at
					</span>
					<a
						href='https://www.rubrik.com'
						target='_blank'
						rel='noopener noreferrer'
						className='cursor-rubrik'>
						<span className='bg-linear-to-r from-[#00B28B] via-[#00A9BD] to-[#00A3DF] text-transparent bg-clip-text lg:text-[32px] xl:text-[44px] 2xl:text-[56px] font-serif italic'>
							{' '}
							Rubrik,{' '}
						</span>
					</a>
					<br></br>
					<span className='lg:text-4xl xl:text-5xl 2xl:text-6xl'>
						& building a Web3 wallet at
					</span>
					<span className='text-[#5352FC] lg:text-[32px] xl:text-[44px] 2xl:text-[56px] font-serif italic hover:cursor-poof'>
						{' '}
						Poof.Cash.
					</span>
				</div>
			</div>
		</div>
	);
}
