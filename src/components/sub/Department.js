import Layout from '../common/Layout';
import { useEffect, useState } from 'react';

function Department() {
	// [상태값, 상태값을 변경하눈 함수] = useState(상태초기값)
	// state값을 변경해야 될때 set함수(state변경함수)로 변경을 해야지만 화면에 재렌더링 일어남
	// state변경함수로 상태값을 변경하지 않으면 리액트는 변경된 요소를 인지할 수 없기때문에 화면 갱신이 안됨 (상태값 관리 안됨)

	// let [num, setNum] = useState(0);

	// 현재 useEffect의 의존성 배열 비어있을때
	useEffect(() => {
		// 컴포넌트가 생성시 한번만 실행
		console.log('department 생성');

		// 컴포넌트가 소멸시 한번만 실행
		return () => {
			console.log('department 소멸');
		};
	}, []);

	// useEffect의 의존성 배열이 num으로 지정되어 있으므로
	// useEffect(() => {
	// 	// num 값이 변경될때마다 실행
	// 	console.log(num);
	// }, [num]);

	return (
		<Layout name={'Department'}>
			{/* <button onClick={() => setNumber(++num)}>증가</button> */}
			{/* <h1>{num}</h1> */}
			<p>디파트먼트 컴포넌트 상세페이지</p>
		</Layout>
	);
}

export default Department;

/*
- useEffect
- 컴포넌트가 생성, 변경, 소멸 될때마다의 life cycle (생명주기에 관한 hook)
- 컴포넌트 생성시 한번만 실행
	- useEffect의 의존성 배열이 비어있을때
- 컴포넌트 소멸시 한번만 실행
	- useEffect의 의존성 배열이 비어있고 함수를 리턴으로 내보낼때
- 컴포넌트 변경될때마다 실행
	- useEffect에 특정 state값을 의존성 배열에 집어넣음
*/
