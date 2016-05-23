// DOM Script (Document Object Model)
// Find target element in document
// After identifying the target element in container, traverse the title


function init() {
	var container; //undefined

	console.log('선언된 변수 container에 참조된 데이터 유형: ', container);

	// 변수에 데이터를 할당
	container = true;

	console.log('선언된 변수 container에 true를 대입한 경우: ', typeof container);

	// 다른 데이터 유형을 데입
	container = new Array();

	console.log('선언된 변수 container에 배열 생성자의 인스턴스를 대입한 경우: ', typeof container);

	// container = document.getElementById('container');
	container = document.querySelector('.container');

	console.log('#container ???: ', container);

	// how to find element nested within #container
		// var brand = container.firstChild;
		// console.log(brand)
		// brand = brand.nextSibling;
		// console.log(brand)
	var brand = container.querySelector('.brand');
	console.log(brand);

	brand.onmouseenter = changeBrandColor;
}

function changeBrandColor() {
	this.style.color = '#b64926';
}

// function checkLoadEvent(){
// 	console.log('초기화 시점보다 먼저 수행되는가?')
// }


// window.onload = init;
// window.onload = checkLoadEvent;

// progress event for conventional w3c
// window.addEventListener('DOMContentLoaded', checkLoadEvent, true);
window.addEventListener('DOMContentLoaded', init, true);
// (progress event for windows)
// window.attachEvent('load', checkLoadEvent)


// window.onload = function() {
// 	init();
// 	checkLoadEvent;
// }

// Javascript Object Data types
// Number
// String
// Boolean
// Function
// Array
// Object
// RegExp
// Math
// Date

// Javascript Non-Object Data types
// undefined
// null


// Client Side Javascript Environment
// Global Scope = window
// new window() >>> window class


// BOM (Browswer Object Model)
// window class
// screen class
// navigator class
// location class
// history class
// document class


