'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import PoofDash from '../../public/images/poof/poofHero.png';
import MVP from '../../public/images/poof/mvp.png';
import Celo from '../../public/images/poof/celo.png';
import Wallet from '../../public/images/poof/crypto.png';
import Flow from '../../public/images/poof/userFlow.png';
import comp from '../../public/images/poof/comp.png';
import IA from '../../public/images/poof/newIA.png';
import Mocks from '../../public/images/poof/explorations.png';
import Grid from '../../public/images/poof/grid.png';
import Type from '../../public/images/poof/type.png';
import Color from '../../public/images/poof/color.png';
import logo from '../../public/images/poof/logo.png';
import final from '../../public/images/poof/flows.png';
import dark from '../../public/images/poof/dark.png';
import close from '../../public/images/poof/close.png';
import market from '../../public/images/poof/website.png';
import {
	MainGrid,
	Hero,
	Text,
	Title,
	TwoImages,
	ImageWrap,
	Goal,
	Span,
} from '../components/CaseStudy';
import dynamic from 'next/dynamic';
import Roles from '../components/Roles';

const ProjectNav = dynamic(() => import('../components/ProjectNav'), {
	loading: () => <div>Loading...</div>,
});

const Top = dynamic(() => import('../components/Top'), {
	loading: () => null,
});

export default function Home() {
	const sections = [
		{
			title: 'Role',
			items: [
				'Mobile App Design',
				'Website Design',
				'Branding',
				'Design System',
				'Illustrations',
			],
		},
		{
			title: 'Team',
			items: ['1 Founder/Engineer'],
		},
		{
			title: 'Timeline',
			items: ['March 2021 - June 2021'],
		},
	];

	return (
		<main className='' id='home'>
			<div className='p-8 text-2xl md:hidden'>
				Please view on web for now. Mobile coming soon.
			</div>
			<div className='hidden md:block'>
				<NavBar />
				<ScrollBar />
			</div>
			<Hero
				src={PoofDash}
				alt='Poof Hero'
				headline='Poof.Cash'
				priority={true}
				loading='eager'
			/>
			<MainGrid>
				<div className=''>
					<Roles sections={sections} />
				</div>

				<Title>
					Working as the <Span>founding designer</Span> at a tiny{' '}
					<Span>cryptocurrency wallet</Span> startup
				</Title>

				<Text title='Context'>
					I was approached by a lead engineer at Rubrik to design for
					a cryptocurrency hackathon. Together, we worked on his idea{' '}
					<Span>poof.cash - a private wallet</Span>. After the
					hackathon, he raised $1M funding and turned the hackathon
					project into his startup.{' '}
					<Span>
						I was hired as a part-time contractor for 3 months as
						the lead product designer.
					</Span>
				</Text>

				<Text title='What is Poof.Cash?'>
					Poof.Cash is a private wallet on the Celo ecosystem (Celo is
					similar to Ethereum). Poof allows users to deposit and
					withdraw cele without letting people on the blockchain to
					know. Normally crypto transactions are on-chain transactions
					and can be tracked which some use to steal funds. However,
					Poof.Cash hopes to solve this issue.
				</Text>

				<TwoImages>
					<ImageWrap src={Celo} alt='Celo website' />
					<ImageWrap src={Wallet} alt='Definition of Crypto Wallet' />
				</TwoImages>

				<Text title='Initial Hackathon'>
					The hackathon was two weeks long where the founder and I
					collaborated on the MVP of Poof.Cash. During this stage,
					there was not much user research done due to the time
					constraints and the fact that I had no clue what
					cryptocurrency was. I relied on the founder&apos;s knowledge
					and did a competive analysis of other cryptocurrency
					products. We presented the basic user flows required and a
					live development version for the hackathon.
				</Text>

				<ImageWrap src={Flow} alt='MVP user flow' />

				<Text title='Deposit & Withdraw'>
					The main user flows for a crypto wallet are to{' '}
					<Span>deposit and withdraw crypto.</Span> I levaraged the
					competitive analysis and knowledge that I learned to focus
					on this flow. Since the hackathon was pretty fast paced, the
					main goal was to simplify the flow so it was more user
					friendly.
				</Text>

				<ImageWrap src={MVP} alt='MVP flows' />

				<Text>
					Although we didn&apos;t win the hackathon, we were in the{' '}
					<Span>Top 10.</Span> The founder raised funding and then
					wanted to expand on his vision for Poof.Cash. I was also
					eager to learn more since it was new domain space for me to
					design for and take ownership of.
				</Text>

				<Goal title='The Start-Up Begins'>
					How can we design a complete cryptocurrency wallet from
					scratch?
				</Goal>

				<Text title='Design'>
					The first steps we took were to plan out the roadmap of
					features for Poof.Cash. I created an information
					architecture diagram to map and categorize the features we
					were adding. Then I conducted another competitive analysis
					of cryptocurrency products that aligned with what features
					we wanted to develop.
				</Text>

				<ImageWrap src={IA} alt='New IA' />
				<ImageWrap src={comp} alt='Competitive Analysis' />

				<Text>
					I then updated the existing MVP designs and expanded on the
					additional features. It took a while to explore and identify
					the best user flows for each of these features.{' '}
					<Span>
						We conducted usability studies with crypto enthusiasts
						on Discord to refine on the designs.
					</Span>
				</Text>

				<div className='mx-auto md:w-2/5'>
					<h3 className='text-xl md:text-2xl mb-4 text-stone-900 dark:text-stone-50'>
						Key Findings
					</h3>
					<ul className='list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
						<li>
							Users desire transparency and confirmation since
							crypto transactions cannot be reversed
						</li>
						<li>Users hope for a dark mode version of the app</li>
						<li>
							Users want to have simplified interactions
							(one-click copy)
						</li>
					</ul>
				</div>

				<ImageWrap src={Mocks} alt='Explorations and Mocks' />

				<Text title='Design System'>
					After I considered the findings and finalized my
					explorations, I focused on developing a cohesive design
					system. My goals were to consolidate components to be{' '}
					<Span>mobile-first and easy for development</Span> but also
					to create a great <Span>visual language</Span> in the
					product.
				</Text>

				<ImageWrap src={Grid} alt='Grid and Buttons' />
				<ImageWrap src={Type} alt='Typography Guidelines' />
				<ImageWrap src={Color} alt='Colors' />

				<Text title='Brand'>
					In addition to the design system itself, we needed to design
					the company brand. I discussed with the founder and narrowed
					down his key principles and values for the company. With
					them in mind, I developed the logo, illustrations, and
					marketing website.
				</Text>

				<div className='mx-auto md:w-2/5'>
					<h3 className='text-xl md:text-2xl mb-4 text-stone-900 dark:text-stone-50'>
						Values
					</h3>
					<ul className='list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
						<li>Magical</li>
						<li>Trustworthy</li>
						<li>Secure</li>
					</ul>
				</div>

				<ImageWrap src={logo} alt='Logo' />

				<div id='final'></div>
				<Text title='Final App Designs'>
					With the design improvements, new design system, and
					branding, I wrapped up the app designs. The new designs
					include a much simpler interface in addition to user
					friendly onboarding and navigation. Below shows the improved
					deposit and withdrawal flow plus some of the other key
					flows.
				</Text>

				<ImageWrap src={close} alt='close up' />
				<ImageWrap src={final} alt='Final Designs' />
				<ImageWrap src={dark} alt='dark mode' />

				<Text>
					To accompany the new product, I worked on the marketing
					website as well.{' '}
					<Span>
						I designed the page, created the illustrations, and
						coded the site using NextJS.
					</Span>{' '}
					The intent of having a magical product led me to create the
					branding elements based on cards with a splash of medieval
					influence since cards have royalty on them.
				</Text>

				<ImageWrap src={market} alt='Marketing site' />

				<Text title='Impact'>
					We successfully launched the initial product of Poof.Cash in
					June 2021. There were rave reviews for the website and
					product. Total volume of crypto into Poof.Cash was over $1M.
					However, my contract ended and I did not keep in touch with
					the project. It is now closed (probably due to the market
					going down)...but it was a fun and great experience for me.
				</Text>

				<Text title='Reflection'>
					I never thought that I would be a founding designer for any
					project and it really tested my limits especially since it
					was a side project. However, I gained a lot of experience
					and had a lot of fun. Some of my takeways:
				</Text>

				<ul className='mx-auto md:w-2/5 mt-8 list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
					<li>
						Cohesiveness is important in design. Bringing together
						different elements, features, and even visuals has to be
						very intentional or else it can make it difficult to use
						the product.
					</li>
					<li>
						I need to remember that I am a designer. Since I was so
						unfamiliar with the domain space, I leaned a lot on the
						founder even when I thought his direction would lead to
						bad ux. Luckily the users proved me right, but I should
						learn to advocate for design in cross-functional teams.
					</li>
					<li>
						Visual design can be part of a great user experience
						too. I had a blast working on the branding and marketing
						sites, thinking about how to draw in users and embed
						moments of magic into the UI as well.
					</li>
				</ul>

				<ProjectNav
					previous='RENT REPORTING'
					prevlink={'/boom'}
					next='THREAT HUNTING'
					nextlink={'/threat'}
				/>
			</MainGrid>
			<Top />
		</main>
	);
}
