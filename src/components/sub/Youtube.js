import Layout from '../common/Layout';
import { useState, useRef } from 'react';
// import axios from 'axios';
import Popup from '../common/Popup';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);

	const pop = useRef(null);

	// const [vids, setVids] = useState([]);
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

	return (
		<>
			<Layout name={'Youtube'} banner={'bn5.jpg'}>
				{vidData.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;

					return (
						<article
							key={idx}
							onClick={() => {
								pop.current.open();
								setIndex(idx);
							}}>
							<div className='pic'>
								<img src={vid.snippet.thumbnails.standard.url} />
							</div>

							<h2>{tit.length > 25 ? tit.substr(0, 25) + '...' : tit}</h2>
							<p>{desc.length > 200 ? desc.substr(0, 200) + '...' : desc}</p>
							<FontAwesomeIcon icon={faArrowRight} className='icon' />
						</article>
					);
				})}
			</Layout>

			<Popup ref={pop}>
				{vidData.length !== 0 ? (
					<>
						<iframe
							// 팝업이 호출될 때, 변경된 index 순번의 vids state 데이터값이 팝업 영상으로 출력
							src={`https://www.youtube.com/embed/${vidData[index].snippet.resourceId.videoId}`}
							frameBorder='0'></iframe>
						{/* Popup 컴포넌트의 함수를 이용해 팝업 닫기 */}
						<span className='close' onClick={() => pop.current.close()}>
							<FontAwesomeIcon icon={faXmark} className='xmark' />
						</span>
					</>
				) : null}
			</Popup>
		</>
	);
}

export default Youtube;
