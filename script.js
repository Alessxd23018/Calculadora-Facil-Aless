function appendToDisplay(value) {
	document.getElementById('display').value += value;
}

function clearDisplay() {
	document.getElementById('display').value = '';
}

function calculateResult() {
	const display = document.getElementById('display');

	try {
		display.value = Function(`"use strict"; return (${display.value})`)();
	} catch {
		display.value = 'Error';
	}
}
