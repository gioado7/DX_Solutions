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

const test = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
console.log(findLongestWord(test)); // O(n) time and O(1) extra memory
