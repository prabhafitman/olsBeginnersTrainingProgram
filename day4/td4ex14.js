function dummy(p1, p2) {
    if (p1.age > p2.age) {
        return p1.firstName;
    }
    else {
        return p2.firstName;
    }
}
var dummy2;
dummy2 = dummy({ firstName: 'prabha', age: 25 }, { firstName: 'karan', age: 30 });
console.log(dummy2);
