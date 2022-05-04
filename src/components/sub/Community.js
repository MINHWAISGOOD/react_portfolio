import Layout from '../common/Layout';
import { useEffect, useState } from 'react';

function Community() {
	let [num, setNumber] = useState(0);

	useEffect(() => {
		console.log('community 생성');

		return () => {
			console.log('community 소멸');
		};
	}, []);

	useEffect(() => {
		console.log(num);
	}, [num]);

	return (
		<Layout name={'Community'}>
			<button onClick={() => setNumber(++num)}>증가</button>
			<h1>{num}</h1>
		</Layout>
	);
}

export default Community;
