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
	Title,
	ImageWrap,
	TwoImages,
	Goal,
	Span,
} from '../components/CaseStudy';
import ProjectNav from '../components/ProjectNav';
import Roles from '../components/Roles';

export default function Home() {
	const sections = [
		{
			title: 'Role',
			items: [
				'Competitive Analysis',
				'User Research',
				'A/B Testing',
				'Prototyping',
				'Iterative Designs',
				'Responsive Design',
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
			items: ['April 2024 - July 2024'],
		},
	];

	return (
		<main className='' id='home'>
			<NavBar />
			<ScrollBar></ScrollBar>
			<Hero
				src={FinalRate}
				alt='Checkout Hero'
				headline='Insurance Checkout Redesign'></Hero>
			<MainGrid>
				<div className=''>
					<Roles sections={sections} />
				</div>
				<Title>
					Redesigning the insurance checkout experience to{' '}
					<Span>be simple and trustworthy</Span>
				</Title>
				<Text title='Context'>
					Within my first month at the Zebra, I identified the need
					for an redeign of the insurance checkout process. I
					initiated and led the redesign to create a more
					user-friendly and efficient checkout process. As the sole
					designer, I conducted a competitive analysis and UX audit to
					identify our weaknesses. I then led cross functional
					workshops, A/B testing with interactive prototypes, and
					iterative design efforts to successfully ship the redesign.
				</Text>
				<Text title='What is the Zebra?'>
					The Zebra is an online insurance comparison website, mainly
					known for their auto insurance. People are able to view
					multiple quotes from different carriers and compare
					coverages, benefits, and pricing. However, not many users
					know that they can purchase insurance directly on the Zebra.
				</Text>
				<TwoImages>
					<ImageWrap src={Zebra} alt='Zebra home page'></ImageWrap>
					<ImageWrap
						src={Concierge}
						alt='Choosing how to pay on the Zebra'></ImageWrap>
				</TwoImages>
				<Text title='Research'>
					To kickstart the redesign, I conducted a thorough
					competitive analysis and audit of our purchasing flow.
					<p className='my-4'>
						<span className='text-stone-900 dark:text-stone-50'>
							Competitive Analysis:{' '}
						</span>
						Examined insurance checkout experiences from industry
						leaders such as Geico and Allstate, along with standard
						e-commerce platforms like Stripe and Shopify.
					</p>
					<p>
						<span className='text-stone-900 dark:text-stone-50'>
							Findings:{' '}
						</span>
					</p>
					<ul className='mt-4 list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
						<li>
							The existing terminology was confusing and did not
							match industry standard terminology.
						</li>
						<li>
							We lacked a clear breakdown of pricing and payment
							options
						</li>

						<li>
							Our layout is not consistent with e-commerce
							checkout experiences.
						</li>
						<li>
							We do not provide any confirmation or review before
							purchase.
						</li>
					</ul>
				</Text>
				<ImageWrap src={Pain} alt='pain points'></ImageWrap>
				<Goal title='Design Goal'>
					How can we make the checkout experience streamlined and
					clear?{' '}
				</Goal>
				<Text>
					To create a streamlined, user-friendly checkout experience
					that instilled trust and clarity. My aim was to incorporate
					industry best practices, ensuring that users had all
					necessary information at each step of the process.
				</Text>
				<TwoImages>
					<ImageWrap src={Inspo} alt='Zebra home page'></ImageWrap>
					<ImageWrap
						src={Iteration}
						alt='Choosing how to pay on the Zebra'></ImageWrap>
				</TwoImages>
				<Text title='Design'>
					I developed multiple design iterations, including
					single-column, two-column layouts, and card-based designs,
					inspired by relevant product flows. I made sure to iterate
					on displaying discounts, savings, and payment options
					clearly.
				</Text>
				<ImageWrap src={Layout} alt='Explorations'></ImageWrap>
				<Text title='Updated Flow'>
					I decided to move forward with the two column layout and
					information given feedback from stakeholders and its
					alignment with industry standards. With the new layout, I
					updated the payment section. I simplified the form and added
					a new review page. We then tested the existing designs vs
					the new flow.
				</Text>
				<ImageWrap src={Flow} alt='new key screens'></ImageWrap>
				<ImageWrap src={test} alt='prototype'></ImageWrap>
				<Text title='A/B Testing'>
					I created interactive prototypes and conducted usability
					testing via usertesting.com with 10 users.{' '}
					<span className='text-stone-900 dark:text-stone-50'>
						8 out of 10 users preferred the new designs,
						appreciating the detailed breakdown and review page.{' '}
					</span>
					The other two users liked the new features proposed in the
					new design but preferred the old layout/visual style.
					<br></br>
					<p>
						<span className='text-stone-900 dark:text-stone-50 text-lg'>
							Findings:{' '}
						</span>
					</p>
					<ul className='mt-4 list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
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
				</Text>
				<Text title='Final Designs'>
					After our testing and sharing the feedback to stakeholders,
					I worked with the team to determine areas of improvement in
					the flow. I then updated the designs, and created responsive
					designs.
					<br></br>
					<p>
						<span className='text-stone-900 dark:text-stone-50 text-lg'>
							Design Improvements:{' '}
						</span>
					</p>
					<ul className='mt-4 list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
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
				</Text>
				<ImageWrap src={FinalRate} alt='final rate page'></ImageWrap>
				<ImageWrap src={Checkout} alt='final checkout page'></ImageWrap>
				<ImageWrap src={Today} alt='due today page'></ImageWrap>
				<ImageWrap src={Review} alt='review page'></ImageWrap>
				<ImageWrap src={PayHero} alt='mobile pages'></ImageWrap>

				<Text title='Impact'>
					I worked closely with the dev team to make responsive
					designs, error states, edge cases. We successfully shipped
					the redesign in July.{' '}
					<span className='text-stone-900 dark:text-stone-50'>
						With the newly launched designs, our payment conversions
						went up by 4%.
					</span>{' '}
					So far, there have been zero complaints about the checkout
					experience.
				</Text>
				<Text title='Reflection'>
					Diving right into the checkout redesign in my first 30 days
					was exciting. I learned a lot of things considering this was
					my first project at the Zebra:
					<ul className='mt-8 list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
						<li>
							<span className='text-stone-900 dark:text-stone-50'>
								Attention to detail:
							</span>{' '}
							Small adjustments like a simple toggle can have a
							big impact on user experience.
						</li>
						<li>
							<span className='text-stone-900 dark:text-stone-50'>
								Comfort:
							</span>{' '}
							Considering how users feel and their trust towards
							the product is essential for complex flows
						</li>
						<li>
							<span className='text-stone-900 dark:text-stone-50'>
								User-centered design:{' '}
							</span>
							Focusing on user needs and feedback will always be
							the way to go :)
						</li>
					</ul>
				</Text>
				<ProjectNav
					previous='SENSITIVE DATA'
					prevlink={'/sonar'}
					next='RENT REPORTING'
					nextlink={'/boom'}
				/>
			</MainGrid>
			<Top></Top>
		</main>
	);
}
