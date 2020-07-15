const { words } = require('../data/words');
let answer, answerCheckArr;

// write your handlers here...
const getWordById = id => {
    return words.find( word => word.id === id);
}

const returnIdCount = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = {};
    const { id, letterCount, word } = words[randomIndex];
    randomWord.id = id;
    randomWord.letterCount = letterCount;
    answer = word;
    return randomWord;
}

const checkLetter = (id, letter) => {
    answer = getWordById(id).word;
    answerCheckArr = [...answer].map( elem => elem === letter);
    return answerCheckArr;
}

module.exports = { getWordById, returnIdCount, checkLetter };