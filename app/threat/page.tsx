'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import threat from '../../public/images/threat/threatHero.png';
import ransom from '../../public/images/threat/ransom.png';
import payload from '../../public/images/threat/payload.png';
import flow from '../../public/images/threat/featureflow.png';
import userflow from '../../public/images/threat/userflow.png';
import mvp from '../../public/images/threat/mvp.png';
import usability from '../../public/images/threat/usability.png';
import complete from '../../public/images/threat/complete.png';
import final from '../../public/images/threat/final.png';
import persona from '../../public/images/threat/persona.png';
import { DiagonalArrow, ReverseArrow, DownArrow } from '../components/Arrow';
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
			items: ['App Design', 'User Research', 'FTUX Design'],
		},
		{
			title: 'Team',
			items: ['1 Product Manager', '2 Frontend Engineers'],
		},
		{
			title: 'Timeline',
			items: ['April 2022 - Aug 2022'],
		},
	];

	return (
		<main className='' id='home'>
			<NavBar />
			<ScrollBar></ScrollBar>
			<Hero
				src={threat}
				alt='Threat Hero'
				headline='Threat Hunting'
				priority={true}
				loading='eager'
			/>
			<MainGrid>
				<div className=''>
					<Roles sections={sections} />
				</div>

				<Title>
					Searching for <Span>cyber threats</Span> inside company
					backup data with ease
				</Title>

				<Text title='Context'>
					I worked as the sole designer for Rubrik&apos;s new threat
					hunting feature. It was a project spanning 6 months from
					conception to implementation. I conducted research,
					ideation, and designed the feature in 3 months.
				</Text>

				<Text title='What is Threat Hunting?'>
					Recently companies are being targeted by ransomware attacks.
					With time, attacks are becoming more and more advanced.
					Ransomware can be dormant for months in a company&apos;s
					data - known as a payload. Threat Hunting helps discover
					payloads and any malicious actors in the data and can
					quarantine them.
				</Text>

				<TwoImages>
					<ImageWrap src={ransom} alt='Ransom' />
					<ImageWrap src={payload} alt='Payload' />
				</TwoImages>

				<Text title='Scope'>
					Given the constraints of the project, we were not able to
					conduct initial user research. But I worked with the PM to
					fully understand the scope of the project and the intended
					user flows for Threat Hunting. I summarized all the features
					we were going to implement and the user flow in Figjam.
				</Text>

				<ImageWrap src={flow} alt='Feature Flow' />
				<ImageWrap src={userflow} alt='Userflow' />

				<Text title='Persona'>
					One thing we had to consider was how our typical Rubrik user
					would handle this new feature. Rubrik is primarily a backup
					tool and Threat Hunting is more a security tool. The backup
					admins will have to be introduced to the new feature
					properly.
				</Text>

				<ImageWrap src={persona} alt='Persona' />

				<Goal title='Design Goal'>
					How can we make a security tool that backup admins can use?
				</Goal>

				<Text title='Design'>
					With the scope and goal in mind, I began to work on the
					designs. I designed a rough draft for the first version so
					we could do quick usability testing.{' '}
					<Span>
						Note: I am leaving out some details here since the
						workflow and domain space is a bit complicated to
						explain. If you are interested in this project, I can
						discuss it with you in person!
					</Span>
				</Text>

				<ImageWrap src={mvp} alt='MVP designs' />

				<Text title='Usability Testing'>
					I conducted and moderated 5 usability tests with a Figma
					prototype of the MVP designs. The feedback was mixed since
					the backup admins were a bit hesitant about the feature due
					to its complexity.
				</Text>

				<div className='mx-auto md:w-2/5'>
					<h3 className='text-xl md:text-2xl mb-4 text-stone-900 dark:text-stone-50'>
						Key Findings
					</h3>
					<ul className='list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
						<li>
							Users would like to have a guide throughout the
							workflow since it is complex.
						</li>
						<li>
							Users did not understand some of the column headers
							in the results. They felt it could be reworded
						</li>
						<li>
							Users wanted the process to be more automated with
							suggestions if possible.
						</li>
					</ul>
				</div>

				<ImageWrap src={usability} alt='Usability Changes' />

				<Text>
					I adjusted the designs based on the feedback while
					considering the engineering limitations. The key
					improvements I made were including a <Span>Learn More</Span>{' '}
					section in most steps of the modal and{' '}
					<Span>
						updated the table columns to be simpler with additional
						filters.
					</Span>
				</Text>

				<Text title='Designing Complete Flow'>
					With the findings addressed, I worked on designing the rest
					of the feature flows. There were many steps, states, and
					flows that had to be considered so this took a while.
				</Text>

				<ImageWrap src={complete} alt='All flows' />

				<div id='final'></div>
				<Text title='Final Designs'>
					Unfortunately there was no more user testing done due to the
					engineering timeline. However, the sales engineering team
					did give positive feedback on the feature.
					<Span>
						Below are some of the key screens in the final product
						currently in production.
					</Span>
				</Text>

				<ImageWrap src={final} alt='Final mocks' />

				<Text title='Impact'>
					The feature was received well among our users. We managed to
					get <Span>125+ users in the first year of its launch</Span>
					and have had great feedback on its use.
				</Text>

				<Text title='Reflection'>
					This project was one of the most detailed projects I have
					worked on at Rubrik. It was challenging to lead a brand new
					feature but I learned a lot. Some of my takeways:
				</Text>

				<ul className='mx-auto md:w-2/5 mt-8 list-disc text-stone-600 dark:text-stone-400 font-light text-lg leading-7 list-outside'>
					<li>
						It&apos;s up to the designer to push for research. I had
						to advocate and lead the usability testing because I
						felt it was necessary.
					</li>
					<li>
						States and edge cases are crucial. There are always
						things to be aware of while working such as failures,
						in-progress things, and first time experiences.
					</li>
				</ul>

				<ProjectNav
					previous='POOF.CASH'
					prevlink={'/poof'}
					next='SPOTIFY PODCASTS'
					nextlink={'/spotify'}
				/>
			</MainGrid>
			<Top />
		</main>
	);
}
