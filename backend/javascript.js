let d = new Date('June 1, 2021 04:24:00');
let s = d.toString(); 
console.log(d == s);
console.log(d === s);

let num1 = 5;
let num2 = "5";
console.log(num1 == num2);
console.log(num1 === num2);


function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers1 = [1, 2, 3];
  const numbers2 = [1, 2, 3];
  
  console.log(sum(...numbers1, ...numbers2));


