function createLink(what, content, destination) {
	var parent = document.querySelector(destination);
	var child = document.createElement(what);
	var child_text = document.createTextNode('Fast Campus');

	if (what === 'a'){
		child.setAttribute('href', 'http://fastcampus.co.kr');
	}
	
	// var child_href = child.getAttribute('href');
	// console.log(child_href);
	parent.appendChild(child);
	child.appendChild(child_text);
}

// <button>요소를 찾는다
// 식별자가 필요한데...지금은 없다.
// var create_link_button = document.querySelector('.create-button');
// console.log(create_link_button);

// 찾은 버튼에 이벤트 바인딩
	// create_link_button.onclick = function () {
	// 	console.log('clicked me');
	// }
document.querySelector('.create-button').onclick = function() {
	// 클릭된 버튼으로부터 data-make-el 속성 값을 가져와서
	// createElement 함수의 첮번째 인자로 전달한다.
	var el = this.getAttribute('data-make-el');
	var dest = this.getAttribute('data-dest-el');

	// 전달받을 인자 검증
	if ( typeof el == 'undefined' || typeof el !== 'string' ) {
		throw new Error('data-make-el 속성 설정 값이 없거나, 잘못 되었습니다.');
	}
	if ( typeof dest == 'undefined' || typeof dest !== 'string' ) {
		throw new Error('data-dest-el 속성 설정 값이 없거나, 잘못 되었습니다.');
	}
	createLink(el, dest);

};









	// // var parent = document.body;
	// // querySelector API는 IE 8+
	// // CSS 선택자를 통해 대상 요소를 수집하여 반환
	// var parent = document.querySelector('body');
	// // parent <- 생성한 자식으로 추가
	// // 자식 요소를 생성
	// // 요소를 생성하는 DOM API
	// // document.createElement()
	// var child = document.createElement('a');
	// // Text contents를 생성
	// var child_text = document.createTextNode('Fast Campus');

	// // 요소에 추가할 속성을 설정
	// child.setAttribute('href', 'http://fastcampus.co.kr');
	// // 설정된 값을 가져와 변수에 창조하려면?
	// var child_href = child.getAttribute('href');
	// console.log(child_href);
	// // 부모 요소 내부에 자식 요소를 추가하는 방법
	// // 마지막 자식 요소로 삽입
	// // parentNode.appendChild(childNode)
	// parent.appendChild(child);
	// child.appendChild(child_text);



// window.addEventListener('DOMContentLoaded', createElement, true);
