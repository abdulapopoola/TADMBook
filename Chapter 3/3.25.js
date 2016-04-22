/*
    QUESTION
    You are given a search string and a magazine. You seek to generate all the characters in
     search string by cutting them out from the magazine. Give an algorithm to efficiently 
     determine whether the magazine contains all the letters in the search string.
*/

function contains(searchStr, magazineChars) {
    let unfoundCharsLen = searchStr.length;
    let magazineCharLen = magazineChars.length;
    if(unfoundCharsLen > magazineCharLen){
        return false;
    }
    
    let charCodeToFreqMap = {};
    for (let i = 0; i < unfoundCharsLen; i++) {
        let char = searchStr.charCodeAt(i);
        if (charCodeToFreqMap[char]) {
            charCodeToFreqMap[char]++;
        } else {
            charCodeToFreqMap[char] = 1;
        }
    }
    
    for (let i = 0; i < magazineCharLen; i++){
        let char = magazineChars.charCodeAt(i);
        if (charCodeToFreqMap[char] > 0){
            unfoundCharsLen--;
            charCodeToFreqMap[char]--;
            if (unfoundCharsLen === 0){
                return true;
            }
        }
    }
    
    return false;
}

var test = contains('a boy', 'this is a boy string test');