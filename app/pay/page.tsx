'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import PayHero from '../../public/images/pay/mobile.png';
import Checkout from '../../public/images/pay/checkout.png';
import FinalRate from '../../public/images/pay/finalrate.png';
import Review from '../../public/images/pay/review.png';
import Zebra from '../../public/images/pay/zhome.png';
import Concierge from '../../public/images/pay/concierge.png';
import Pain from '../../public/images/pay/pain.png';
import Inspo from '../../public/images/pay/inspo.png';
import Iteration from '../../public/images/pay/iteration.png';
import Layout from '../../public/images/pay/Layout.png';
import Flow from '../../public/images/pay/flow.png';
import test from '../../public/images/pay/test.png';
import Today from '../../public/images/pay/today.png';
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
				src={FinalRate}
				alt='Checkout Hero'
				headline='Insurance Checkout Redesign'></Hero>
			<MainGrid>
				<div className='col-start-3 col-end-5 text-sm text-neutral-500 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
					<p className='font-medium text-black'>Role</p>
					<p className='font-light'>Competitive Analysis</p>
					<p className='font-light'>User Research</p>
					<p className='font-light'>A/B Testing</p>
					<p className='font-light'>Prototyping</p>
					<p className='font-light'>Iterative Designs</p>
					<p className='font-light'>Responsive Design</p>
					<p className='mt-8 font-medium text-black'>Team</p>
					<p className='font-light'>1 Product Manager</p>
					<p className='font-light'>2 Front-End Engineers</p>
					<p className='font-light'>4 Backend-End Engineers</p>

					<p className='mt-8 font-medium text-black'>Timeline</p>
					<p className='font-light'>April 2024 - July 2024</p>
				</div>
				<TextGrid>
					<p className='text-neutral-500 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight'>
						Redesigning the insurance checkout experience to{' '}
						<Span>be simple and trustworthy</Span>
					</p>
					<Text title='Context'>
						Within my first month at the Zebra, I identified the
						need for an redeign of the insurance checkout process. I
						initiated and led the redesign to create a more
						user-friendly and efficient checkout process. As the
						sole designer, I conducted a competitive analysis and UX
						audit to identify our weaknesses. I then led cross
						functional workshops, A/B testing with interactive
						prototypes, and iterative design efforts to successfully
						ship the redesign.
					</Text>
					<Text title='What is the Zebra?'>
						The Zebra is an online insurance comparison website,
						mainly known for their auto insurance. People are able
						to view multiple quotes from different carriers and
						compare coverages, benefits, and pricing. However, not
						many users know that they can purchase insurance
						directly on the Zebra.
					</Text>
				</TextGrid>
				<LeftImage src={Zebra} alt='Zebra home page'></LeftImage>
				<RightImage
					src={Concierge}
					alt='Choosing how to pay on the Zebra'></RightImage>
				<TextGrid>
					<Text title='Research'>
						To kickstart the redesign, I conducted a thorough
						competitive analysis and audit of our purchasing flow.
					</Text>
					<br></br>
					<div className='text-stone-500 text-lg'>
						<p className='mb-4'>
							<span className='text-black'>
								Competitive Analysis:{' '}
							</span>
							Examined insurance checkout experiences from
							industry leaders such as Geico and Allstate, along
							with standard e-commerce platforms like Stripe and
							Shopify.
						</p>
						<p>
							<span className='text-black'>Findings: </span>
						</p>
						<ul className='mt-4 list-disc text-stone-500 font-light text-lg leading-7 list-outside'>
							<li>
								The existing terminology was confusing and did
								not match industry standard terminology.
							</li>
							<li>
								We lacked a clear breakdown of pricing and
								payment options
							</li>

							<li>
								Our layout is not consistent with e-commerce
								checkout experiences.
							</li>
							<li>
								We do not provide any confirmation or review
								before purchase.
							</li>
						</ul>
					</div>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={Pain} alt='pain points'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<Goal title='Design Goal'>
						How can we make the checkout experience streamlined and
						clear?{' '}
					</Goal>
				</ImageGrid>
				<TextGrid>
					<Text>
						To create a streamlined, user-friendly checkout
						experience that instilled trust and clarity. My aim was
						to incorporate industry best practices, ensuring that
						users had all necessary information at each step of the
						process.
					</Text>
				</TextGrid>
				<LeftImage src={Inspo} alt='Zebra home page'></LeftImage>
				<RightImage
					src={Iteration}
					alt='Choosing how to pay on the Zebra'></RightImage>
				<TextGrid>
					<Text title='Design'>
						I developed multiple design iterations, including
						single-column, two-column layouts, and card-based
						designs, inspired by relevant product flows. I made sure
						to iterate on displaying discounts, savings, and payment
						options clearly.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={Layout} alt='Explorations'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Updated Flow'>
						I decided to move forward with the two column layout and
						information given feedback from stakeholders and its
						alignment with industry standards. With the new layout,
						I updated the payment section. I simplified the form and
						added a new review page. We then tested the existing
						designs vs the new flow.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={Flow} alt='new key screens'></ImageWrap>
					<ImageWrap src={test} alt='prototype'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='A/B Testing'>
						I created interactive prototypes and conducted usability
						testing via usertesting.com with 10 users.{' '}
						<span className='text-black'>
							8 out of 10 users preferred the new designs,
							appreciating the detailed breakdown and review page.{' '}
						</span>
						The other two users liked the new features proposed in
						the new design but preferred the old layout/visual
						style.
					</Text>
					<br></br>
					<p>
						<span className='text-black text-lg'>Findings: </span>
					</p>
					<ul className='mt-4 list-disc text-stone-500 font-light text-lg leading-7 list-outside'>
						<li>
							Users want a breakdown of pricing with savings and
							discount
						</li>
						<li>
							Users liked the pay in full and emphasized pricing
							was the most important to them
						</li>
						<li>
							Users want to review and confirm their policy before
							purchasing
						</li>
						<li>
							Users did not understand why they had to use a
							credit card when paying with bank account
						</li>
						<li>Users expect secure payment methods</li>
					</ul>
					<Text title='Final Designs'>
						After our testing and sharing the feedback to
						stakeholders, I worked with the team to determine areas
						of improvement in the flow. I then updated the designs,
						and created responsive designs.
					</Text>
					<br></br>
					<p>
						<span className='text-black text-lg'>
							Design Improvements:{' '}
						</span>
					</p>
					<ul className='mt-4 list-disc text-stone-500 font-light text-lg leading-7 list-outside'>
						<li>Clearly label savings in pricing card</li>
						<li>
							Separate the credit card to new page and provide
							more information and explain in review page
						</li>
						<li>Update visual elements</li>
						<li>
							Highlight the payment methods and schedule better
							for comfort and security
						</li>
					</ul>
				</TextGrid>
				<ImageGrid>
					<ImageWrap
						src={FinalRate}
						alt='final rate page'></ImageWrap>
					<ImageWrap
						src={Checkout}
						alt='final checkout page'></ImageWrap>
					<ImageWrap src={Today} alt='due today page'></ImageWrap>
					<ImageWrap src={Review} alt='review page'></ImageWrap>
					<ImageWrap src={PayHero} alt='mobile pages'></ImageWrap>
				</ImageGrid>

				<TextGrid>
					<Text title='Impact'>
						I worked closely with the dev team to make responsive
						designs, error states, edge cases. We successfully
						shipped the redesign in July.{' '}
						<span className='text-black'>
							With the newly launched designs, our payment
							conversions went up by 4%.
						</span>{' '}
						So far, there have been zero complaints about the
						checkout experience.
					</Text>
					<Text title='Reflection'>
						Diving right into the checkout redesign in my first 30
						days was exciting. I learned a lot of things considering
						this was my first project at the Zebra:
					</Text>

					<ul className='mt-8 list-disc text-stone-500 font-light text-lg leading-7 list-outside'>
						<li>
							<span className='text-black'>
								Attention to detail:
							</span>{' '}
							Small adjustments like a simple toggle can have a
							big impact on user experience.
						</li>
						<li>
							<span className='text-black'>Comfort:</span>{' '}
							Considering how users feel and their trust towards
							the product is essential for complex flows
						</li>
						<li>
							<span className='text-black'>
								User-centered design:{' '}
							</span>
							Focusing on user needs and feedback will always be
							the way to go :)
						</li>
					</ul>
				</TextGrid>
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
