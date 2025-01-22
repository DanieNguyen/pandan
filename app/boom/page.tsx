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
} from '../components/CaseStudy';
import ProjectNav from '../components/ProjectNav';

export default function Home() {
	return (
		<main className='' id='home'>
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
				headline='Rent Reporting'></Hero>
			<MainGrid>
				<div className='col-start-3 col-end-5 text-sm dark:text-stone-400 text-stone-600 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
					<p className='font-medium text-stone-900 dark:text-stone-50'>
						Role
					</p>
					<p className='font-light'>Visual Design</p>
					<p className='font-light'>Responsive Design</p>
					<p className='font-light'>Sign-up and Waitlist</p>
					<p className='font-light'>Landing Pages</p>
					<p className='font-light'>Brand Partnership</p>
					<p className='font-light'>User Research</p>
					<p className='font-light'>A/B Testing</p>
					<p className='mt-8 font-medium text-stone-900 dark:text-stone-50'>
						Team
					</p>
					<p className='font-light'>1 Product Manager</p>
					<p className='font-light'>2 Front-End Engineers</p>
					<p className='font-light'>4 Backend-End Engineers</p>
					<p className='mt-8 font-medium text-stone-900 dark:text-stone-50'>
						Timeline
					</p>
					<p className='font-light'>June 2024 - Aug 2024</p>
				</div>
				<TextGrid>
					<p className='dark:text-stone-400 text-stone-600 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight'>
						Launching a new product to help{' '}
						<Span>people build their credit</Span>
					</p>
					<Text title='Case study coming soon!'>
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
					<ProjectNav
						previous='SENSITIVE DATA'
						prevlink={'/sonar'}
						next='POOF.CASH'
						nextlink={'/poof'}
					/>
				</ImageGrid>
			</MainGrid>
			<Top></Top>
		</main>
	);
}
