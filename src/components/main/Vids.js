import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';

function Vids() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<section id='vids' className='myScroll'>
			<h2>RECENT YOUTUBE</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quaerat
				exercitationem velit libero in odit eaque quisquam, dolore, consectetur
				consequatur laborum minima rem fugiat repudiandae obcaecati. Cumque sed
				alias repellat. Lorem ipsum dolor sit, amet consectetur adipisicing
				elit.
			</p>
			<>
				<section id='vids' className='myScroll'>
					{vidData.map((vid, idx) => {
						if (idx < 4) {
							return (
								<>
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
								</>
							);
						}
					})}
				</section>

				<Popup ref={pop}>
					{vidData.length !== 0 && (
						<>
							<iframe
								src={`https://www.youtube.com/embed/${vidData[index].snippet.resourceId.videoId}`}
								frameBorder='0'></iframe>
							<span className='close' onClick={() => pop.current.close()}>
								close
							</span>
						</>
					)}
				</Popup>
			</>
		</section>
	);
}

export default Vids;
