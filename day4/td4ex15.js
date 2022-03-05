//ex15
function small(p1, p2) {
    if (p1.age < p2.age) {
        return p1.firstName;
    }
    else {
        p2.firstName;
    }
}
console.log(small({ firstName: 'prabha', age: 15 }, { firstName: 'karan', age: 20 }));
