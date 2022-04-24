
function compared(Word, nextWord) {
    Word = prompt ('Ведите слово', '');
    nextWord = prompt ('Ведите следующее слово','');
    if (Word.includes(nextWord)) {
        alert('true');
    }else {
        alert('false')
    }
}
compared();

