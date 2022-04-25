function compared (word, nextWord){
    word = prompt ('Ведите слово', '');
    nextWord = prompt ('Введите следующее слово', '');
        word.split('');
        nextWord.split('');
    for (let i = 0; i < nextWord.length; i++) {
    for (let k = 0; k < word.length; k++) {
        if (nextWord[i]===word[k]) {
        return true;} 
        else {
            return false;}
        }
    }
}
alert(compared());