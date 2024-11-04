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
import ProjectNav from '../components/ProjectNav';
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

export default function Home() {
	return (
		<main className='' id='home'>
			<div className='p-8 text-2xl md:hidden'>
				Please view on web for now. Mobile coming soon.
			</div>
			<div className='hidden md:block'>
				<NavBar></NavBar>
				<ScrollBar></ScrollBar>
			</div>
			<Hero
				src={SonarDash}
				alt='Sonar Hero'
				headline='Sensitive Data Discovery'></Hero>
			<MainGrid>
				<div className='col-start-3 col-end-5 text-sm text-stone-500 dark:text-stone-300 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
					<p className='font-medium text-black dark:text-white'>
						Role
					</p>
					<p className='font-light'>Dashboard Redesign</p>
					<p className='font-light'>User Research</p>
					<p className='font-light'>Data Visualization</p>
					<p className='font-light'>Design System</p>
					<p className='font-light'>Responsive Design</p>
					<p className='mt-8 font-medium text-black dark:text-white'>
						Team
					</p>
					<p className='font-light'>1 Product Manager</p>
					<p className='font-light'>2 Frontend Engineers</p>
					<p className='font-light'>1 UX Researcher</p>
					<p className='font-light'>1 Sales Engineer</p>

					<p className='mt-8 font-medium text-black dark:text-white'>
						Timeline
					</p>
					<p className='font-light'>Feb 2022 - April 2022</p>

					<a
						className='mt-8 block font-medium text-black dark:text-white'
						href='#final'>
						<DownArrow></DownArrow> Final Designs{' '}
						<DownArrow></DownArrow>
					</a>
				</div>
				<TextGrid>
					<p className='text-stone-500 dark:text-stone-300 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight'>
						Redesigning the <Span>Sensitive Data Monitoring</Span>
						dashboard to provide actionable insights{' '}
					</p>
					<Text title='Context'>
						In February, our design team migrated from an older
						design system to our new system and I was tasked to
						migrate our Data Security product flows. However, the
						Sensitive Data Monitoring {'(SDM)'} dashboard needed
						more than a migration to a new design system—it required
						a complete redesign to better address user needs and
						enhance its overall value.
						<br></br>
						<br></br>
						<p>
							Taking note of past user complaints, I took the
							initiative to lead this redesign, collaborating with
							cross-functional teams to deliver a more actionable
							and insightful dashboard. I conducted user research,
							led the design iterations, and drove the
							implementation strategy for this project.
						</p>
					</Text>
					<Text title='What is Sensitive Data Monitoring?'>
						Sensitive Data Monitoring is a Rubrik application that
						helps companies manage confidential information in their
						data backups. For example, healthcare organizations have
						critical data about their patients and need to follow
						HIPAA regulations on how to handle that data. SDM
						assists in identifying who has access to the data, where
						the data lives, and how secure the data is.
					</Text>
				</TextGrid>
				<LeftImage src={Data} alt='Rubrik'></LeftImage>
				<RightImage src={Rubrik} alt='Rubrik'></RightImage>
				<TextGrid>
					<Text title='Research'>
						To kick off the project, I collaborated closely with our
						UX Researcher to deeply understand our users&apos;
						mental models and pain points. Through extensive 60
						minute interviews, we gained insights into how users
						interacted with the SDM dashboard and their specific
						challenges in their roles. We then created a
						Jobs-to-be-Done framework to determine the ideal user
						flow. The key findings were clear:{' '}
						<span className='text-black dark:text-white'>
							users focused on managing sensitive data risks found
							the existing dashboard information irrelevant and
							non-actionable.
						</span>
					</Text>
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
					<Goal title='Design Goal'>
						How can we make the dashboard more actionable and
						insightful?{' '}
					</Goal>
				</ImageGrid>
				<TextGrid>
					<Text title='Design'>
						Our primary design goals centered on making the
						dashboard more actionable, insightful, and
						user-friendly. We chose to rebuild the dashboard from
						the ground up after discussing it with the design team.
						The previous dashboard was outdated by 2-3 years and no
						one could justify its rationale. This involved a
						complete overhaul of the layout, terminology,
						information hierarchy, and data visualizations to align
						with user needs and enhance the overall user experience.
					</Text>
				</TextGrid>

				<LeftImage
					src={oldLayout}
					alt='old dashboard layout'></LeftImage>
				<RightImage
					src={newLayout}
					alt='new dashboard layout'></RightImage>
				<TextGrid>
					<div className='text-stone-500 dark:text-stone-300 text-lg'>
						<h1 className='text-black dark:text-white text-xl font-bold mb-4 mt-8'>
							Layout Redesign
						</h1>
						<p className='mb-4'>
							<span className='text-black dark:text-white'>
								Initial Challenge:{' '}
							</span>
							The old dashboard layout was outdated and not
							optimized for responsiveness.
						</p>
						<p>
							<span className='text-black dark:text-white'>
								Solution:{' '}
							</span>
							I migrated to a new modular grid system, enabling
							flexible widget sizes and positions, which greatly
							improved the dashboard&apos;s responsiveness and
							adaptability.
						</p>
					</div>
					<div className='text-stone-500 dark:text-stone-300 text-lg'>
						<h1 className='text-black dark:text-white text-xl font-bold mb-4 mt-8'>
							Terminology Clarification
						</h1>
						<p className='mb-4'>
							<span className='text-black dark:text-white'>
								Initial Challenge:{' '}
							</span>
							Users found terms like &apos;hits&apos; confusing
							and inconsistent since they were not industry
							standard terms.
						</p>
						<p>
							<span className='text-black dark:text-white'>
								Solution:{' '}
							</span>
							Collaborating with the PM and technical writing
							team, we redefined key terms to ensure clarity and
							consistency, making the dashboard more
							user-friendly.
						</p>
					</div>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={Terms} alt='terminology'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<div className='text-stone-500 dark:text-stone-300  text-lg'>
						<h1 className='text-black dark:text-white text-xl font-bold mb-4 mt-8'>
							Information Hierarchy
						</h1>
						<p className='mb-4'>
							<span className='text-black dark:text-white'>
								Initial Challenge:{' '}
							</span>
							The dashboard did not align with users&apos;
							priorities. Since users had to manage an entire
							company&apos;s sensitive data, having files as the
							first visualization did not give a broad picture.
						</p>
						<p>
							<span className='text-black dark:text-white'>
								Solution:{' '}
							</span>
							By focusing on the users&apos; mental model, I
							reformatted the dashboard to prioritize key tasks
							and information such as files, open access,
							policies, and objects.
						</p>
					</div>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={ih} alt='Information Hierarchy'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<div className='text-stone-500 dark:text-stone-300 text-lg'>
						<h1 className='text-black dark:text-white text-xl font-bold mb-4 mt-8'>
							Data Visualizations{' '}
						</h1>
						<p className='mb-4'>
							<span className='text-black dark:text-white'>
								Initial Challenge:{' '}
							</span>
							The existing visualizations failed to provide
							actionable insights. Users went straight to the
							other sections of the SDM app to fulfill their
							needs.
						</p>
						<p>
							<span className='text-black dark:text-white'>
								Solution:{' '}
							</span>
							I meticulously researched and developed new
							visualizations that combined relevant statistics
							into coherent, actionable insights. Despite time
							constraints, I validated these designs with the
							design team, PM, and sales engineers, leveraging
							their close user interactions for valuable feedback.
						</p>
					</div>
				</TextGrid>
				<LeftImage src={Stats} alt='List of statistics'></LeftImage>
				<RightImage src={inspo} alt='Inspiration'></RightImage>
				<ImageGrid>
					<ImageWrap src={viz} alt='Widget updates'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<div id='final'></div>

					<Text title='Final Designs'>
						The final design combined a responsive, modular layout
						with clear terminology and insightful data
						visualizations. I worked with the engineering team
						ensured seamless implementation, resulting in a polished
						final product.{' '}
						<Span>
							Below is the final product currently in production.
						</Span>
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={final} alt='Final dashboard'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Impact'>
						The redesigned dashboard received overwhelmingly
						positive feedback.{' '}
						<span className='text-black dark:text-white'>
							User complaints dropped to zero,
						</span>{' '}
						and users praised the improved usability and insights.
						The sales engineering team noted that the new dashboard
						played a significant role in attracting new customers
						due to its effective summary of data backups,{' '}
						<span className='text-black dark:text-white'>
							providing a $10M+ revenue boost.
						</span>
					</Text>
					<Text title='Reflection'>
						Leading the SDM dashboard redesign was a rewarding
						experience, teaching me several key lessons:
					</Text>

					<ul className='mt-8 list-disc text-stone-500 dark:text-stone-300 font-light text-lg leading-7 list-outside'>
						<li>
							<span className='text-black dark:text-white'>
								Ownership:
							</span>{' '}
							Designers must take initiative to push for better
							UX.
						</li>
						<li>
							<span className='text-black dark:text-white'>
								Trust:
							</span>{' '}
							It&apos;s essential to trust one&apos;s design
							instincts, especially when usability testing
							isn&apos;t feasible.
						</li>
						<li>
							<span className='text-black dark:text-white'>
								Intention:
							</span>{' '}
							Every design element must serve a clear purpose,
							contributing to the overall user experience.
						</li>
					</ul>
				</TextGrid>
				<ImageGrid>
					<ProjectNav
						previous='CREDIT BOOST'
						prevlink={'/boom'}
						next='THE ZEBRA CHECKOUT'
						nextlink={'/pay'}
					/>
				</ImageGrid>
			</MainGrid>
			<Top></Top>
		</main>
	);
}
