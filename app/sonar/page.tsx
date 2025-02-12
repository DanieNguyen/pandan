'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ImageProps } from 'next/image';
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
import {
	MainGrid,
	Hero,
	Text,
	Title,
	TwoImages,
	ImageWrap,
	LeftCaption,
	RightCaption,
	LeftImage,
	RightImage,
	Goal,
	Span,
} from '../components/CaseStudy';
import Roles from '../components/Roles';

// Dynamically import non-critical components
const ProjectNav = dynamic(() => import('../components/ProjectNav'), {
	loading: () => <div>Loading...</div>,
});

const Top = dynamic(() => import('../components/Top'), {
	loading: () => null,
});

// Optimize image imports with priority for hero image
const otherImages = {
	OldDash: () => import('../../public/images/sonar/prevDash.png'),
	Stats: () => import('../../public/images/sonar/stats.png'),
	// ... other image imports
};

export default function Home() {
	const sections = [
		{
			title: 'Role',
			items: [
				'Dashboard Redesign',
				'User Research',
				'Data Visualization',
				'Design System',
				'Responsive Design',
			],
		},
		{
			title: 'Team',
			items: [
				'1 Product Manager',
				'2 Frontend Engineers',
				'1 UX Researcher',
				'1 Sales Engineer',
			],
		},
		{
			title: 'Timeline',
			items: ['Feb 2022 - April 2022'],
		},
	];

	return (
		<main className='' id='home'>
			<NavBar />
			<ScrollBar></ScrollBar>
			<Hero
				src={SonarDash}
				alt='Sonar Hero'
				headline='Sensitive Data Discovery'
				priority={true}
				loading='eager'></Hero>
			<MainGrid>
				<div className=''>
					<Roles sections={sections} />
				</div>
				<Title>
					Redesigning the <Span>Sensitive Data Monitoring</Span>
					dashboard to provide actionable insights{' '}
				</Title>
				<Text title='Context'>
					In February, our design team migrated from an older design
					system to our new system and I was tasked to migrate our
					Data Security product flows. However, the Sensitive Data
					Monitoring {'(SDM)'} dashboard needed more than a migration
					to a new design system—it required a complete redesign to
					better address user needs and enhance its overall value.
					<br></br>
					<br></br>
					<p>
						Taking note of past user complaints, I took the
						initiative to lead this redesign, collaborating with
						cross-functional teams to deliver a more actionable and
						insightful dashboard. I conducted user research, led the
						design iterations, and drove the implementation strategy
						for this project.
					</p>
				</Text>
				<Text title='What is Sensitive Data Monitoring?'>
					Sensitive Data Monitoring is a Rubrik application that helps
					companies manage confidential information in their data
					backups. For example, healthcare organizations have critical
					data about their patients and need to follow HIPAA
					regulations on how to handle that data. SDM assists in
					identifying who has access to the data, where the data
					lives, and how secure the data is.
				</Text>
				<TwoImages>
					<ImageWrap src={Data} alt='Rubrik'></ImageWrap>
					<ImageWrap src={Rubrik} alt='Rubrik'></ImageWrap>
				</TwoImages>
				<Text title='Research'>
					To kick off the project, I collaborated closely with our UX
					Researcher to deeply understand our users&apos; mental
					models and pain points. Through extensive 60 minute
					interviews, we gained insights into how users interacted
					with the SDM dashboard and their specific challenges in
					their roles. We then created a Jobs-to-be-Done framework to
					determine the ideal user flow. The key findings were clear:{' '}
					<span className='text-stone-900 dark:text-stone-50'>
						users focused on managing sensitive data risks found the
						existing dashboard information irrelevant and
						non-actionable.
					</span>
				</Text>
				<ImageWrap src={Jobs} alt='Jobs to be done'></ImageWrap>
				<ImageWrap src={OldDash} alt='Previous Dashboard'></ImageWrap>
				<Goal title='Design Goal'>
					How can we make the dashboard more actionable and
					insightful?{' '}
				</Goal>
				<Text title='Design'>
					Our primary design goals centered on making the dashboard
					more actionable, insightful, and user-friendly. We chose to
					rebuild the dashboard from the ground up after discussing it
					with the design team. The previous dashboard was outdated by
					2-3 years and no one could justify its rationale. This
					involved a complete overhaul of the layout, terminology,
					information hierarchy, and data visualizations to align with
					user needs and enhance the overall user experience.
				</Text>
				<TwoImages>
					<ImageWrap
						src={oldLayout}
						alt='old dashboard layout'></ImageWrap>
					<ImageWrap
						src={newLayout}
						alt='new dashboard layout'></ImageWrap>
				</TwoImages>
				<Text>
					<p className='text-xl md:text-2xl mb-4 text-stone-900 dark:text-stone-50'>
						Layout Redesign
					</p>
					<p className='mb-4'>
						<span className='text-stone-900 dark:text-stone-50'>
							Initial Challenge:{' '}
						</span>
						The old dashboard layout was outdated and not optimized
						for responsiveness.
					</p>
					<p>
						<span className='text-stone-900 dark:text-stone-50'>
							Solution:{' '}
						</span>
						I migrated to a new modular grid system, enabling
						flexible widget sizes and positions, which greatly
						improved the dashboard&apos;s responsiveness and
						adaptability.
					</p>
				</Text>
				<Text>
					<p className='text-xl md:text-2xl mb-4 text-stone-900 dark:text-stone-50'>
						Terminology Clarification
					</p>
					<p className='mb-4'>
						<span className='text-stone-900 dark:text-stone-50'>
							Initial Challenge:{' '}
						</span>
						Users found terms like &apos;hits&apos; confusing and
						inconsistent since they were not industry standard
						terms.
					</p>
					<p>
						<span className='text-stone-900 dark:text-stone-50'>
							Solution:{' '}
						</span>
						Collaborating with the PM and technical writing team, we
						redefined key terms to ensure clarity and consistency,
						making the dashboard more user-friendly.
					</p>
				</Text>
				<ImageWrap src={Terms} alt='terminology'></ImageWrap>
				<Text>
					<p className='text-xl md:text-2xl mb-4 text-stone-900 dark:text-stone-50'>
						Information Hierarchy
					</p>
					<p className='mb-4'>
						<span className='text-stone-900 dark:text-stone-50'>
							Initial Challenge:{' '}
						</span>
						The dashboard did not align with users&apos; priorities.
						Since users had to manage an entire company&apos;s
						sensitive data, having files as the first visualization
						did not give a broad picture.
					</p>
					<p>
						<span className='text-stone-900 dark:text-stone-50'>
							Solution:{' '}
						</span>
						By focusing on the users&apos; mental model, I
						reformatted the dashboard to prioritize key tasks and
						information such as files, open access, policies, and
						objects.
					</p>
				</Text>
				<ImageWrap src={ih} alt='Information Hierarchy'></ImageWrap>
				<Text>
					<p className='text-xl md:text-2xl mb-4 text-stone-900 dark:text-stone-50'>
						Data Visualizations{' '}
					</p>
					<p className='mb-4'>
						<span className='text-stone-900 dark:text-stone-50'>
							Initial Challenge:{' '}
						</span>
						The existing visualizations failed to provide actionable
						insights. Users went straight to the other sections of
						the SDM app to fulfill their needs.
					</p>
					<p>
						<span className='text-stone-900 dark:text-stone-50'>
							Solution:{' '}
						</span>
						I meticulously researched and developed new
						visualizations that combined relevant statistics into
						coherent, actionable insights. Despite time constraints,
						I validated these designs with the design team, PM, and
						sales engineers, leveraging their close user
						interactions for valuable feedback.
					</p>
				</Text>

				<TwoImages>
					<ImageWrap src={Stats} alt='List of statistics'></ImageWrap>
					<ImageWrap src={inspo} alt='Inspiration'></ImageWrap>
				</TwoImages>
				<ImageWrap src={viz} alt='Widget updates'></ImageWrap>
				<Text title='Final Designs'>
					The final design combined a responsive, modular layout with
					clear terminology and insightful data visualizations. I
					worked with the engineering team ensured seamless
					implementation, resulting in a polished final product.{' '}
					<Span>
						Below is the final product currently in production.
					</Span>
				</Text>
				<ImageWrap src={final} alt='Final dashboard'></ImageWrap>
				<Text title='Impact'>
					The redesigned dashboard received overwhelmingly positive
					feedback.{' '}
					<span className='text-stone-900 dark:text-stone-50'>
						User complaints dropped to zero,
					</span>{' '}
					and users praised the improved usability and insights. The
					sales engineering team noted that the new dashboard played a
					significant role in attracting new customers due to its
					effective summary of data backups,{' '}
					<span className='text-stone-900 dark:text-stone-50'>
						providing a $10M+ revenue boost.
					</span>
				</Text>
				<Text title='Reflection'>
					Leading the SDM dashboard redesign was a rewarding
					experience, teaching me several key lessons:
				</Text>
				<ul className='mx-auto md:w-2/5 mt-8 list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
					<li>
						<span className='text-stone-900 dark:text-stone-50'>
							Ownership:
						</span>{' '}
						Designers must take initiative to push for better UX.
					</li>
					<li>
						<span className='text-stone-900 dark:text-stone-50'>
							Trust:
						</span>{' '}
						It&apos;s essential to trust one&apos;s design
						instincts, especially when usability testing isn&apos;t
						feasible.
					</li>
					<li>
						<span className='text-stone-900 dark:text-stone-50'>
							Intention:
						</span>{' '}
						Every design element must serve a clear purpose,
						contributing to the overall user experience.
					</li>
				</ul>
				<ProjectNav
					previous='SPOTIFY PODCASTS'
					prevlink={'/spotify'}
					next='INSURANCE CHECKOUT'
					nextlink={'/pay'}
				/>
			</MainGrid>
			<Top />
		</main>
	);
}
