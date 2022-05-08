import { useEffect, useRef } from 'react';

const path = process.env.PUBLIC_URL;

function Layout(props) {
	// useRef - document.querySelector 느낌
	const frame = useRef(null);

	useEffect(() => {
		console.log(frame);
		// 해당 컴포넌트가 생성시 (mount)
		frame.current.classList.remove('on');
		frame.current.classList.add('on');

		// return () => {
		// 	// unmount (cleanup 함수)
		// };
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<img src={`${path}/img/banner.png`} />
			</figure>
			<div className='inner'>
				<h1>{props.name}</h1>
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
