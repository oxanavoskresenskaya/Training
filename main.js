
function pow(x, n) {
x = prompt ('Введите x', '');
n = prompt ('Ведите n', '');
    if(n>0) {
        return alert(x ** n)
    } else {
        return alert('Степень ${n} не поддерживается, используйте натуральное число')
}
}
pow();
