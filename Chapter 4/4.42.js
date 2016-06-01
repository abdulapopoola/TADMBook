/* 4.42
*  Implement an algorithm that takes an input array and returns only the unique elements in it.
*/

function uniq(arr) {
    if (!arr || !arr.length) {
        return arr;
    }

    let dict = {};
    for(let val of arr) {
        dict[val] = val;
    }
    
    return Object.keys(dict);
}

uniq([1,1,2,3,5]);