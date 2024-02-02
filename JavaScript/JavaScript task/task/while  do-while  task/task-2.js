let n = null;
do {
  n = parseInt(prompt('Enter an int number between 1 and 100'));
} while (isNaN(n) || (n < 1 || n > 100));
let sum = n * (n + 1) / 2;
alert('The sum of all int numbers from 1 to ' + n + ' is: ' + sum);