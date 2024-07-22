'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import PayHero from '../../public/images/pay/mobile.png';
import Checkout from '../../public/images/pay/checkout.png';
import FinalRate from '../../public/images/pay/finalrate.png';
import Review from '../../public/images/pay/review.png';
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
				src={PayHero}
				alt='Checkout Hero'
				headline='Checkout Redesign'></Hero>
			<MainGrid>
				<div className='col-start-3 col-end-5 text-sm text-neutral-500 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
					<p className='font-medium text-black'>Role</p>
					<p className='font-light'>Competitive Analysis</p>
					<p className='font-light'>Responsive Design</p>
					<p className='font-light'>User Research</p>
					<p className='font-light'>A/B Testing</p>
					<p className='font-light'>Iterative Designs</p>
					<p className='mt-8 font-medium text-black'>Team</p>
					<p className='font-light'>1 Product Manager</p>
					<p className='font-light'>2 Front-End Engineers</p>
					<p className='font-light'>4 Backend-End Engineers</p>

					<p className='mt-8 font-medium text-black'>Timeline</p>
					<p className='font-light'>April 2024 - July 2024</p>
				</div>
				<TextGrid>
					<p className='text-neutral-500 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight'>
						Redesigning the checkout experience to{' '}
						<Span>improve payment conversion rates</Span>
					</p>
					<Text title='Case study coming soon'>
						At the Zebra, I led a redesign of our payment and
						checkout user flow. As the sole designer, I conducted a
						competitive analysis and UX audit to identify our
						weaknesses. I then led cross functional workshops, A/B
						testing with interactive prototypes, and iterative
						design efforts to successfully ship the redesign.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap
						src={FinalRate}
						alt='Rate page for web'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap src={Checkout} alt='Checkout steps'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap
						src={Review}
						alt='Review purchase page'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<div className='flex justify-between mt-24 mb-24'>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500 text-right'>
								Previous
							</p>
							<a className='max-w-fit' href='/sonar'>
								<span className='bg-right-bottom bg-gradient-to-l text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl'>
									<ReverseArrow></ReverseArrow> SONAR
								</span>
							</a>
						</div>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500'>
								Next
							</p>
							<a className='max-w-fit' href='/poof'>
								<span className='bg-left-bottom bg-gradient-to-r text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl'>
									POOF.CASH <DiagonalArrow></DiagonalArrow>
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
