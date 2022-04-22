function switched(a){
    var res;
       switch(a) {
       case 0:
           res = false;
           break;
       case 1:
           res = true;
           break;
       case 2:
       case 3:
           res = 'error';
           break;
       }
    return res;   
   }
   let sw=switched(0);
   console.log(sw);