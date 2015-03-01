$(document).ready(function() {
	for (var num = 1; num <= 100; num++) {
		if (num % 15 == 0) {
			$('body').append('fizzbuzz</br>');
		}
		else if (num % 3 == 0) {
			$('body').append('fizz</br>');
		}
		else if (num % 5 == 0) {
			$('body').append('buzz</br>');
		}
		else {
			$('body').append(num + '</br>');
		}
	};
});