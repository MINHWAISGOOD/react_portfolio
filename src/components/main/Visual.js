const path = process.env.PUBLIC_URL;

function Visual() {
	return (
		<section id='visual' className='myScroll on'>
			<figure>
				<video src={`${path}/img/visual.mp4`} loop autoPlay muted></video>
			</figure>
			<div className='inner'>
				<p>Sound, Design, Craft.</p>
				<h1>BANG & OLUFSEN</h1>

				<a href='#'>View More</a>
			</div>
		</section>
	);
}

export default Visual;
