import { useEffect, useRef } from 'react';

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
				{/* 해당 레이아웃 컴포넌트를 호출한 부모 컴포넌트의 자식 내용 출력 */}
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
