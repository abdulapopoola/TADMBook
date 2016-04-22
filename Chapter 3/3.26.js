/*
    QUESTION
    3-26. Reverse the words in a sentence---i.e., My name is Chris becomes Chris is name My. Optimize for time and space.
*/

function reverse(str) {
    let stack = [];

    let i = 0;
    let j = 0;
    let char = str[i];
    while (char != null) {
        if(char === ' '){
            let substr = str.substring(i, j);
            stack.push(substr);
            j = i + 1;
        }
        i++;
        char = str[i];
    }
    let lastSubstr = str.substring(i, j);
    stack.push(lastSubstr);

    return stack.reverse().join(' ');
}

let ans = reverse('My name is Chris');
let success = ans === 'Chris is name My';
console.log(success);