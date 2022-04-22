let login;
let password;
function singIn(login,password){
    let result;
    if (login=='friend' && password=='admin201')
    {result=false;}
    if(login=='admin' && password=='admin2019')
    {result=true;}
    if(login=='root' && password=='admin2019')
    {result=false;}
    if(login=='admin' && password=='admin')
    {result=false;}
    return result;}
let res = singIn('root','admin2019');
console.log (res);