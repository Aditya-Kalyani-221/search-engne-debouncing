//the commented out code is the implementation using simple keypress event where the API is called on each 
//keypress
//uncomment the code till line 57 and comment the code after that
//to see the approach for calling APIs at each and every key press
/*console.log("script loaded");

const searchArray = ['hat', 'hattrick', 'hsbc', 'hand', 'heaven', 'hatch', 'hathaway', 'hell', 
					'hepatitis', 'hatchers', 'hemming', 'heckle', 'hatband', 'hate', 'hedge', 'hats', 'hetmeyer'];

function removeSearchBox(node) {

	while(node.firstChild) {

		node.removeChild(node.firstChild);
	}

}

function fetchList(que) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let result = searchArray.filter(word => word.indexOf(que) > -1);
			resolve(result);
		}, 1000)
	})
}

async function fetchWords() {

	let searchWord = document.getElementById('search-bar').value;
	if(searchWord == '') {
		document.getElementById('display-box').classList.remove('show');
		document.getElementById('display-box').classList.add('hide');
		removeSearchBox(document.getElementById('display-box'));
		return;
	}
	let results = await fetchList(searchWord);
	console.log(results);
	if(results.length > 5) 
		results = results.splice(0,5);
	if(results.length == 0) {
		document.getElementById('display-box').classList.remove('show');
		document.getElementById('display-box').classList.add('hide');
		removeSearchBox(document.getElementById('display-box'));
	}
	else {
		document.getElementById('display-box').classList.remove('hide');
		document.getElementById('display-box').classList.add('show');
		removeSearchBox(document.getElementById('display-box'));
		for(let i = 0; i < results.length; i++) {  //results = [hat, hate, hatch, hathaway, hatches]
			let ele = document.createElement('div');
			ele.innerHTML = results[i];
			document.getElementById('display-box').appendChild(ele);
		}
	}
}

fetchWords();*/


//The code below uses debouncing technique to reduce netwrok calls 
console.log("script loaded");

const searchArray = ['hat', 'hattrick', 'hsbc', 'hand', 'heaven', 'hatch', 'hathaway', 'hell', 
					'hepatitis', 'hatchers', 'hemming', 'heckle', 'hatband', 'hate', 'hedge', 'hats', 'hetmeyer'];

function removeSearchBox(node) {

	while(node.firstChild) {

		node.removeChild(node.firstChild);
	}

}

function fetchList(que) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let result = searchArray.filter(word => word.indexOf(que) > -1);
			resolve(result);
		}, 1000)
	})
}

async function searchFunc (searchWord) {

	let results = await fetchList(searchWord);
	console.log(results);
	if(results.length > 5) {
		results = results.splice(0,5);
	}
	if(results.length == 0) {
		document.getElementById('display-box').classList.remove('show');
		document.getElementById('display-box').classList.add('hide');
		removeSearchBox(document.getElementById('display-box'));
	}
	else {
		document.getElementById('display-box').classList.remove('hide');
		document.getElementById('display-box').classList.add('show');
		removeSearchBox(document.getElementById('display-box'));
		for(let i = 0; i < results.length; i++) {
			let ele = document.createElement('div');
			ele.innerHTML = results[i];
			document.getElementById('display-box').appendChild(ele);
		}
	}


}

function debounceFunc(foo, delay) {

	let timer;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			let searchWord = document.getElementById('search-bar').value;
			foo(searchWord);
		}, delay); //500ms
	}

}

const fetchWords = debounceFunc(searchFunc, 500);
