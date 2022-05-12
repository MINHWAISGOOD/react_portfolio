import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

// const path = process.env.PUBLIC_URL;

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};

	const [posts, setPosts] = useState(getLocalData());
	const [allowed, setAllowed] = useState(true);

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			alert('제목과 본문을 입력하세요.');
			return;
		}

		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...posts,
		]);
		resetPost();
	};

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const deletePost = (index) => {
		setPosts(posts.filter((post, idx) => idx !== index));
	};

	const enableUpdate = (index) => {
		setAllowed(false);

		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (index) => {
		setAllowed(true);

		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	const updatePost = (index) => {
		if (!editInput.current.value.trim() || !editTextarea.current.value.trim()) {
			alert('수정할 제목과 본문을 입력하세요.');
			return;
		}
		setAllowed(true);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(posts));
	}, [posts]);

	return (
		<Layout name={'Community'} banner={'bn2.jpg'}>
			<div className='inputBox'>
				<h2>Please leave your comment</h2>
				<input type='text' placeholder='Title' ref={input} />
				<br />
				<textarea
					ref={textarea}
					cols='30'
					rows='10'
					placeholder='Content'></textarea>
				<br />

				<button onClick={resetPost}>CANCEL</button>
				<button onClick={createPost}>CREATE</button>
			</div>

			<div className='showBox'>
				{posts.map((post, idx) => {
					return (
						<article key={idx}>
							{/* {post.enableUpdate ? 수정모드 : 출력모드} */}
							{post.enableUpdate ? (
								// 수정모드
								<>
									<div className='co_header'>comment</div>
									<div className='num'>
										{idx < 10 ? '0' + (idx + 1) : idx + 1}
									</div>
									<input
										type='text'
										defaultValue={post.title}
										ref={editInput}
									/>
									<br />
									<textarea
										cols='30'
										rows='10'
										defaultValue={post.content}
										ref={editTextarea}></textarea>

									<div className='btns'>
										<button onClick={() => disableUpdate(idx)}>cancel</button>
										{/* 수정모드에서 저장버튼 클릭시 수정함수 호출 */}
										<button onClick={() => updatePost(idx)}>save</button>
									</div>
								</>
							) : (
								// 출력모드
								<>
									<div className='co_header'>comment</div>
									<div className='num'>
										{idx < 10 ? '0' + (idx + 1) : idx + 1}
									</div>
									<h3>{post.title}</h3>
									<p>{post.content}</p>

									<div className='btns'>
										{/* 수정 버튼 클릭시 enableUpdate 호출하면서 인수로 수정할 post 순번 전달 */}
										<button
											onClick={() => {
												// allowed가 true 일때만 수정모드 변경 가능
												if (allowed) enableUpdate(idx);
											}}>
											edit
										</button>
										<button onClick={() => deletePost(idx)}>delete</button>
									</div>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
