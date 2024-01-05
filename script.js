addEventListener('DOMContentLoaded', (e) => {

	const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

	const input = document.querySelector('#fruit');
	const suggestions = document.querySelector('.suggestions ul');

	input.addEventListener('keyup', searchHandler);
	suggestions.addEventListener('click', useSuggestion);

	function search(str) {
		let results = [];

		let filter = fruit.map(item => item).filter(item => item.toLowerCase().includes(str.toLowerCase()))
		
		return filter
	}

	function searchHandler(e) {
		let inputVal = e.target.value;
		
		if(inputVal){
			let results = search(inputVal);
			showSuggestions(results, inputVal);
		} else {
			suggestions.innerHTML = '';
			suggestions.classList.remove('has-suggestions')
		}
		
	}

	function showSuggestions(results, inputVal) {
		suggestions.innerHTML = '';

		for(item of results){
			let li = document.createElement('li');
			li.innerText = item;
			suggestions.appendChild(li);
		}
		suggestions.classList.add('has-suggestions')
	}

	
	function useSuggestion(e) {
		input.value = e.target.innerText;
		suggestions.innerHTML = '';
	}
	
});