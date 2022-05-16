import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { setYoutube } from './redux/action';
import * as types from './redux/actionType';

// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// main
import Main from './components/main/Main';

// sub
import About from './components/sub/About';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';
import Join from './components/sub/Join';

// scss
import './scss/style.scss';

// const path = process.env.PUBLIC_URL;

function App() {
	const dispatch = useDispatch();

	// const fetchYoutube = async () => {
	// 	const key = 'AIzaSyCYd9SWqo1_9ckWvx--2D68sG_il9hYTtM';
	// 	const playlistId = 'PLQ_1WY7bfG--Y-te-b8rQBy3N3i_3-G8r';
	// 	const num = 9;
	// 	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	// 	await axios.get(url).then((json) => {
	// 		dispatch(setYoutube(json.data.items));
	// 	});
	// };

	useEffect(() => {
		dispatch({
			type: types.GALLERY.start,
			opt: { type: 'user', count: 100, user: '195470813@N04' },
		});
		dispatch({ type: types.YOUTUBE.start });
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/about' component={About} />

			<Route path='/community' component={Community} />

			<Route path='/gallery' component={Gallery} />

			<Route path='/youtube' component={Youtube} />

			<Route path='/location' component={Location} />

			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
