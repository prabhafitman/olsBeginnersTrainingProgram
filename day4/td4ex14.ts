//ex14
type person = {firstName: string, age: number};

function dummy(p1: person, p2: person): string{
    
    if(p1.age>p2.age){
        return p1.firstName;
    } else {
        return p2.firstName;
    }
}
let dummy2: string;
dummy2 = dummy({firstName: 'prabha', age:25}, {firstName: 'karan', age: 30});
console.log(dummy2);

