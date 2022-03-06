//ex13
export{}

function name(p1: {firstName: string, age: number}, p2: boolean): {firstName: string, age: number, isMarried: boolean}{
    let obj1 = {
        firstName: p1.firstName,
        age: p1.age,
        isMarried: p2,
    } 
    return obj1;
}
name({firstName: 'prabha', age: 100}, true);



type dummy2 = {firstName: string}
type dummy3 = {firstName: string, age: number}

function dummy1(p1: dummy2, p2: number): dummy2{
    let obj2: dummy2 = {firstName: 'prabha'};
    return obj2
}   


