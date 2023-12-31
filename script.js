addEventListener('DOMContentLoaded', (e) => {

	const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

	const input = document.querySelector('#fruit');
	const suggestions = document.querySelector('.suggestions ul');

	input.addEventListener('keyup', searchHandler);
	suggestions.addEventListener('click', useSuggestion);


	function searchHandler(e) {
		let fruitInput = input.value;
		
		if(fruitInput.length > 0){
			search(fruitInput);
		} else {
			console.log('Remember to remove drop down when input is empty')
		}
		
	}


	function search(str) {
		let results = [];

		results.push(fruit.filter((el) => el.toLowerCase().includes(str.toLowerCase())));
		
		showSuggestions(results,str)
	}


	function showSuggestions(results, inputVal) {
		const list = results.map((items) => {
			return `<li>${items}</li>`;
		}).join('');
		
		suggestions.innerHTML = `${list}`
	}


	function useSuggestion(e) {
		input.value = e.target.innerHTML;
	}
	
});