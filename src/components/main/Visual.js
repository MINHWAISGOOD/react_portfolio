import React from 'react';

const path = process.env.PUBLIC_URL;

function Visual() {
	return (
		<figure>
			<img src={`${path}/img/1.jpg`} />
		</figure>
	);
}

export default Visual;
