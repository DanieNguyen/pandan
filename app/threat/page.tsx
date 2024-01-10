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
			<Hero src={threat} alt='Threat Hero'></Hero>
			<MainGrid>
				<div className='col-start-3 col-end-5 text-sm text-neutral-500 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
					<p className='font-medium text-black'>Role</p>
					<p className='font-light'>App Design</p>
					<p className='font-light'>User Research</p>
					<p className='font-light'>FTUX Design</p>
					<p className='mt-8 font-medium text-black'>Team</p>
					<p className='font-light'>1 Product Manager</p>
					<p className='font-light'>2 Frontend Engineers</p>

					<p className='mt-8 font-medium text-black'>Timeline</p>
					<p className='font-light'>April 2022 - Aug 2022</p>

					<a
						className='mt-8 block font-medium text-black'
						href='#final'>
						<DownArrow></DownArrow> Final Designs{' '}
						<DownArrow></DownArrow>
					</a>
				</div>
				<TextGrid>
					<p className='font-inter font-light text-neutral-500 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight tracking-tighter'>
						Searching for <Span>cyber threats</Span> inside company
						backup data with ease
					</p>
					<Text title='Context'>
						I worked as the sole designer for Rubrik&apos;s new
						threat hunting feature. It was a project spanning 6
						months from conception to implementation. I conducted
						research, ideation, and designed the feature in 3
						months.
					</Text>
					<Text title='What is Threat Hunting?'>
						Recently companies are being targeted by ransomware
						attacks. With time, attacks are becoming more and more
						advanced. Ransomware can be dormant for months in a
						company&apos;s data - known as a payload. Threat Hunting
						helps discover payloads and any malicious actors in the
						data and can quarantine them.
					</Text>
				</TextGrid>
				<LeftImage src={ransom} alt='Ransom'></LeftImage>
				<RightImage src={payload} alt='Payload'></RightImage>
				<TextGrid>
					<Text title='Scope'>
						Given the constraints of the project, we were not able
						to conduct initial user research. But I worked with the
						PM to fully understand the scope of the project and the
						intended user flows for Threat Hunting. I summarized all
						the features we were going to implement and the user
						flow in Figjam.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={flow} alt='Feature Flow'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap src={userflow} alt='Userflow'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Persona'>
						One thing we had to consider was how our typical Rubrik
						user would handle this new feature. Rubrik is primarily
						a backup tool and Threat Hunting is more a security
						tool. The backup admins will have to be introduced to
						the new feature properly.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={persona} alt='Persona'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<Goal title='Design Goal'>
						How can we make a security tool that backup admins can
						use?{' '}
					</Goal>
				</ImageGrid>
				<TextGrid>
					<Text title='Design'>
						With the scope and goal in mind, I began to work on the
						designs. I designed a rough draft for the first version
						so we could do quick usability testing.{' '}
						<Span>
							Note: I am leaving out some details here since the
							workflow and domain space is a bit complicated to
							explain. If you are interested in this project, I
							can discuss it with you in person!
						</Span>
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={mvp} alt='MVP designs'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Usability Testing'>
						I conducted and moderated 5 usability tests with a Figma
						prototype of the MVP designs. The feedback was mixed
						since the backup admins were a bit hesitant about the
						feature due to its complexity.
					</Text>
					<h3 className='mt-8'>Key Findings</h3>
					<ul className='list-disc text-neutral-500 font-light leading-7 list-inside'>
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
				</TextGrid>
				<ImageGrid>
					<ImageWrap
						src={usability}
						alt='Usability Changes'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						I adjusted the designs based on the feedback while
						considering the engineering limitations. The key
						improvements I made were including a{' '}
						<Span>Learn More</Span> section in most steps of the
						modal and{' '}
						<Span>
							updated the table columns to be simpler with
							additional filters.
						</Span>
					</Text>
					<Text title='Designing Complete Flow'>
						With the findings addressed, I worked on designing the
						rest of the feature flows. There were many steps,
						states, and flows that had to be considered so this took
						a while.{' '}
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={complete} alt='All flows'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<div id='final'></div>
					<Text title='Final Designs'>
						Unfortunately there was no more user testing done due to
						the engineering timeline. However, the sales engineering
						team did give positive feedback on the feature.
						<Span>
							Below are some of the key screens in the final
							product currently in production.
						</Span>
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={final} alt='Final mocks'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Impact'>
						The feature was received well among our users. We
						managed to get{' '}
						<Span>125+ users in the first year of its launch</Span>
						and have had great feedback on its use.
					</Text>
					<Text title='Reflection'>
						This project was one of the most detailed projects I
						have worked on at Rubrik. It was challenging to lead a
						brand new feature but I learned a lot. Some of my
						takeways:
					</Text>

					<ul className='mt-8 list-disc text-neutral-500 font-light leading-7 list-outside'>
						<li>
							It&apos;s up to the designer to push for research. I
							had to advocate and lead the usability testing
							because I felt it was necessary.
						</li>
						<li>
							States and edge cases are crucial. There are always
							things to be aware of while working such as
							failures, in-progress things, and first time
							experiences.
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
								<span className='bg-right-bottom bg-gradient-to-l text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl tracking-tight'>
									<ReverseArrow></ReverseArrow> SONAR
								</span>
							</a>
						</div>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500'>
								Next
							</p>
							<a className='max-w-fit' href='/poof'>
								<span className='bg-left-bottom bg-gradient-to-r text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl tracking-tight'>
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
