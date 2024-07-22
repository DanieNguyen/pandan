'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import BoomHero from '../../public/images/boom/boomhero.png';
import BoomIllustration from '../../public/images/boom/boomillustration.png';
import Zcard from '../../public/images/boom/zcard.png';
import Zpricing from '../../public/images/boom/zpricing.png';
import Zheader from '../../public/images/boom/zheader.png';
import { DiagonalArrow, ReverseArrow, DownArrow } from '../components/Arrow';
import Top from '../components/Top';
import {
	MainGrid,
	Hero,
	Text,
	TextGrid,
	ImageGrid,
	ImageWrap,
	LeftCaption,
	RightCaption,
	LeftImage,
	RightImage,
	Goal,
	Span,
} from '../components/Post';

export default function Home() {
	return (
		<main className='bg-white' id='home'>
			<div className='p-8 text-2xl md:hidden'>
				Please view on web for now. Mobile coming soon.
			</div>
			<div className='hidden md:block'>
				<NavBar />
				<ScrollBar></ScrollBar>
			</div>
			<Hero
				src={BoomHero}
				alt='Boompay Hero'
				headline='Credit Boost'></Hero>
			<MainGrid>
				<div className='col-start-3 col-end-5 text-sm text-neutral-500 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
					<p className='font-medium text-black'>Role</p>
					<p className='font-light'>Visual Design</p>
					<p className='font-light'>Responsive Design</p>
					<p className='font-light'>Sign-up and Waitlist</p>
					<p className='font-light'>Landing Pages</p>
					<p className='font-light'>Brand Partnership</p>
					<p className='font-light'>User Research</p>
					<p className='font-light'>A/B Testing</p>
					<p className='mt-8 font-medium text-black'>Team</p>
					<p className='font-light'>1 Product Manager</p>
					<p className='font-light'>2 Front-End Engineers</p>
					<p className='font-light'>4 Backend-End Engineers</p>
					<p className='mt-8 font-medium text-black'>Timeline</p>
					<p className='font-light'>June 2024 - Aug 2024</p>
				</div>
				<TextGrid>
					<p className='text-neutral-500 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight'>
						Launching a new product to help{' '}
						<Span>people build their credit</Span>
					</p>
					<Text title='Case study coming soon'>
						At the Zebra, I&apos;m currently working on a new
						product to help our users build credit. We are launching
						the product in early fall 2024. As the sole designer, I
						have been leading our design efforts in marketing,
						education, onboarding, and testing out different
						versions to see how we can optimize sign-ups and have
						smooth onboarding.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap
						src={BoomIllustration}
						alt='Alt landing page exploration'></ImageWrap>
				</ImageGrid>
				<RightCaption>
					Alternative landing page being A/B tested
				</RightCaption>
				<ImageGrid>
					<ImageWrap src={Zcard} alt='Waitlist Signup'></ImageWrap>
				</ImageGrid>
				<RightCaption>Coming soon card on the front page</RightCaption>
				<ImageGrid>
					<ImageWrap
						src={Zheader}
						alt='Ad for Credit Boost'></ImageWrap>
				</ImageGrid>
				<RightCaption>
					Learn more banner and modal explorations
				</RightCaption>
				<ImageGrid>
					<ImageWrap
						src={Zpricing}
						alt='Ad for Credit Boost'></ImageWrap>
				</ImageGrid>
				<RightCaption>
					Waitlist CTA while waiting fo insurance quotes
				</RightCaption>
				<ImageGrid>
					<div className='flex justify-between mt-24 mb-24'>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500 text-right'>
								Previous
							</p>
							<a className='max-w-fit' href='/spotify'>
								<span className='bg-right-bottom bg-gradient-to-l text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl'>
									<ReverseArrow></ReverseArrow> SPOTIFY
								</span>
							</a>
						</div>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500'>
								Next
							</p>
							<a className='max-w-fit' href='/sonar'>
								<span className='bg-left-bottom bg-gradient-to-r text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl'>
									SONAR <DiagonalArrow></DiagonalArrow>
								</span>
							</a>
						</div>
					</div>
				</ImageGrid>
			</MainGrid>
			<Top></Top>
		</main>
	);
}
