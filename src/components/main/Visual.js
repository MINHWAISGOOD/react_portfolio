const path = process.env.PUBLIC_URL;

function Visual() {
	return (
		<figure className='myScroll on'>
			<video src={`${path}/img/visual.mp4`} loop autoplay mute></video>
		</figure>
	);
}

export default Visual;
