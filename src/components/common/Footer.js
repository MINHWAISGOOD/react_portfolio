import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const path = process.env.PUBLIC_URL;

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<div className='pic'>
					<img src={`${path}/img/logo.png`} />
				</div>
				<div className='icon_set'>
					<FontAwesomeIcon icon={faFacebook} className='icon' />
					<FontAwesomeIcon icon={faInstagram} className='icon' />
					<FontAwesomeIcon icon={faTwitter} className='icon' />
				</div>
				<address>
					address : Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					<br />
					e-mail : minhwaisgood@naver.com
					<br />
					Tel : +82 -123-1234-1234 / 010 - 7524 -2420
				</address>
				<p>2022 BANG & OLUFSEN &copy; ALL RIGHTS RESERVED.</p>
			</div>
		</footer>
	);
}

export default Footer;
