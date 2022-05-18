import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Vids() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<section id='vids' className='myScroll'>
				<div className='wrap'>
					<h2>YOUTUBE</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quaerat
						exercitationem velit libero in odit eaque quisquam, dolore,
						consectetur consequatur laborum minima rem fugiat repudiandae
						obcaecati. Cumque sed alias repellat. Lorem ipsum dolor sit, amet
						consectetur adipisicing elit.
					</p>

					{vidData.map((vid, idx) => {
						if (idx < 4) {
							return (
								<article
									key={idx}
									onClick={() => {
										setIndex(idx);
										pop.current.open();
									}}>
									<div className='pic'>
										<img src={vid.snippet.thumbnails.medium.url} />
									</div>
								</article>
							);
						}
					})}
				</div>
			</section>

			<Popup ref={pop}>
				{vidData.length !== 0 && (
					<>
						<iframe
							src={`https://www.youtube.com/embed/${vidData[index].snippet.resourceId.videoId}`}
							frameBorder='0'></iframe>
						<span className='close' onClick={() => pop.current.close()}>
							<FontAwesomeIcon icon={faXmark} className='xmark' />
						</span>
					</>
				)}
			</Popup>
		</>
	);
}

export default Vids;
