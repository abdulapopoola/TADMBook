// O(n^3log n). Can be improved.

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
                if (k === i || k === j) {
                    continue;
                }
                var difference = sumOfPair - cubes[k];
                if (difference < 0) {
                    break;
                }
                var index = cubes.indexOf(difference); //Can be improved to logn by binary search
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

/** DYNAMIC PROGRAMMING ATTEMPT O(n^3); better than the former **/
function getRamanujamNumbersDyn(n) {
    var maxCubeVal = n * n * n;
    var cubeToValMap = {};

    for (var i = 0; i <= maxCubeVal; i++) {
        cubeToValMap[i] = false;
    }

    for (var i = 0; i <= n; i++) {
        var cube = i * i * i;
        cubeToValMap[cube] = i;
    }

    var results = [];
    for (var a = 0; a <= n; a++) {
        for (var b = 0; b <= n; b++) {
            for (var c = 0; c <= n; c++) {
                if (a === b || a === c || b === c) {
                    continue;
                }
                /** can be optimized to a lookup for pre-calc cube values **/
                var dCubed = (a * a * a) + (b * b * b) - (c * c * c);
                var d = cubeToValMap[dCubed];
                if(d){
                    /** Optimize to avoid pushing the same batches over and over **/
                    results.push([a,b,c,d]);
                }
            }
        }
    }
 
    return results;
}

//FIRST ALGO ATTEMPT
// Start at n
// Create four arrays
// each array entry contains cube of value up to n
// do all pairwise additions of two of the arrays
// do same for the second array
// if there are equal sums, then find the roots (indices) of those pairs

//SECOND ALGO ATTEMPT
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