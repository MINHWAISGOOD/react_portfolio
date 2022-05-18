import { useState, useEffect } from 'react';

function News() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');

		const dummyPosts = [
			{
				title: 'Which group did you collaborate with recently?',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ex id, accusantium at nihil magnam laborum enim sint quo minus ipsa deleniti saepe adipisci, exercitationem amet. Atque veritatis iure illo placeat at, dolor reprehenderit fuga laborum corrupti recusandae nulla laudantium voluptatum in laboriosam delectus sapiente.',
			},
			{
				title: 'It is the combination of music and interior design.',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa soluta porro alias animi eius assumenda maiores voluptatum. Dicta tempore nemo temporibus id. Officiis eveniet ut consequuntur, quod asperiores voluptatum sit obcaecati earum, quas natus ullam unde voluptas nesciunt id excepturi? Magni, rerum blanditiis et veniam eaque facilis autem neque.',
			},
			{
				title: 'What do you care about the most?',
				content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia fuga quisquam, earum laboriosam quia libero, doloremque, magnam sequi consectetur sint mollitia. Omnis consequuntur quibusdam esse velit officia quaerat officiis dicta porro obcaecati quasi. Eos ab laborum doloremque accusantium similique enim.',
			},
			{
				title: 'We will constantly develop and change.',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis libero doloremque quia molestiae omnis aperiam hic autem tempora cupiditate vero alias, obcaecati, repudiandae culpa voluptates quidem velit cum reiciendis magni itaque aspernatur! Voluptatibus, dolores?',
			},
			{
				title: 'What is the most popular product?',
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
			<div className='wrap'>
				<h2>COMMUINTY</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quaerat
					exercitationem velit libero in odit eaque quisquam, dolore,
					consectetur consequatur laborum minima rem fugiat repudiandae
					obcaecati. Cumque sed alias repellat. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit.
				</p>

				{posts.map((post, idx) => {
					if (idx < 4) {
						return (
							<article key={idx}>
								<h3>
									{post.title.length > 40
										? post.title.substr(0, 40) + '...'
										: post.title}
								</h3>
								<p>
									{post.content.length > 200
										? post.content.substr(0, 200) + '...'
										: post.content}
								</p>
							</article>
							// <h2>{tit.length > 25 ? tit.substr(0, 25) + '...' : tit}</h2>
							// <p>{desc.length > 200 ? desc.substr(0, 200) + '...' : desc}</p>
						);
					}
				})}
			</div>
		</section>
	);
}

export default News;
