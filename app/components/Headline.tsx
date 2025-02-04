export default function Headline() {
	return (
		<div className='main-content text-stone-800 dark:text-white'>
			<div className=''>
				<div className='w-full mx-12 mt-12 lg:mt-36 2xl:mt-64 lg:leading-[48px] xl:leading-[64px]'>
					<div className='text-xl mb-5 text-blue-600 dark:text-blue-500'>
						Senior Product Designer
					</div>
					<span className='text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>
						Previously saving people money at
					</span>
					<a
						href='https://www.thezebra.com'
						target='_blank'
						rel='noopener noreferrer'
						className='cursor-zebra'>
						<span className='text-[#574CFA] text-[18px] lg:text-[32px] xl:text-[44px] 2xl:text-[56px] font-serif italic'>
							{' '}
							The Zebra,{' '}
						</span>
					</a>
					<br className='hidden md:flex'></br>
					<span className='text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>
						crafting data security tools at
					</span>
					<a
						href='https://www.rubrik.com'
						target='_blank'
						rel='noopener noreferrer'
						className='cursor-rubrik'>
						<span className='bg-linear-to-r from-[#00B28B] via-[#00A9BD] to-[#00A3DF] text-transparent bg-clip-text text-[18px] lg:text-[32px] xl:text-[44px] 2xl:text-[56px] font-serif italic'>
							{' '}
							Rubrik,{' '}
						</span>
					</a>
					<br className='hidden md:flex'></br>
					<span className='text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>
						& building a Web3 wallet at
					</span>
					<span className='text-[#5352FC] text-[18px] lg:text-[32px] xl:text-[44px] 2xl:text-[56px] font-serif italic hover:cursor-poof'>
						{' '}
						Poof.Cash.
					</span>
				</div>
			</div>
		</div>
	);
}
