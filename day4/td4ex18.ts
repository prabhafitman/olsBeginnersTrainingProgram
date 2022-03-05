
function relationBetween (p1: number, p2: number): string{
   p1 > p2;
   p1 < p2;
   p1 >= p2;
   p1 <= p2;
   p1 == p2;
   p2 != p2;
   return;
} 
console.log(relationBetween(5, 50));
console.log(relationBetween(50, 50));
console.log(relationBetween(500, 50));