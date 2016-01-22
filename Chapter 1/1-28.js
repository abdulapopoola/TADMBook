function divide(a, b) {
    var result = 0;
    var isNegative = (a < 0 && b > 0) || (a > 0 && b < 0);
    a = Math.abs(a);
    b = Math.abs(b);

    if(a < b) {
	return 0;
    }

    if (b === 0 ) {
    	return isNegative? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
    }

    var twiceb = b + b;
    while(a >= twiceb) {	
	result+=2;
	a = a - twiceb;
    } 
    if(a >= b){
        result += 1;
    }

    return isNegative? -1 * result : result;
}

var a = divide(-100, -23);
console.log(a);

function faster_divide(a, b) {
    var result = 0;
    var isNegative = (a < 0 && b > 0) || (a > 0 && b < 0);
    a = Math.abs(a);
    b = Math.abs(b);

    while(a >= b) {
        result+=1;
        a = a - b;
    } 

    return isNegative? -1 * result : result;
}
