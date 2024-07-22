export default function Headline() {
	return (
		<div className='main-content'>
			<div className='mx-12'>
				<div className='12:w-3/4 lg:w-5/6 xl:w-3/4 2xl:w-3/5 w-full mt-36 2xl:mt-64 leading-[64px]'>
					<span className='text-white lg:text-4xl xl:text-5xl 2xl:text-6xl'>
						Currently helping people save money at
					</span>
					<a
						href='https://www.thezebra.com'
						target='_blank'
						rel='noopener noreferrer'
						className='cursor-zebra'>
						<span className='text-[#574CFA] lg:text-[32px] xl:text-[44px] 2xl:text-[56px] font-serif italic'>
							{' '}
							The Zebra.{' '}
						</span>
					</a>
					<span className='text-white lg:text-4xl xl:text-5xl 2xl:text-6xl'>
						Previously crafting data security tools at
					</span>
					<a
						href='https://www.rubrik.com'
						target='_blank'
						rel='noopener noreferrer'
						className='cursor-rubrik'>
						<span className='bg-gradient-to-r from-[#00B28B] via-[#00A9BD] to-[#00A3DF] text-transparent bg-clip-text lg:text-[32px] xl:text-[44px] 2xl:text-[56px] font-serif italic'>
							{' '}
							Rubrik{' '}
						</span>
					</a>
					<br></br>
					<span className='text-white lg:text-4xl xl:text-5xl 2xl:text-6xl'>
						and a Web3 crypto app at
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
