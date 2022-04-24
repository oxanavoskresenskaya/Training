
function compared(Word, nextWord) {
    Word = prompt ('Ведите слово', '');
    nextWord = prompt ('Ведите следующее слово','');
    if (Word.includes(nextWord)) {
        return true;
    }else {
        return false;
    }
}
console.log(compared());

