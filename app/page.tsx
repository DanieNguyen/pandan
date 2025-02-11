'use client';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Headline from './components/Headline';
import Work from './components/Work';
import Top from './components/Top';

const Page = () => {
	return (
		<main className=''>
			<NavBar />
			<Headline></Headline>
			<Work></Work>
			<Contact></Contact>
			<Top></Top>
		</main>
	);
};

export default Page;
