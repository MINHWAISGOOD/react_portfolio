import { useState, useEffect } from 'react';

function News() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');

		const dummyPosts = [
			{
				title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ex id, accusantium at nihil magnam laborum enim sint quo minus ipsa deleniti saepe adipisci, exercitationem amet. Atque veritatis iure illo placeat at, dolor reprehenderit fuga laborum corrupti recusandae nulla laudantium voluptatum in laboriosam delectus sapiente.',
			},
			{
				title:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus!',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa soluta porro alias animi eius assumenda maiores voluptatum. Dicta tempore nemo temporibus id. Officiis eveniet ut consequuntur, quod asperiores voluptatum sit obcaecati earum, quas natus ullam unde voluptas nesciunt id excepturi? Magni, rerum blanditiis et veniam eaque facilis autem neque.',
			},
			{
				title: 'Lorem ipsum dolor sit amet consectetur.',
				content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia fuga quisquam, earum laboriosam quia libero, doloremque, magnam sequi consectetur sint mollitia. Omnis consequuntur quibusdam esse velit officia quaerat officiis dicta porro obcaecati quasi. Eos ab laborum doloremque accusantium similique enim.',
			},
			{
				title: 'Lorem ipsum dolor sit amet.',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis libero doloremque quia molestiae omnis aperiam hic autem tempora cupiditate vero alias, obcaecati, repudiandae culpa voluptates quidem velit cum reiciendis magni itaque aspernatur! Voluptatibus, dolores?',
			},
			{
				title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae earum doloribus atque et nulla obcaecati quis error eaque, provident voluptatum explicabo ab veritatis minus in, ducimus dolore doloremque odio dignissimos labore velit? Consectetur explicabo in asperiores quod ipsum ea laborum cum magnam deserunt porro quis earum, impedit animi beatae sed soluta veritatis eius iusto itaque quos deleniti modi! Asperiores, accusamus!',
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
		<section id='news' className='myScroll'>
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
