function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }
    const digitToLetters = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    const result = [];
    function backtrack(combination, nextDigits) {
        if (nextDigits.length === 0) {
            result.push(combination);
        }
        else {
            const letters = digitToLetters[nextDigits[0]];
            for (let i = 0; i < letters.length; i++) {
                backtrack(combination + letters[i], nextDigits.slice(1));
            }
        }
    }
    backtrack("", digits);
    return result.sort();
}
console.log(letterCombinations("23"));
module.exports = letterCombinations;