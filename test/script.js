let screen = document.getElementById('screen');

function appendNumber(number) {
	screen.value += number;
}

function appendOperator(operator) {
	screen.value += operator;
}

function appendDecimal(decimal) {
	screen.value += decimal;
}

function calculate() {
	let result = eval(screen.value);
	screen.value = result;
}
