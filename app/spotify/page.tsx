'use client'; // This is a client component 👈🏽
import ScrollBar from '../components/ScrollBar';
import NavBar from '../components/NavBar';
import SpotDash from '../../public/images/spotify/spotHero.png';
import Spot from '../../public/images/spotify/spot.png';
import Pod from '../../public/images/spotify/spotguide.png';
import flow from '../../public/images/spotify/userflow.png';
import zoom from '../../public/images/spotify/zoom.png';
import comp from '../../public/images/spotify/comp.png';
import explo from '../../public/images/spotify/ideas.png';
import pain from '../../public/images/spotify/problem.png';
import three from '../../public/images/spotify/top3.png';
import ia from '../../public/images/spotify/newIA.png';
import ih from '../../public/images/spotify/IA.png';
import draft from '../../public/images/spotify/explore.png';
import cards from '../../public/images/spotify/cards.png';
import sound from '../../public/images/spotify/soundbites.png';
import final from '../../public/images/spotify/final.png';
import finalCards from '../../public/images/spotify/cardsFinal.png';
import article from '../../public/images/spotify/articles.png';
import women from '../../public/images/spotify/women.png';
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
} from '../components/CaseStudy';

export default function Home() {
	return (
		<main className='' id='home'>
			<div className='p-8 text-2xl md:hidden'>
				Please view on web for now. Mobile coming soon.
			</div>
			<div className='hidden md:block'>
				<NavBar />
				<ScrollBar></ScrollBar>
			</div>
			<Hero
				src={SpotDash}
				alt='Spotify Hero'
				headline='Spotify Podcasts'></Hero>
			<MainGrid>
				<div className='col-start-3 col-end-5 text-sm text-neutral-500 min-[1920px]:col-start-3 min-[1920px]:col-end-4 min-[1920px]:text-base md:max-xl:col-start-2 md:max-xl:col-end-4'>
					<p className='font-medium text-black'>Role</p>
					<p className='font-light'>App Redesign</p>
					<p className='font-light'>User Research</p>
					<p className='font-light'>Competitive Analysis</p>
					<p className='font-light'>Ideation</p>
					<p className='mt-8 font-medium text-black'>Team</p>
					<p className='font-light'>Solo Project</p>

					<p className='mt-8 font-medium text-black'>Timeline</p>
					<p className='font-light'>Jul 2020 - Aug 2020</p>

					<a
						className='mt-8 block font-medium text-black'
						href='#final'>
						<DownArrow></DownArrow> Final Designs{' '}
						<DownArrow></DownArrow>
					</a>
				</div>
				<TextGrid>
					<p className='text-neutral-500 text-2xl min-[1920px]:text-3xl min-[1920px]:leading-tight'>
						Imagining a better way to{' '}
						<Span>discover Spotify Podcasts</Span>
					</p>
					<Text title='Context'>
						As a part of Applied 2020, I worked on a personal
						project mentored by senior designs from Facebook,
						Airbnb, Uber, and more. In 10 weeks I conducted
						research, ideation, and design for Spotify Podcasts. At
						the end of the program,{' '}
						<Span>
							I received awards for Best UX, Best Presentation,
							and Best Visual Design.{' '}
						</Span>
					</Text>
					<Text title='What is Spotify Podcasts?'>
						Spotify is the world&apos;s largest music streaming
						platform and is known for their great user experience.
						In recent years, they have focused on adding podcasts
						and audiobooks to become the source for all audio
						content.{' '}
						<Span>
							{' '}
							I was tasked to improve on Spotify Podcasts in any
							way I wanted as the challenge for Applied 2020.
						</Span>
					</Text>
				</TextGrid>
				<LeftImage src={Spot} alt='Spotify Logo'></LeftImage>
				<RightImage src={Pod} alt='Podcasts Poster'></RightImage>
				<TextGrid>
					<Text title='Research'>
						To begin the project, I focused on discovering user pain
						points with Spotify Podcasts.{' '}
						<Span>I conducted 10 semi-structured interviews</Span>
						with podcast listeners to learn about their habits.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={zoom} alt='zoom screenshot'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap src={flow} alt='user flow'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Discovering Podcasts is Hard'>
						The interviews showed that users really enjoyed
						listening to their podcasts and had no issues with the
						listening experience. Their main pain point was
						discovering new podcasts.
					</Text>
					<h3 className='mt-8 text-black'>Key Findings</h3>
					<ul className='list-disc text-neutral-500 font-light leading-7 list-inside'>
						<li>
							Users struggle to find podcasts on their own and
							rely on social recommendations
						</li>
						<li>
							Users have no way of judging the podcast besides
							listening to it
						</li>
					</ul>
				</TextGrid>
				<ImageGrid>
					<Goal title='Design Goal'>
						How can we help users discover podcasts easier?{' '}
					</Goal>
				</ImageGrid>
				<TextGrid>
					<Text title='Design'>
						After I determined the design goal for the project, I
						did additional research to help me ideate. I focused on
						the Spotify experience itself with a heuristic
						evaluation to identify the key issues users are having.
						Then I conducted a competitive analysis of all the top
						podcast apps to determine how they showcase podcast
						information and promote discovery.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={pain} alt='Spotify pain points'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap
						src={comp}
						alt='Competitive Analysis'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						I then explored as many ideas as I could on how to
						explore podcasts. I categorized them by how much effort
						it would take to implement and the potential impact it
						would have on improving discovery. I narrowed the list
						to three main solutions but ultimately chose to try my
						idea of <Span>Featured Podcasts. </Span>
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={explo} alt='Explore Analysis'></ImageWrap>
				</ImageGrid>

				<ImageGrid>
					<ImageWrap src={three} alt='Explore Analysis'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Featured Podcasts'>
						The idea is that{' '}
						<Span>
							Spotify would show reviews and recommendations for
							podcasts curated similar to their music playlists.{' '}
						</Span>
						Since podcasts are more content heavy, the reviews could
						be articles similar to movie reviews with snippets of
						meaningful parts. This would be easy for Spotify to
						highlight new podcasts and help users discover new
						podcasts before listening to a full episode.
					</Text>
					<Text>
						I started to dive into the actual design of Featured
						Podcasts. The first step was to determine the
						information architecture of Featured Podcasts.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap
						src={ia}
						alt='Information Architecture'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						Then for the feature itself, I explored different
						homepage layouts for the Featured section and determined
						the information I wanted to show in each article.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap
						src={draft}
						alt='Featured Section Drafts'></ImageWrap>
				</ImageGrid>
				<RightCaption>
					Please ignore my messy handwriting T.T
				</RightCaption>
				<ImageGrid>
					<ImageWrap src={ih} alt='Information Hierarchy'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						With the foundation set, I began to put it together in
						high fidelity.{' '}
						<Span>
							I focused on maintaining consistency with the
							Spotify design language.{' '}
						</Span>
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={cards} alt='Cards'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text>
						With the high fidelity designs, I did some usability
						testing and users loved the feature. However, there was
						one problem with the component for the soundbite. It was
						too similar to the actual podcast episode component so I
						redesigned it.
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap
						src={sound}
						alt='Soundbite Exploration'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<div id='final'></div>

					<Text title='Final Designs'>
						After I addressed the final usability findings, I worked
						on finalizing the designs making sure it would be worthy
						of Spotify.{' '}
						<Span>
							Below are the final designs for featured podcasts.
						</Span>
					</Text>
				</TextGrid>
				<ImageGrid>
					<ImageWrap src={final} alt='Featured Podcasts'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap
						src={finalCards}
						alt='Featured Cards'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap
						src={article}
						alt='Featured Michelle'></ImageWrap>
				</ImageGrid>
				<ImageGrid>
					<ImageWrap src={women} alt='Featured Women'></ImageWrap>
				</ImageGrid>
				<TextGrid>
					<Text title='Reflection'>
						During COVID with a tough job search, this project was a
						breath of fresh air for me. I loved working on this
						project and felt it really pushed me to become better.
						Some of my takeways:
					</Text>

					<ul className='mt-8 list-disc text-neutral-500 font-light leading-7 list-outside'>
						<li>
							Take time to focus on thinking of ideas instead of
							choosing your first solution. I felt that the early
							exploration really challenged my thinking and led to
							the right solution.
						</li>
						<li>
							Don&apos;t be afraid to change things even for a
							well-known company. All products will have pain
							points and can be made better.
						</li>
					</ul>
				</TextGrid>
				<ImageGrid>
					<div className='flex justify-between mt-24 mb-24'>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500 text-right'>
								Previous
							</p>
							<a className='max-w-fit' href='/threat'>
								<span className='bg-right-bottom bg-gradient-to-l text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl tracking-tight'>
									<ReverseArrow></ReverseArrow> THREAT
								</span>
							</a>
						</div>
						<div className=''>
							<p className='font-sfital2 text-xl mb-4 text-neutral-500'>
								Next
							</p>
							<a className='max-w-fit' href='/boom'>
								<span className='bg-left-bottom bg-gradient-to-r text-black from-black to-black bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-500 ease-out text-3xl tracking-tight'>
									CREDIT BOOST <DiagonalArrow></DiagonalArrow>
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
