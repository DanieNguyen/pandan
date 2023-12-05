'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import SonarDash from '../../public/images/sonar/sonarhero.png';
import OldDash from '../../public/images/sonar/olddash.png';
import Stats from '../../public/images/sonar/stats.png';
import Data from '../../public/images/sonar/DataMonitoring.png';
import Rubrik from '../../public/images/sonar/Rubrik.png';
import Jobs from '../../public/images/sonar/jobs.png';
import { DiagonalArrow, ReverseArrow } from '../components/Arrow';
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
	Problem,
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
				</div>
				<TextGrid>
					<p className='font-inter font-light text-neutral-500 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight tracking-tighter'>
						Redesigning the{' '}
						<span className='text-black font-normal'>
							Data Discovery
						</span>{' '}
						dashboard to help companies identify and summarize
						sensitive data in their environment.{' '}
					</p>
					<Text title='Overview'>
						While the data discovery platform helped our users
						discover patterns and manage their sensitive data, the
						main dashboard did not accurately summarize and show the
						big picture of our users’ data. Users expressed
						confusion towards the dashboard and its overall value.
						We worked to resolve this confusion with a complete
						redesign of the Data Discovery Dashboard.
					</Text>
					<Text title='The Product'>
						The Data Discovery platform helps companies identify
						sensitive data in their environment. With ransomware on
						the rise, maintaining visibility of sensitive
						information such as users’ credit cards is key to data
						security. The platform also helps with compliance for
						legal regulations such as the HIPAA and GDPR.
					</Text>
				</TextGrid>
				<LeftImage src={Data} alt='Rubrik'></LeftImage>
				<RightImage src={Rubrik} alt='Rubrik'></RightImage>
				<TextGrid>
					<Text title='Opportunity'>
						The original scope of the project was to migrate the
						existing Data Discovery Dashboard to the new design
						system. However, given the past user complaints and
						research findings, I pushed our team to redesign the
						dashboard instead. With agreement from my PM and
						Engineering counterparts, I drove the project from
						end-to-end.
					</Text>
					<Text title='Research'>
						A couple months prior to this project, our UX
						researcher, PM, and I interviewed 7 users about the Data
						Discovery platform to identify their mental modal and
						jobs to be done in regards to data security. We also
						received feedback from the sales team with direct user
						complaints for the dashboard.
					</Text>
				</TextGrid>
				<ImageGrid>
					<Problem>
						The existing dashboard lacks actionable insights for
						users. There’s a lack of cohesion between data
						visualizations and unclear terminology used.{' '}
					</Problem>
				</ImageGrid>
				<TextGrid>
					<Text title='Design'>
						With the problem defined, I began my design process for
						the dashboard and worked with the design team to iterate
						and explore my thought processes. As we were on a tight
						timeline, I defined three goals for the dashboard to
						help myself focus.
					</Text>
					<Text title='Research'>
						A couple months prior to this project, our UX
						researcher, PM, and I interviewed 7 users about the Data
						Discovery platform to identify their mental modal and
						jobs to be done in regards to data security. We also
						received feedback from the sales team with direct user
						complaints for the dashboard.
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
					<div className='flex justify-between mt-24'>
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
		</main>
	);
}
