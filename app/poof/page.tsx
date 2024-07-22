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
import Link from 'next/link';

export default function Home() {
	return (
		<main className='bg-white' id='home'>
			<div className='p-8 text-2xl md:hidden'>
				Please view on web for now. Mobile coming soon.
			</div>
			<div className='hidden md:block'>
				<NavBar></NavBar>
				<ScrollBar></ScrollBar>
			</div>
			<Hero src={PoofDash} alt='Sonar Hero' headline='Poof.Cash'></Hero>
			<MainGrid>
				<div className='col-start-3 col-end-5 text-sm text-neutral-500 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
					<p className='font-medium text-black'>Role</p>
					<p className='font-light'>Mobile App Design</p>
					<p className='font-light'>Website Design</p>
					<p className='font-light'>Branding</p>
					<p className='font-light'>Design System</p>
					<p className='font-light'>Illustrations</p>
					<p className='mt-8 font-medium text-black'>Team</p>
					<p className='font-light'>1 Founder/Engineer</p>

					<p className='mt-8 font-medium text-black'>Timeline</p>
					<p className='font-light'>March 2021 - June 2021</p>

					<a
						className='mt-8 block font-medium text-black'
						href='#final'>
						<DownArrow></DownArrow> Final Designs{' '}
						<DownArrow></DownArrow>
					</a>
				</div>
				<TextGrid>
					<p className='text-neutral-500 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight'>
						Working as the <Span>founding designer</Span>
						at a tiny <Span>cryptocurrency wallet</Span>startup{' '}
					</p>
					<Text title='Context'>
						I was approached by a lead engineer at Rubrik to design
						for a cryptocurrency hackathon. Together, we worked on
						his idea <Span>poof.cash - a private wallet</Span>.
						After the hackathon, he raised $1M funding and turned
						the hackathon project into his startup.{' '}
						<Span>
							I was hired as a part-time contractor for 3 months
							as the lead product designer.
						</Span>
					</Text>
					<Text title='What is Poof.Cash?'>
						Poof.Cash is a private wallet on the Celo ecosystem
						(Celo is similar to Ethereum). Poof allows users to
						deposit and withdraw cele without letting people on the
						blockchain to know. Normally crypto transactions are
						on-chain transactions and can be tracked which some use
						to steal funds. However, Poof.Cash hopes to solve this
						issue.
					</Text>
				</TextGrid>
				<LeftImage src={Celo} alt='Celo website'></LeftImage>
				<RightImage
					src={Wallet}
					alt='Definiton of Crypto Wallet'></RightImage>
				<TextGrid>
					<Text title='Initial Hackathon'>
						The hackathon was two weeks long where the founder and I
						collaborated on the MVP of Poof.Cash. During this stage,
						there was not much user research done due to the time
						constraints and the fact that I had no clue what
						cryptocurrency was. I relied on the founder&apos;s
						knowledge and did a competive analysis of other
						cryptocurrency products. We presented the basic user
						flows required and a live development version for the
						hackathon.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={Flow} alt='MVP user flow'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Deposit & Withdraw'>
						The main user flows for a crypto wallet are to{' '}
						<Span>deposit and withdraw crypto.</Span>I levaraged the
						competitive analysis and knowledge that I learned to
						focus on this flow. Since the hackathon was pretty fast
						paced, the main goal was to simplify the flow so it was
						more user friendly.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={MVP} alt='MVP flows'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						Although we didn&apos;t win the hackathon, we were in
						the <Span>Top 10.</Span> The founder raised funding and
						then wanted to expand on his vision for Poof.Cash. I was
						also eager to learn more since it was new domain space
						for me to design for and take ownership of.
					</Text>
				</TextGrid>
				<ImageGrid>
					<Goal title='The Start-Up Begins'>
						How can we design a complete cryptocurrency wallet from
						scratch?{' '}
					</Goal>
				</ImageGrid>
				<TextGrid>
					<Text title='Design'>
						The first steps we took were to plan out the roadmap of
						features for Poof.Cash. I created an information
						architecture diagram to map and categorize the features
						we were adding. Then I conducted another competitive
						analysis of cryptocurrency products that aligned with
						what features we wanted to develop.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={IA} alt='New IA'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap
						src={comp}
						alt='Competitive Analysis'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						I then updated the existing MVP designs and expanded on
						the additional features. It took a while to explore and
						identify the best user flows for each of these features.{' '}
						<Span>
							We conducted usability studies with crypto
							enthusiasts on Discord to refine on the designs.
						</Span>
					</Text>
					<h3 className='mt-8'>Key Findings</h3>
					<ul className='list-disc text-neutral-500 font-light leading-7 list-inside'>
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
				</TextGrid>
				<ImageGrid>
					<ImageWrap
						src={Mocks}
						alt='Explorations and Mocks'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Design System'>
						After I considered the findings and finalized my
						explorations, I focused on developing a cohesive design
						system. My goals were to consolidate components to be
						<Span>mobile-first and easy for development</Span> but
						also to create a great <Span>visual language</Span> in
						the product.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={Grid} alt='Grid and Buttons'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap
						src={Type}
						alt='Typography Guidelines'></ImageWrap>
				</ImageGrid>

				<ImageGrid>
					<ImageWrap src={Color} alt='Colors'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Brand'>
						In addition to the design system itself, we needed to
						design the company brand. I discussed with the founder
						and narrowed down his key principles and values for the
						company. With them in mind, I developed the logo,
						illustrations, and marketing website.
					</Text>
					<h3 className='mt-8'>Values</h3>
					<ul className='list-disc text-neutral-500 font-light leading-7 list-inside'>
						<li>Magical</li>
						<li>Trustworthy</li>
						<li>Secure</li>
					</ul>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={logo} alt='Logo'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<div id='final'></div>
					<Text title='Final App Designs'>
						With the design improvements, new design system, and
						branding, I wrapped up the app designs. The new designs
						include a much simpler interface in addition to user
						friendly onboarding and navigation. Below shows the
						improved deposit and withdrawal flow plus some of the
						other key flows.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={close} alt='close up'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap src={final} alt='Final Designs'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap src={dark} alt='dark mode'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						To accompany the new product, I worked on the marketing
						website as well.{' '}
						<Span>
							I designed the page, created the illustrations, and
							coded the site using NextJS.
						</Span>{' '}
						The intent of having a magical product led me to create
						the branding elements based on cards with a splash of
						medieval influence since cards have royalty on them.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={market} alt='Marketing site'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Impact'>
						We successfully launched the initial product of
						Poof.Cash in June 2021. There were rave reviews for the
						website and product. Total volume of crypto into
						Poof.Cash was over $1M. However, my contract ended and I
						did not keep in touch with the project. It is now closed
						(probably due to the market going down)...but it was a
						fun and great experience for me.
					</Text>
					<Text title='Reflection'>
						I never thought that I would be a founding designer for
						any project and it really tested my limits especially
						since it was a side project. However, I gained a lot of
						experience and had a lot of fun. Some of my takeways:
					</Text>

					<ul className='mt-8 list-disc text-neutral-500 font-light leading-7 list-outside'>
						<li>
							Cohesiveness is important in design. Bringing
							together different elements, features, and even
							visuals has to be very intentional or else it can
							make it difficult to use the product.
						</li>
						<li>
							I need to remember that I am a designer. Since I was
							so unfamiliar with the domain space, I leaned a lot
							on the founder even when I thought his direction
							would lead to bad ux. Luckily the users proved me
							right, but I should learn to advocate for design in
							cross-functional teams.
						</li>
						<li>
							Visual design can be part of a great user experience
							too. I had a blast working on the branding and
							marketing sites, thinking about how to draw in users
							and embed moments of magic into the UI as well.
						</li>
					</ul>
				</TextGrid>
				<ImageGrid>
					<div className='flex justify-between mt-24 mb-24'>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500 text-right'>
								Previous
							</p>
							<a className='max-w-fit' href='/pay'>
								<span className='bg-right-bottom bg-gradient-to-l text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl'>
									<ReverseArrow></ReverseArrow> THE ZEBRA
									CHECKOUT
								</span>
							</a>
						</div>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500'>
								Next
							</p>
							<a className='max-w-fit' href='/threat'>
								<span className='bg-left-bottom bg-gradient-to-r text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl'>
									THREAT HUNTING{' '}
									<DiagonalArrow></DiagonalArrow>
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
