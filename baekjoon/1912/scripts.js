var lines = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
var n = Number(lines[0]);
var numbers = lines[1].split(' ').map(Number);
var i;
var max_sum = -Infinity;
var sum = 0;
for (i = 0; i < n; i++) {
<<<<<<< HEAD
  var number = numbers[i];
  sum += number;
  if (sum > max_sum) max_sum = sum;
  if (sum < 0) sum = 0;
}

console.log(max_sum);
=======
    var number = numbers[i];
    sum += number;
    if (sum > max_sum) max_sum = sum;
    if (sum < 0) sum = 0;
}

console.log(max_sum);
>>>>>>> ac38ecab51634dd7ac6000db71718bb985c8ce0b
