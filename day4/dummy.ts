export{}

function sum(p1: number, p2: number): number{
    return p1+p2;
}
sum(10, 20);

let count: number;
count = 10;
count = 20;
count = 50;
count = sum(10, 20);
count = 10 + 20;

let result: number;
function minus(p1: number, p2: number): number {
    return p1-p2;
}
result = minus(20, 10);
console.log(result);
