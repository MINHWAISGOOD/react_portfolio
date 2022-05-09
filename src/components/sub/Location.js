import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

const path = process.env.PUBLIC_URL;

function Location() {
	const { kakao } = window;

	const container = useRef(null);
	const branch = useRef(null);

	const info = [
		{
			title: 'B&O Hyundai Main Store',
			address: 'Headquarters of Hyundai Department Store',
			latlng: new kakao.maps.LatLng(37.5273268, 127.0274571),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(25, 50) },
		},
		{
			title: 'B&O Kangnam Store',
			address: 'Shinsegae Department Store in Gangnam',
			latlng: new kakao.maps.LatLng(37.5041468, 127.0031617),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(25, 50) },
		},
		{
			title: 'B&O Apgujeong Store',
			address: 'Apgujeong 865 Eonju-ro Taeseung Building',
			latlng: new kakao.maps.LatLng(37.5277239, 127.0332129),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(25, 50) },
		},
	];

	const [map, setMap] = useState(null);
	const [mapInfo] = useState(info);
	const [traffic, setTraffic] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		container.current.innerHTML = '';

		const options = {
			center: mapInfo[index].latlng,
			level: 3,
		};

		const map_instance = new kakao.maps.Map(container.current, options);
		setMap(map_instance);

		const markerPosition = mapInfo[index].latlng;

		const imageSrc = mapInfo[index].imgSrc;
		const imageSize = mapInfo[index].imgSize;
		const imageOption = mapInfo[index].imgPos;
		const markerImage = new kakao.maps.MarkerImage(
			imageSrc,
			imageSize,
			imageOption
		);

		var marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
		});
		marker.setMap(map_instance);

		const branch_li = branch.current.querySelectorAll('li');
		for (const btn of branch_li) btn.classList.remove('on');
		branch_li[index].classList.add('on');

		const mapTypeControl = new kakao.maps.MapTypeControl();
		map_instance.addControl(
			mapTypeControl,
			kakao.maps.ControlPosition.TOPRIGHT
		);

		const mapInit = () => {
			console.log('마커 중앙 유지');
			map_instance.setCenter(mapInfo[index].latlng);
		};

		window.addEventListener('resize', mapInit);

		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, [index]);

	useEffect(() => {
		if (map) {
			traffic
				? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				: map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	}, [traffic]);

	return (
		<Layout name={'LOCATION'}>
			<ul className='branch' ref={branch}>
				{mapInfo.map((item, idx) => {
					return (
						<li key={idx} onClick={() => setIndex(idx)}>
							<h2>{item.title}</h2>
							<p>{item.address}</p>
						</li>
					);
				})}
			</ul>
			<div id='map' ref={container}></div>
			{/* <button
				onClick={() => {
					setTraffic(!traffic);
				}}>
				{traffic ? 'Traffic OFF' : 'Traffic ON'}
			</button> */}
		</Layout>
	);
}

export default Location;
