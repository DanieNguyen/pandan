export default function Headline() {
	return (
		<div className='main-content'>
			<div className='mx-12'>
				<div className='mac:w-3/4 w-full mt-36 leading-[64px]'>
					<span className='text-white text-5xl'>
						Currently helping people save money at
					</span>
					<a
						href='https://www.thezebra.com'
						target='_blank'
						rel='noopener noreferrer'
						className='cursor-zebra'>
						<span className='text-[#574CFA] text-[44px] font-serif italic'>
							{' '}
							The Zebra.{' '}
						</span>
					</a>
					<span className='text-white text-5xl'>
						Previously crafting data security tools at
					</span>
					<a
						href='https://www.rubrik.com'
						target='_blank'
						rel='noopener noreferrer'
						className='cursor-rubrik'>
						<span className='bg-gradient-to-r from-[#00B28B] via-[#00A9BD] to-[#00A3DF] text-transparent bg-clip-text text-[44px] font-serif italic'>
							{' '}
							Rubrik{' '}
						</span>
					</a>
					<br></br>
					<span className='text-white text-5xl'>
						and a Web3 crypto app at
					</span>
					<span className='text-[#5352FC] text-[44px] font-serif italic hover:cursor-poof'>
						{' '}
						Poof.Cash.
					</span>
				</div>
			</div>
		</div>
	);
}
