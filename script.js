function appendToDisplay(value) {
	const display = document.getElementById('display');

	if (display.value === 'Error') {
		return;
	}

	display.value += value;
}

function clearDisplay() {
	document.getElementById('display').value = '';
}

function calculateResult() {
	const display = document.getElementById('display');

	try {
		const result = Function(`"use strict"; return (${display.value})`)();

		if (!Number.isFinite(result)) {
			throw new Error('Resultado no válido');
		}

		display.value = result;
	} catch {
		display.value = 'Error';
	}
}
