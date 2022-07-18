// actually it's quite better to write algorithmic questions in c++ :)

const findLongestWord = (sentence) => { // O(sentence.length)
    sentence = ignoreInvalidCharacters(sentence); // leave only spaces and lowercase letters
    let answer = "";
    let length = 0;
    let numVowels = 0;

    let currentWord = "";
    for (let i = 0; i < sentence.length; i++) {
        let currentChar = sentence.charAt(i);
        if ((i === sentence.length - 1) || (currentChar === ' ')) {
            if (i === sentence.length - 1 && currentChar !== ' ') { // if character is the last one but not space
                currentWord += currentChar;
            }
            let [currentLength, currentNumVowels] = processCurrentWord(currentWord);
            if (currentLength > length || ((currentLength === length) && (currentNumVowels > numVowels))) {
                answer = currentWord;
                length = currentLength;
                numVowels = currentNumVowels;
            }
            currentWord = "";
        } else {
            currentWord = currentWord + currentChar;
        }
    }

    return answer;
}

const ignoreInvalidCharacters = (sentence) => { // O(sentence.length)
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i) === ' ' || ((sentence.charCodeAt(i) >= 97)
                && (sentence.charCodeAt(i) <= 122))) { // space or lowercase letter
            result += sentence.charAt(i);
        }
    }
    return result;
}

const processCurrentWord = (word) => { // O(word.length)
    let numVowels = 0;
    for (let i = 0; i < word.length; i++) {
        if (isVowel(word.charAt(i))) {
            numVowels++;
        }
    }
    return [word.length, numVowels];
}

const isVowel = (ch) => { // O(1)
    return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u';
}

// Testing------------------------------------------------

// sample
const test1 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
console.log("test1 result: " + findLongestWord(test1)); // O(n) time and O(1) extra memory

const test2 = ""; // empty string
console.log("test2 result: " + findLongestWord(test2)); // O(n) time and O(1) extra memory

const test3 = "good"; // 1 word
console.log("test3 result: " + findLongestWord(test3)); // O(n) time and O(1) extra memory

const test4 = "a b c"; // 1 space
console.log("test4 result: " + findLongestWord(test4)); // O(n) time and O(1) extra memory

const test5 = "a      b  c"; // many spaces
console.log("test5 result: " + findLongestWord(test5)); // O(n) time and O(1) extra memory

const test6 = "ab ba"; // many answers
console.log("test6 result: " + findLongestWord(test6)); // O(n) time and O(1) extra memory

const test7 = "a!b!c!d!e!f!g!h!i!j!k!l!m!n!o!p!q!r!s!t!u!v!w!x!y!z %$ *(,./?';][) b@#^:;a    "; // invalid characters
console.log("valid sentence: " + ignoreInvalidCharacters(test7)); // also test generating of valid sentence with ignoring invalid characters
console.log("test6 result: " + findLongestWord(test7)); // O(n) time and O(1) extra memory
