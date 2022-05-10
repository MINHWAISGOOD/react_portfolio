import React from 'react';
import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';

function Youtube() {
	const [vids, setVids] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyCYd9SWqo1_9ckWvx--2D68sG_il9hYTtM';
		const playlistId = 'PLQ_1WY7bfG--Y-te-b8rQBy3N3i_3-G8r';
		const num = 9;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	// const handleClick = (index) => {
	// 	setOpen(true);
	// 	setIndex(index);
	// };

	return (
		<>
			<Layout name={'YOUTUBE'}>
				{vids.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;

					return (
						<article
							key={idx}
							onClick={
								// () => handleClick(idx)
								() => {
									setOpen(true);
									setIndex(idx);
								}
							}>
							<div className='pic'>
								<img src={vid.snippet.thumbnails.standard.url} />
							</div>

							<h2>{tit.length > 25 ? tit.substr(0, 25) + '...' : tit}</h2>
							<p>{desc.length > 200 ? desc.substr(0, 200) + '...' : desc}</p>
						</article>
					);
				})}
			</Layout>

			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${vids[index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Popup>
			) : null}
		</>
	);
}

export default Youtube;
