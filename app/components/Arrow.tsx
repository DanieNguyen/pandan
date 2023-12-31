function DiagonalArrow() {
	return <span className='rotate-45 inline-block'>{'\u2191'}</span>;
}

function ReverseArrow() {
	return <span className='-rotate-45 inline-block'>{'\u2191'}</span>;
}

function RightArrow() {
	return <span className='rotate-90 inline-block'>{'\u2191'}</span>;
}

function UpArrow() {
	return <span className='inline-block'>{'\u2191'}</span>;
}

function DownArrow() {
	return <span className='inline-block'>{'\u2193'}</span>;
}

export { DiagonalArrow, RightArrow, ReverseArrow, UpArrow, DownArrow };
