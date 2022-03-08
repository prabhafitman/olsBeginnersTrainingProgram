//ex6

type Person = {
    name: string;
    age: number;
};
function updateAge(_person: string, age: number){
        age = 20;
return age;
}
let retValue: number|string;
updateAge ('person', 36);
updateAge._person = retValue;
    console.log(retValue);

//ex6-2

type prabha = {name: string, age: number};
function newFun(p1: prabha, age: number){
   age = 20;
   return age;
}
let retValue2: number|string;
retValue = newFun({name: 'prabha', age: 23}, 25);
console.log(retValue2)