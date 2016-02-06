// O(n^4). Can be improved.

function getNumberRange(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    return arr;
};

function getRamanujamNumbers(n) {
    var numbers = getNumberRange(n);
    var cubes = numbers.map(function(n) {
        return n * n * n;
    });

    var results = [];
    for (var i = 0; i < n; i++) {
        var tmp = cubes[i];
        for (var j = i + 1; j < n; j++) {
            var sumOfPair = tmp + cubes[j];
            for (var k = 0; k < n; k++) {
                var diffValue = cubes[k];
                if (diffValue === tmp || diffValue === cubes[j]) {
                    continue;
                }
                var difference = sumOfPair - diffValue;
                if (difference < 0) {
                    break;
                }
                var index = cubes.indexOf(difference);
                if ((index > 0) &&
                    (difference !== tmp) &&
                    (difference !== cubes[j])) {
                    results.push([
                        numbers[i],
                        numbers[j],
                        numbers[k],
                        numbers[index]
                    ])
                }
            }
        }
    }
    return results;
}

getRamanujamNumbers(13);

// Start at n
// Create four arrays
// each array entry contains cube of value up to n
// do all pairwise additions of two of the arrays
// do same for the second array
// if there are equal sums, then find the roots (indices) of those pairs

// start from 1 through n
// Cube all the numbers
// Start at first number
// for index = i + 1 to n
// tmp = number + array[i]
// for array from i+2 to n
// subtract value from tmp
// if negative; just exit this loop
// if positive, find number in array if it exists
// those are the four multiples