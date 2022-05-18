import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const path = process.env.PUBLIC_URL;

function Join() {
	const history = useHistory();

	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
		comments: '',
		gender: null,
		interests: null,
	};

	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const check = (val) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[!@#$%^&*()_+]/;
		if (val.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		if (val.email.length < 8 || !/@/.test(val.email)) {
			errs.email = '이메일은 8글자 이상 @를 포함해 입력하세요';
		}
		if (
			val.pwd1.length < 5 ||
			!eng.test(val.pwd1) ||
			!num.test(val.pwd1) ||
			!spc.test(val.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 5글자 이상 영문, 숫자, 특수문자를 모두 포함하세요';
		}
		if (val.pwd1 !== val.pwd2 || !val.pwd2) {
			errs.pwd2 = '비밀번호 2개를 동일하게 입력하세요';
		}
		if (!val.gender) {
			errs.gender = '성별을 선택하세요';
		}
		if (!val.interests) {
			errs.interests = '관심사를 하나이상 선택하세요';
		}
		if (val.comments.length < 10) {
			errs.comments = '남기는 말은 10글자 이상 입력하세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...val, [name]: isCheck });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});
		setVal({ ...val, [name]: isCheck });
	};

	// const handleSelect = (e) => {
	// 	const { name } = e.target;
	// 	const isSelected = e.target.options[e.target.selectedIndex].value;
	// 	setVal({ ...val, [name]: isSelected });
	// };

	const handleReset = () => {
		setVal(initVal);
		setErr({});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	useEffect(() => {
		const len = Object.keys(err).length;
		if (len === 0 && isSubmit) {
			// 모든 인증이 성공하면 메인 페이지로 강제 이동
			history.push('/');
		}
	}, [err]);

	return (
		<Layout name={'Join'} banner={'bn6.jpg'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend className='hidden'>회원가입 폼 양식</legend>

					<h2>Terms & Policy</h2>
					<textarea name='terms' id='terms' cols='100' rows='20'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
						placeat odio doloribus et corporis? A quia cumque assumenda
						accusantium, aspernatur nulla eos! Hic ducimus labore quibusdam
						beatae pariatur nulla molestiae!Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque placeat odio doloribus et
						corporis? A quia cumque assumenda accusantium, aspernatur nulla eos!
						Hic ducimus labore quibusdam beatae pariatur nulla molestiae!Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Neque placeat
						odio doloribus et corporis? A quia cumque assumenda accusantium,
						aspernatur nulla eos! Hic ducimus labore quibusdam beatae pariatur
						nulla molestiae!Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Neque placeat odio doloribus et corporis? A quia cumque
						assumenda accusantium, aspernatur nulla eos! Hic ducimus labore
						quibusdam beatae pariatur nulla molestiae!Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque placeat odio doloribus et
						corporis? A quia cumque assumenda accusantium, aspernatur nulla eos!
						Hic ducimus labore quibusdam beatae pariatur nulla molestiae!Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Neque placeat
						odio doloribus et corporis? A quia cumque assumenda accusantium,
						aspernatur nulla eos! Hic ducimus labore quibusdam beatae pariatur
						nulla molestiae!Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Neque placeat odio doloribus et corporis? A quia cumque
						assumenda accusantium, aspernatur nulla eos! Hic ducimus labore
						quibusdam beatae pariatur nulla molestiae!Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque placeat odio doloribus et
						corporis? A quia cumque assumenda accusantium, aspernatur nulla eos!
						Hic ducimus labore quibusdam beatae pariatur nulla molestiae!Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Neque placeat
						odio doloribus et corporis? A quia cumque assumenda accusantium,
						aspernatur nulla eos! Hic ducimus labore quibusdam beatae pariatur
						nulla molestiae!
					</textarea>
					<div class='agreement'>
						<input type='checkbox' name='agree' id='agree' />
						<label for='agree'>I agree to the terms and conditions</label>
					</div>

					<h2>Create Account</h2>
					<div className='joinContent'>
						<div className='joinImg'>
							<img src={`${path}/img/joinImg.jpg`} />
						</div>
						<div className='joinForm'>
							<div className='input_set'>
								{/* user id */}
								<label htmlFor='userid' className='form_title'>
									USER ID
								</label>
								<br />
								<input
									type='text'
									id='userid'
									name='userid'
									placeholder='아이디를 입력하세요'
									value={val.userid}
									onChange={handleChange}
								/>
								<div className='err'>{err.userid}</div>
							</div>

							{/* pwd1 */}
							<div className='input_set'>
								<label htmlFor='pwd1' className='form_title'>
									PASSWORD
								</label>
								<br />
								<input
									type='password'
									name='pwd1'
									id='pwd1'
									placeholder='비밀번호를 입력하세요'
									value={val.pwd1}
									onChange={handleChange}
								/>
								<div className='err'>{err.pwd1}</div>
							</div>

							{/* pwd2 */}
							<div className='input_set'>
								<label htmlFor='pwd2' className='form_title'>
									RE-PASSWORD
								</label>
								<br />
								<input
									type='password'
									name='pwd2'
									id='pwd2'
									placeholder='비밀번호를 재입력하세요'
									value={val.pwd2}
									onChange={handleChange}
								/>
								<div className='err'>{err.pwd2}</div>
							</div>

							{/* email */}
							<div className='input_set'>
								<label htmlFor='email' className='form_title'>
									E-MAIL
								</label>
								<br />
								<input
									type='text'
									id='email'
									name='email'
									placeholder='이메일주소를 입력하세요'
									value={val.email}
									onChange={handleChange}
								/>
								<div className='err'>{err.email}</div>
							</div>

							{/* gender */}
							<div className='input_set2'>
								<div className='form_title'>GENDER</div>
								<div className='radio-checkbox'>
									<input
										type='radio'
										id='male'
										name='gender'
										onChange={handleRadio}
									/>
									<label htmlFor='male'>Male</label>
									<input
										type='radio'
										id='female'
										name='gender'
										onChange={handleRadio}
									/>
									<label htmlFor='female'>Female</label>
								</div>
								<div className='err'>{err.gender}</div>
							</div>

							{/* interests */}
							<div className='input_set2'>
								<div className='form_title'>INTEREST</div>
								<div className='radio-checkbox'>
									<input
										type='checkbox'
										name='interests'
										id='speaker'
										onChange={handleCheck}
									/>
									<label htmlFor='speaker'>Speaker</label>

									<input
										type='checkbox'
										name='interests'
										id='headset'
										onChange={handleCheck}
									/>
									<label htmlFor='headset'>Headset</label>

									<input
										type='checkbox'
										name='interests'
										id='tv'
										onChange={handleCheck}
									/>
									<label htmlFor='tv'>TV</label>

									<input
										type='checkbox'
										name='interests'
										id='acc'
										onChange={handleCheck}
									/>
									<label htmlFor='acc'>Acc</label>

									<input
										type='checkbox'
										name='interests'
										id='etc'
										onChange={handleCheck}
									/>
									<label htmlFor='etc' className='checkbox_btn'>
										Etc
									</label>
								</div>

								<div className='err'>{err.interests}</div>
							</div>

							{/* comments */}
							<div className='input_set'>
								<label htmlFor='comments' className='form_title'>
									COMMENTS
								</label>
								<br />
								<textarea
									name='comments'
									id='comments'
									cols='30'
									rows='10'
									value={val.comments}
									onChange={handleChange}></textarea>
								<div className='err2'>{err.comments}</div>
							</div>
						</div>
						<div className='joinBtn'>
							<div className='btn_set'>
								<input type='reset' value='CANCEL' onClick={handleReset} />
								<input
									type='submit'
									value='SEND'
									onClick={() => setIsSubmit(true)}
								/>
							</div>
						</div>
					</div>
				</fieldset>
			</form>
		</Layout>
	);
}
export default Join;
