// Typescript Calculater calculation oprations 

// 1. Number("100+200"); Output: NaN
// ye sirf 1 string number wali value ko number mein convert karta hai...

// 2. eval("100+200"); Output: 300
// ye 2 string number ki values ko number mein convert kar ke calculate krwata hai...



// <-----------------------------------------------END----------------------------------------------->
// Eval()


// example 1

// let num1 = '10';

// let num2 = '5';

// console.log(num1 + num2);   // Output: 105



// example 2

// let num1 = '10';

// let num2 = '5';

// console.log(eval(num1 + num2));  // Output: 105     convert in number but value is still concat



// example 3

// let num1 = '10';

// let num2 = '5';

// console.log(eval('10' + '5'));  // Output: 105     convert in number but value is still concat.



// example 4 main

// let num1 = '10';

// let num2 = '5';

// console.log(eval('10 + 5'));  // Output: 15     convert in number and calculate sum.



// // example 5 main

// let num1 = '10';

// let num2 = '5';

// console.log(eval('10 - 5'));  // Output: 5     convert in number and calculate minus.



// example 6 main

// let num1 = '10';

// let num2 = '5';

// console.log(eval('10 * 5'));  // Output: 50     convert in number and calculate multiply.


// <-----------------------------------------------END------------------------------------------------>
// number() conversion string number convert in Number data type


// example 1

// let a = '10';

// let b = '20';

// let c = a + b;

// console.log(c); // Output: 1020



// example 2

// let a = '10';

// let b = '20';

// let c = Number(a) + Number(b);

// console.log(c); // Output: 30




// example 3

// Number() method 2 string ki number values ko calculate nahi krwa pata.

// let x = Number("100+200");
// console.log(x);            // Output: NaN




// // example 4

// // eval() ka method 2 string ki number values ko calculate krwa deta hai.

// let y = eval("100+200");
// console.log(y);           // Output: 300



// example 5

// eval() ka method yahi same calculation perfom karwa rha hai.
// jo Number() ka method values ko alag alag kar ke karwa rha hai.

// let c = Number("100") + Number("200");

// console.log(c);    // Output: 300



// let y = eval("100+200");

// console.log(y);    // Output: 300


// <-----------------------------------------------END----------------------------------------------->
// Another way to calculate 2 string number values


// let a = "50+30";

// // console.log(a.split("+"))  // Output: [ '50', '30' ]


// let b = a.split("+");

// let result = b.reduce((acc, curr) => acc + curr);
// console.log(result);


// <-----------------------------------------------END----------------------------------------------->
// Assignment opearter call => short-hand operater

// ye short hand method hamen screen ki value ke sath lgana hai kiyun ke jab bhi ham kisi bhi number ko bar bar
// click karenge to wo concat hota jaega screen pe....


// example 1

// let a = 10;

// a += 12; // 22

// a += 8; // 30

// console.log(a); // Output: 30


// example 2

// let a = "10";

// a += "12";

// console.log(a);  // Output: 1012


// example 3

let a = "7";   // Output: 7      calculater mein 7 pe click karne se 7 aega screen pe.

a += "7"   // Output: 77        dosri dafa 7 pe click karne se pehly wali or ye wali value dono concat ho jaengi.

a += "7"  // Output: 777       tesri dafa 7 par click karne se 3 (777) aenge screen pe.

a += "7"  // Output: 7777       chothi dafa 7 par click karne se 4 (7777) aenge screen pe.

console.log(a);  // Output: 7777