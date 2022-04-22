const person={
    name:"John",
    lastname:"Doe",
    work:{
        workName:"programmer",
        level:"juniour"
    },
    info:"bad worker", 
}
function modifyObj(person){
    delete person.info
    person.age = 25;
    person.work.level = 'middle';
    return person;
   }
   let per=modifyObj(person)
   console.log(per);