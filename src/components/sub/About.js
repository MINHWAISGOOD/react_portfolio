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
		<>
			<Layout name={'About'} banner={'bn1.jpg'}>
				<h2>B&O Story</h2>
				<div className='story'>
					<div className='storyPic'>
						<img src={`${path}/img/story_img.jpg`} />
					</div>
					<div className='slogan'>
						<h3>Leading history</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
							corrupti ducimus, quasi, est dolore sint, aperiam eligendi natus
							quis magni hic voluptatibus officia distinctio temporibus repellat
							cumque cum reprehenderit minus sunt. Quasi enim maiores soluta
							est. Culpa, laborum veritatis. Sequi ipsa nesciunt aliquid,
							eligendi asperiores numquam rerum autem explicabo culpa!
						</p>
						<h3>Always improving</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
							in tempora sit maxime quae quod, facere quo amet non voluptates
							assumenda explicabo repudiandae commodi a quisquam unde
							consequuntur vero officia consectetur? Ratione in debitis odio
							magni saepe neque provident et aliquam facere voluptate atque,
							voluptas, molestias illum quisquam necessitatibus totam?
						</p>
						<h3>True longevity</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A
							molestias ullam vitae ad placeat ipsum distinctio? Ratione, ad.
							Velit reprehenderit iusto, libero aliquam facilis incidunt
							inventore illum asperiores, cumque suscipit hic tempora molestias
							obcaecati voluptate dignissimos aperiam veniam corporis nobis sint
							maiores omnis tenetur earum. Asperiores, veritatis consectetur ut
							ad rem nulla voluptas, rerum perspiciatis deserunt tempora
							aliquam, exercitationem autem.
						</p>
					</div>
				</div>
				<h2>B&O Team</h2>
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
		</>
	);
}

export default About;
