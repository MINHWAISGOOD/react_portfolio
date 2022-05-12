import { useEffect, useRef } from 'react';

const path = process.env.PUBLIC_URL;

function Layout(props) {
	// useRef - document.querySelector 느낌
	const frame = useRef(null);

	useEffect(() => {
		console.log(frame);
		frame.current.classList.remove('on');
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<img src={`${path}/img/${props.banner}`} alt='' />
			</figure>
			<div className='inner'>
				<h1>{props.name}</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
					necessitatibus, aperiam architecto repudiandae veniam consectetur?
				</p>
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
