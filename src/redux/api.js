import axios from 'axios';

export const fetchGallery = async (opt) => {
	const key = 'e5fd58b463c908a06f45410943608f02';
	const num = opt.count;
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	let url = '';

	if (opt.type === 'interest') {
		url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json`;
	}
	if (opt.type === 'search') {
		url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&tags=${opt.tag}`;
	}
	if (opt.type === 'user') {
		url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&user_id=${opt.user}`;
	}

	// 해당 axios로 받아온 결과값을 saga.js에서 데이터를 가공하거나 분기처리할 예정이므로 axios로 받아온 결과값만 리턴
	return await axios.get(url);
};

export const fetchYoutube = async () => {
	const key = 'AIzaSyCYd9SWqo1_9ckWvx--2D68sG_il9hYTtM';
	const playlistId = 'PLQ_1WY7bfG--Y-te-b8rQBy3N3i_3-G8r';
	const num = 9;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	return await axios.get(url);
};
