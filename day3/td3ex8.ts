//ex8

export{}


let newFun = function(p1: number, p2: number, _p3?: 'hello'): number {
    return p1+p2;   
};
newFun(25, 10);
newFun(20, 14, 'hello');
console.log(newFun(25, 10));
console.log(newFun(20, 14, 'hello'));
