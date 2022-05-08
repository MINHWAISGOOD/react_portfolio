import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const path = process.env.PUBLIC_URL;

function About() {
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	return (
		<Layout name={'About'}>
			<h2>B&O's Story</h2>
			<hr />
			<div className='story'>
				<div className='storyPic'>
					<img src={`${path}/img/story_img.jpg`} />
				</div>
				<div className='slogan'>
					<h3>Leading history</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
						qui consequuntur illum dicta asperiores, consequatur nostrum ratione
						soluta fugit consectetur laudantium doloremque temporibus impedit
						rerum nemo! Nostrum fugit quod consequatur.
					</p>
					<h3>Always improving</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat in
						tempora sit maxime quae quod, facere quo amet non voluptates
						assumenda explicabo repudiandae commodi a quisquam unde consequuntur
						vero officia consectetur? Ratione in debitis odio magni saepe neque
						provident et aliquam facere voluptate atque, voluptas, molestias
						illum quisquam necessitatibus totam?
					</p>
					<h3>True longevity</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam
						fuga esse doloribus officia cum soluta aliquam, non optio, quam
						magnam vero enim! Nostrum autem nam quis reprehenderit adipisci
						excepturi!
					</p>
				</div>
			</div>
			<h2>B&O's Team</h2>
			<hr />
			<ul className='memberList'>
				{members.map((member, idx) => {
					return (
						<li key={idx}>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} />
							</div>
							<div className='content'>
								<p>{member.position}</p>
								<h3>{member.name}</h3>
								<FontAwesomeIcon icon={faFacebook} className='icon' />
								<FontAwesomeIcon icon={faInstagram} className='icon' />
								<FontAwesomeIcon icon={faTwitter} className='icon' />
							</div>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default About;
