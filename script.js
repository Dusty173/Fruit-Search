addEventListener('DOMContentLoaded', (e) => {

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function searchHandler(e) {
	let fruitInput = input.value;
	
	if(fruitInput.length > 0){
		search(fruitInput);
	} else {
		console.log('Searchbar is empty');
	}
	
}

function search(str) {
	let results = [];
	
	results.push(fruit.filter((el) => el.toLowerCase().includes(str.toLowerCase())));
	
	showSuggestions(results)
	return results;
}


function showSuggestions(results, inputVal) {
	let list = document.querySelector('ul');
	results.forEach(element => {
		let listItem = document.createElement('li')
		listItem.innerText = results
		list.appendChild(listItem)
	});


	console.log(results)
}

function useSuggestion(e) {
	// TODO
}



});