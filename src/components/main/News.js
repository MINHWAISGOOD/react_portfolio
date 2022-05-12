import { useState, useEffect } from 'react';

function News() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');

		const dummyPosts = [
			{
				title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, animi.',
			},
			{
				title:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus!',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quibusdam harum repellat ut eum sunt.',
			},
			{
				title: 'Lorem ipsum dolor sit amet consectetur.',
				content: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
			},
			{
				title: 'Lorem ipsum dolor sit amet.',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a non, officia cum porro at architecto dolor consequuntur suscipit incidunt!',
			},
			{
				title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi quas perspiciatis animi excepturi totam distinctio maxime voluptates.',
			},
		];

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(posts));
	}, []);

	return (
		<section id='news'>
			<h1>Recent News</h1>
			{/* posts값 중에서 최근글 3개까지만 화면에 출력 */}
			{posts.map((post, idx) => {
				if (idx < 3) {
					return (
						<li key={idx}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
						</li>
					);
				}
			})}
		</section>
	);
}

export default News;
