//ex15

type person1 =  {firstName: string, age: number}
function small(p1: person1, p2: person1): string{
    if (p1.age<p2.age)
    {
        return p1.firstName;
    } else {
        p2.firstName
    }
}
console.log(small({firstName: 'prabha', age: 15}, {firstName: 'karan', age: 20}));