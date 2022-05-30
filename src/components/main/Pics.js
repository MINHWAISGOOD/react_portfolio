import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Pics(props) {
	const scrolled = props.scrolled;
	const start = props.start;
	const base = 500;
	const position = scrolled - start + base;

	const pics = useSelector((store) => store.galleryReducer.gallery);
	const [index, setIndex] = useState(0);
	const pop = useRef(null);

	return (
		<>
			<section id='pics' className='myScroll'>
				<div className='parallax'>
					<h2
						style={
							position >= 0
								? { transform: `translateX(-${position / 1.2}px)` }
								: null
						}>
						BANG&OLUFSEN
					</h2>
					<p
						style={
							position >= 0
								? { transform: `translateX(${position * 1.7}px)` }
								: null
						}>
						EXHIBITION
					</p>
				</div>
				<div className='inner'>
					<div className='pics_main'>
						<article>
							<span>BRAND</span>
							<br />
							<span>PICTORIAL</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
								placeat sapiente similique itaque tempore! At quibusdam
								assumenda repellat deleniti quam blanditiis rerum quidem, ipsa
								consequatur.
							</p>
							<NavLink to='/Gallery' className='pics_btn'>
								MORE
							</NavLink>
						</article>
					</div>
					<div className='pics_photos'>
						{pics.map((pic, idx) => {
							if (idx < 3) {
								return (
									<article
										key={idx}
										onClick={() => {
											setIndex(idx);
											pop.current.open();
										}}>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
											/>
										</div>
									</article>
								);
							}
						})}
					</div>
				</div>
			</section>

			<Popup ref={pop}>
				{pics.length !== 0 && (
					<>
						<img
							src={`https://live.staticflickr.com/${pics[index].server}/${pics[index].id}_${pics[index].secret}_b.jpg`}
						/>
						<span className='close' onClick={() => pop.current.close()}>
							<FontAwesomeIcon icon={faXmark} className='xmark' />
						</span>
					</>
				)}
			</Popup>
		</>
	);
}

export default Pics;
