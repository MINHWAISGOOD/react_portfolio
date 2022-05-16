import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

const path = process.env.PUBLIC_URL;

SwiperCore.use([Autoplay]);

function Story() {
	return (
		<section id='story' className='myScroll'>
			<div className='story_head'>
				<div className='wrap'>
					<article>
						<div className='con'>
							<div className='pic'>
								<img src={`${path}/img/story_speaker.jpg`} />
							</div>
							<p>SPEAKER</p>
						</div>
					</article>
					<article>
						<div className='con'>
							<div className='pic'>
								<img src={`${path}/img/story_headphone.jpg`} />
							</div>
							<p>HEADPHONE</p>
						</div>
					</article>
					<article>
						<div className='con'>
							<div className='pic'>
								<img src={`${path}/img/story_tv.jpg`} />
							</div>
							<p>TV</p>
						</div>
					</article>
					<article>
						<div className='con'>
							<div className='pic'>
								<img src={`${path}/img/story_acc.jpg`} />
							</div>
							<p>ACC</p>
						</div>
					</article>
				</div>
			</div>
			<div className='story_content'>
				<article>
					<h1>Design Story</h1>
					<h2>MATTHEW WILLIAMS</h2>
					<h3>1017 ALVX 95M CREATIVE DIRECTOR</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ratione
						dolorem natus maxime saepe culpa, ea sapiente sed ut nihil impedit
						blanditiis minima ex magni inventore! Similique incidunt laborum
						recusandae!
					</p>
					<br></br>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
						laudantium incidunt corrupti saepe ut? Voluptas, dolores velit
						dignissimos doloribus at quod asperiores similique. Quisquam,
						nostrum commodi consequatur unde eveniet nobis.
					</p>
					<button>VIEW MORE</button>
				</article>
				<article>
					<Swiper
						spaceBetween={50}
						slidesPerView={1}
						loop={true}
						autoplay={{ delay: 1500 }} // 추가
					>
						<SwiperSlide>
							<div className='pic'>
								<img src={`${path}/img/designer.jpg`} />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='pic'>
								<img src={`${path}/img/designer2.jpg`} />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='pic'>
								<img src={`${path}/img/design.jpg`} />
							</div>
						</SwiperSlide>
					</Swiper>
				</article>
			</div>
		</section>
	);
}

export default Story;
