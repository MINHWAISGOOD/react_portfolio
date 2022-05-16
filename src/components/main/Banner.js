const path = process.env.PUBLIC_URL;

function Banner() {
	return (
		<section id='banner' className='myScroll'>
			<div className='banner_con'>
				<h2>ENJOY THE MUSIC</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque
					maiores commodi nemo minus, rem exercitationem, repellendus nesciunt,
					quaerat libero iusto ex accusantium quibusdam ad laborum debitis.
				</p>
			</div>
			<div className='pic'>
				<img src={`${path}/img/banner.jpg`} />
			</div>
		</section>
	);
}

export default Banner;
