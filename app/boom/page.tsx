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
	ImageWrap,
	LeftCaption,
	RightCaption,
	LeftImage,
	RightImage,
	Goal,
	Span,
	Title,
} from '../components/CaseStudy';
import Roles from '../components/Roles';
import ProjectNav from '../components/ProjectNav';

export default function Home() {
	const sections = [
		{
			title: 'Role',
			items: [
				'Visual Design',
				'Responsive Design',
				'User Research',
				'A/B Testing',
				'Brand Partnership',
				'Landing Pages',
			],
		},
		{
			title: 'Team',
			items: [
				'1 Product Manager',
				'2 Front-End Engineers',
				'4 Backend-End Engineers',
			],
		},
		{
			title: 'Timeline',
			items: ['June 2024 - Aug 2024'],
		},
	];

	return (
		<main className='' id='home'>
			<NavBar />
			<ScrollBar></ScrollBar>
			<Hero
				src={BoomHero}
				alt='Boompay Hero'
				headline='Rent Reporting'
				priority={true}
				loading='eager'></Hero>
			<MainGrid>
				<Roles sections={sections} />
				<Title>
					Launching a new product to help{' '}
					<Span>people build their credit</Span>
				</Title>{' '}
				<div className='md:mb-64'>
					<Text title='Case study coming soon!'>
						At the Zebra, I&apos;m currently working on a new
						product to help our users build credit. We are launching
						the product in early fall 2024. As the sole designer, I
						have been leading our design efforts in marketing,
						education, onboarding, and testing out different
						versions to see how we can optimize sign-ups and have
						smooth onboarding.
					</Text>
				</div>
				<ImageWrap
					src={BoomIllustration}
					alt='Alt landing page exploration'></ImageWrap>
				<RightCaption>
					Alternative landing page being A/B tested
				</RightCaption>
				<ImageWrap src={Zcard} alt='Waitlist Signup'></ImageWrap>
				<RightCaption>Coming soon card on the front page</RightCaption>
				<ImageWrap src={Zheader} alt='Ad for Credit Boost'></ImageWrap>
				<RightCaption>
					Learn more banner and modal explorations
				</RightCaption>
				<ImageWrap src={Zpricing} alt='Ad for Credit Boost'></ImageWrap>
				<RightCaption>
					Waitlist CTA while waiting fo insurance quotes
				</RightCaption>
				<ProjectNav
					previous='INSURANCE CHECKOUT'
					prevlink={'/pay'}
					next='POOF.CASH'
					nextlink={'/poof'}
				/>
			</MainGrid>
			<Top></Top>
		</main>
	);
}
