import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

const path = process.env.PUBLIC_URL;

function Department() {
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			<h2>About B&O</h2>
			<h2>Our team</h2>
			<ul className='memberList'>
				{members.map((member, idx) => {
					return (
						<li key={idx}>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} />
							</div>
							<div className='content'>
								<h3>{member.name}</h3>
								<p>{member.position}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Department;
