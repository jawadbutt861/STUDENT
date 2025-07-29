// console.log("Hello Coders");

// LOOPS
// For Loop (Commonly used)
// While Loop
// Do-While Loop

// For of
// For in
// Infinite Loop

// for(//initialization; condition; increment/decrement;)
// i++ = i + 1

// for(let i = 0; i <= 10; i++)
// {
//     console.log( i + " hello world ");
// }

//WHILE LOOP


// while(condition)
// JS jo h wo line by line

// let i = 11;
// while(i <= 10)
// {
//     console.log(i);
//     i++;
// }

// Do-While

// let i = 11;
// do{
//     console.log(i);  
//     i++; 
// }
// while(i <= 10);

// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6

// let num = prompt("Enter Number to print its Table");

// for( let  i = 1; i <= 10; i++)
// {
//     console.log(` ${num} * ${i} = ${num * i} `);
//     // console.log(num + " * " + i + " = " + num*i);
// }


// for(let i = 10; i >= 0; i--)
// {
//     console.log( i );
// }

// 1 to 100 jo even hyn wo print ho k a jyn

// for( let  i = 1; i <= 100; i++)
// {
//    if((i %2 === 0))
//    {
//     console.log(i);
//    }
    
// }





// PRACTICE


// While
// do-while
// for

// for(let i = 0; i <= 10; i++)
// {
//    console.log(i);
   
// }

// for(let i = 10; i >= 0; i--)
// {
//    console.log(i);
   
// }

// let count = 0;
// for(let i = 1; i <= 50; i++)
// {
//    if(!(i %2 === 0))
//    {
//       // console.log(i);
//       count++;
//    }
// }
// console.log(count);

// while

// let  i = 0;

// while(i <= 10)
// {
//    console.log(i);
//    i++;
// }

// let  i = 1;

// while(i <= 50)
// {
//    if(i %2 === 0)
//    {
//       console.log(i);
//    }
//    i++;
// }

let num = prompt("Enter Number to find its Factorial");
let fact = 1;
for(let  i = num; i >= 1; i--)
{
   fact = fact * i;
}

console.log(fact);
