$(document).ready(function() {
	var max = prompt('Enter a number my friend.');
	if (isNaN(max)) {
		alert("I said NUMBER. $ಠ_ಠ");
		var max = prompt('Enter a number my friend.');
	}
	var max = +max;



function fizzBuzz(max) {
		for (var num = 1; num <= max; num++) {
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
		}
}
	fizzBuzz(max);
});