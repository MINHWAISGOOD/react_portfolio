import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import { useState, useRef, useEffect } from 'react';

const path = process.env.PUBLIC_URL;

function Header(props) {
	const menu = useRef(null);
	const active = { color: 'gray' };
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		toggle ? menu.current.open() : menu.current.close();
	}, [toggle]);

	return (
		<>
			<header className={props.type}>
				<div className='inner'>
					<h1>
						<NavLink activeStyle={active} exact to='/'>
							<div className='pic'>
								<img src={`${path}/img/logo.png`} />
							</div>
						</NavLink>
					</h1>

					<div id='gnb'>
						<li>
							<NavLink activeStyle={active} to='/about'>
								About
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/community'>
								Community
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/gallery'>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/youtube'>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/location'>
								Location
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/join'>
								Join
							</NavLink>
						</li>
					</div>

					<a className='menuMo'>
						<FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} />
					</a>
				</div>
			</header>

			<Menu ref={menu} toggle={toggle} setToggle={setToggle} />
		</>
	);
}

export default Header;
