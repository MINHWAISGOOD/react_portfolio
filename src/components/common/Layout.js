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
			<figure></figure>
			<div className='inner'>
				<h1>{props.name}</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					molestias nam aut. Dolor earum, et repellat enim, ratione nulla libero
					natus ipsam eius cum dolorem harum? Saepe consectetur totam harum.
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat
					quidem maxime assumenda nam deleniti eaque culpa fuga exercitationem
					dolor, omnis velit fugit, quas architecto? Suscipit unde voluptatum
					delectus ipsam.
				</p>
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
