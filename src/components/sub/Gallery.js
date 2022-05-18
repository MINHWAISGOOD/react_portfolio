import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-component';
import * as types from '../../redux/actionType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
	const { gallery } = useSelector((store) => store.galleryReducer);
	const dispatch = useDispatch();
	const path = process.env.PUBLIC_URL;
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);

	// const [items, setItems] = useState([]);
	const [opt, setOpt] = useState({
		type: 'user',
		count: 100,
		user: '195470813@N04',
	});
	const [loading, setLoading] = useState(true);
	const [enableClick, setEnableClick] = useState(true);
	const [index, setIndex] = useState(0);
	const masonryOptions = { transitionDuration: '0.5s' };

	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setEnableClick(true);
		}, 1000);
	};

	const showSearch = () => {
		const result = input.current.value.trim();

		if (!result) {
			alert('검색어를 입력하세요');
			return;
		}

		input.current.value = '';

		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on');

			setOpt({
				type: 'search',
				count: 100,
				tag: result,
			});
		}
	};

	useEffect(() => {
		dispatch({ type: types.GALLERY.start, opt });
	}, [opt]);

	useEffect(() => {
		if (gallery.length !== 0) endLoading();
	}, [gallery]);

	return (
		<>
			<Layout name={'Gallery'} banner={'bn3.jpg'}>
				{loading ? (
					<img className='loading' src={path + '/img/loading.gif'} />
				) : null}

				{/* <button
					onClick={() => {
						if (enableClick) {
							setEnableClick(false);
							setLoading(true);
							frame.current.classList.remove('on');
							getFlickr({
								type: 'interest',
								count: 100,
							});
						}
					}}>
					interest gallery
				</button> */}

				<div className='searchBox'>
					<input
						type='text'
						ref={input}
						onKeyUp={(e) => {
							if (e.key === 'Enter') showSearch();
						}}
					/>
					<button className='search_btn' onClick={showSearch}>
						<FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
					</button>
				</div>

				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{gallery.map((item, idx) => {
							return (
								<article
									key={idx}
									onClick={() => {
										setIndex(idx);
										pop.current.open();
									}}>
									<div className='inner'>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											/>
										</div>
										{/* <h2>{item.title}</h2> */}
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Popup ref={pop}>
				{gallery.length !== 0 ? (
					<>
						<img
							src={`https://live.staticflickr.com/${gallery[index].server}/${gallery[index].id}_${gallery[index].secret}_b.jpg`}
						/>
						<span className='close' onClick={() => pop.current.close()}>
							<FontAwesomeIcon icon={faXmark} className='xmark' />
						</span>
					</>
				) : null}
			</Popup>
		</>
	);
}

export default Gallery;
