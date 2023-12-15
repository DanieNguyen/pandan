'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import SonarDash from '../../public/images/sonar/hero.png';
import OldDash from '../../public/images/sonar/prevDash.png';
import Stats from '../../public/images/sonar/stats.png';
import oldLayout from '../../public/images/sonar/oldLayout.png';
import newLayout from '../../public/images/sonar/newLayout.png';
import Data from '../../public/images/sonar/DataMonitoring.png';
import Rubrik from '../../public/images/sonar/Rubrik.png';
import Jobs from '../../public/images/sonar/jobsDone.png';
import Terms from '../../public/images/sonar/terms.png';
import ih from '../../public/images/sonar/ih.png';
import inspo from '../../public/images/sonar/visuals.png';
import viz from '../../public/images/sonar/widgets.png';
import final from '../../public/images/sonar/final.png';
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
} from '../components/Page';

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
			<Hero src={SonarDash} alt='Sonar Hero'></Hero>
			<MainGrid>
				<div className='col-start-3 col-end-5 text-sm text-neutral-500 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
					<p className='font-medium text-black'>Role</p>
					<p className='font-light'>Dashboard Redesign</p>
					<p className='font-light'>User Research</p>
					<p className='font-light'>Data Visualization</p>
					<p className='font-light'>Responsive Design</p>
					<p className='mt-8 font-medium text-black'>Team</p>
					<p className='font-light'>1 Product Manager</p>
					<p className='font-light'>2 Frontend Engineers</p>
					<p className='font-light'>1 UX Researcher</p>
					<p className='font-light'>1 Sales Engineer</p>

					<p className='mt-8 font-medium text-black'>Timeline</p>
					<p className='font-light'>Feb 2022 - April 2022</p>

					<a
						className='mt-8 block font-medium text-black'
						href='#final'>
						<DownArrow></DownArrow> Final Designs{' '}
						<DownArrow></DownArrow>
					</a>
				</div>
				<TextGrid>
					<p className='font-inter font-light text-neutral-500 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight tracking-tighter'>
						Redesigning the <Span>Sensitive Data Monitoring</Span>
						dashboard to provide actionable insights{' '}
					</p>
					<Text title='Context'>
						Originally, the scope of the project was to migrate the
						existing dashboard into our new design system, However,
						I felt the dashboard could be improved since there were
						some user complaints about the dashboard and its value.{' '}
						<Span>
							So, I persuaded the team to redesign the entire
							dashboard.
						</Span>{' '}
						I assisted in research, led the design, and drove the
						implementation strategy for this project.
					</Text>
					<Text title='What is Sensitive Data Monitoring?'>
						Sensitive Data Monitoring (SDM) is a Rubrik application
						that helps companies manage confidential ifnroamtion in
						their data backups. For example, healthcare
						organizations have critical data about their patients
						and need to follow HIPAA regulations on how to handle
						that data. SDM assists in identifying who has access to
						the data, where the data lives, and how secure the data
						is.
					</Text>
				</TextGrid>
				<LeftImage src={Data} alt='Rubrik'></LeftImage>
				<RightImage src={Rubrik} alt='Rubrik'></RightImage>
				<TextGrid>
					<Text title='Research'>
						To begin the project, I collaborated with our user
						research to identify our users&apos; mental model and
						painpoints. We conducted interviews where we asked them
						about their role and how they use SDM in addition to
						their thoughts about the dashboard. We utilizied the
						jobs-to-be-done framework to hone in on our users&apos;
						key actions and tasks.
					</Text>
					<h3 className='mt-8'>Key Findings</h3>
					<ul className='list-disc text-neutral-500 font-light leading-7 list-inside'>
						<li>
							Users are focused on managing risk of their
							sensitive data
						</li>
						<li>
							Users don&apos;t see value in half of the
							dashboard&apos;s information
						</li>
						<li>
							Users don&apos;t think the dashboard is actionable
						</li>
					</ul>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={Jobs} alt='Jobs to be done'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap
						src={OldDash}
						alt='Previous Dashboard'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<Goal>
						How can we make the dashboard more actionable and
						insightful?{' '}
					</Goal>
				</ImageGrid>
				<TextGrid>
					<Text title='Design'>
						With the findings and goal in mind, I began to work on
						the designs. I chose to rebuild the dashboard from the
						ground up after discussing it with the design team. The
						previous dashboard was outdated by 2-3 years and no one
						could justify its purposes. So, I decided to give it a
						fresh start and work based mainly off our research and
						users&apos; thoughts. I began with the foundation of the
						dashboard: <Span>the layout.</Span>
					</Text>
				</TextGrid>

				<LeftImage
					src={oldLayout}
					alt='old dashboard layout'></LeftImage>
				<RightImage
					src={newLayout}
					alt='new dashboard layout'></RightImage>
				<TextGrid>
					<Text>
						I migrated to our new grid system and focused on
						creating a modular dashboard for responsiveness. The new
						layout allows for multiple widget sizes and positions,
						optimizing its capabilities. It also will be easier to
						make responsive since its widgets will be uniform,
						unlike the previous dashboard.
					</Text>
					<Text>
						The next problem after the layout was addressing
						users&apos; confusion about the dashboard. One of the
						main points brought up was the terminology.{' '}
						<Span>
							Users didn&apos;t understand what hits meant and the
							definitions for risk were not consistent.
						</Span>{' '}
						I worked with the PM and technical writing team to
						redefine the terminology for our users.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={Terms} alt='terminology'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						After the terms were finalized, I referred to the
						users&apos; mental model and key tasks again. Our users
						care mostly about files, then open access, then policies
						and objects. I decided to reformat the dashboard to
						match this mental modal.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={ih} alt='Information Hierarchy'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						With the basics of the dashboard set, I began working on
						the data visualizations. I spent hours researching data
						visualization and thought very carefully about how to
						give the users actionable insights. I first compiled a
						list of all the statistics/information our product can
						show and then sought to combine the information into
						different visualizations.
					</Text>
				</TextGrid>
				<LeftImage src={Stats} alt='List of statistics'></LeftImage>
				<RightImage src={inspo}></RightImage>
				<TextGrid>
					<Text>
						Unfortunately user research was not possible due to the
						timeline but I validated my widget explorations with my
						design team, the PM, and the sales engineering team.
						Since the sales engineering team works closely with
						users, their feedback was super helpful and we finalized
						on the widgets.{' '}
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={viz} alt='Widget updates'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						After the widgets were finalized, I combined them onto
						the dashboard and worked with the engineering team to
						implement the new dashboard.{' '}
						<Span>
							Below is the final product currently in production.
						</Span>
					</Text>
					<div id='final'></div>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={final} alt='Final dashboard'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Impact'>
						After the dashboard was released,{' '}
						<Span>users complaints dropped to 0%</Span> and many
						users gave compliments to the redesign. The sales
						engineering team even reported that it helped draw in
						new customers because of its great summary of their data
						backups.
					</Text>
					<Text title='Reflection'>
						I had a great time working on this project. It was
						exciting to lead this project and drive it to success.
						I&apos;m proud of convincing the team to strive for
						better UX and being able to make it happen smoothly.
						Some of my takeways:
					</Text>

					<ul className='mt-8 list-disc text-neutral-500 font-light leading-7 list-outside'>
						<li>
							It&apos;s up to the designer to take ownership for
							great UX. If I hadn&apos;t pushed for an
							improvement, then nothing would have improved for
							our users.
						</li>
						<li>
							I need to trust in myself. Despite not being able to
							validate with users&apos; at every step, I still
							need to make the best decision I can with the
							information I have.
						</li>
						<li>
							Designng with intention is important. Every element
							should matter on a screen.
						</li>
					</ul>
				</TextGrid>
				<ImageGrid>
					<div className='flex justify-between mt-24 mb-24'>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500 text-right'>
								Previous
							</p>
							<a
								className='max-w-fit'
								href='https://www.linkedin.com/in/pandang/'>
								<span className='bg-right-bottom bg-gradient-to-l from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl tracking-tight'>
									<ReverseArrow></ReverseArrow> THREAT HUNTING
								</span>
							</a>
						</div>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500'>
								Next
							</p>
							<a
								className='max-w-fit'
								href='https://www.linkedin.com/in/pandang/'>
								<span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl tracking-tight'>
									POOF CASH <DiagonalArrow></DiagonalArrow>
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
