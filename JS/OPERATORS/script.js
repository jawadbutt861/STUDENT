// Ariithemetic Operators (+ - * / %)
// Assignmet Operators (= += -= *= /=)
// Comparison Operators (< > <= >= == === !== !=)
// Logical Operators (&& || !)
// Bitwise operators
// Unary operator
// ternary operator

// Ariithemetic Operators (+ - * / %)

// let num1 = 5;
// let num2 = 5;
// console.log("Sum is ", num1 + num2);
// console.log("Subtraction is ", num1 - num2);
// console.log("Division is ", num1 / num2);
// console.log("Multiplication is ", num1 * num2);
// console.log("Reminder is ", num1 % num2);


// Assingnmet Operators (= += -= *= /=)

// let num3 = 20;

// console.log(num3 += 5); // num3 = num3 + 5 (num3 = 20 + 5)
// console.log(num3 -= 5); // num3 = num3 - 5 (num3 = 20 - 5)
// console.log(num3 *= 5); // num3 = num3 - 5 (num3 = 20 * 5)
// console.log(num3 /= 5); // num3 = num3 - 5 (num3 = 20 / 5)


// Comparison Operators (< > <= >= == === !== !=)(always returns a boolean value)

// let num1 = 9;
// let num2 = "10";

// console.log(num1 < num2);// (5 < 10)
// console.log(num1 > num2);// (5 > 10)
// console.log(num1 >= num2);// (10 >= 10) (bra ho ya braber ho)
// console.log(num1 <= num2);// (11 <= 10) (choota ho ya braber ho)

// console.log(num1 == num2);// (11 == 10) (sirf data/value ko compare krta h)
// console.log(num1 === num2); // (data/value or data type dono ko compare krta h)

// console.log(num1 != num2);// (10 != 10)(sirf data/value ko compare krta h)

// console.log(num1 !== num2);// (9 !== "10")(data/value or data type dono ko compare krta h)


// Logical operators
// && (AND Operator )
// 1 b condition false hui to sb conditions false ho jyn gi

console.log(5 === 5 && 'a' === 'a');
            // true && true
            //      true

console.log(3 === 3 && 4 !== 4);
            // true && false
            // false
            // Agr 1 b false hua to sary false ho jyn gy
console.log(2 + 2 === 4 && 3 * 3 === 9);
            // true && true
            // true
console.log(10 - 3 > 5 && 2 * 2 === 4);
            // true &&  true
            // true
console.log(typeof 'JS' === 'string');
            // string === string
            // true
        //  TRUTH TABLE
            // T  T = T
            // T  F = F
            // F  T = F
            // F  F = F

// OR operator (||)
// dono me sy 1 true ho gyi to sb true ho jyn gi
// boolean true/false  0/1(binary numbers)  1 represents true and 0 represents false
// TRUTH TABLE
// T T = T
// T F = T
// F T = T
// F F = F

console.log('red' !== 'blue' || 7 < 5);
        //  true || false
        //   true

console.log(5 + 3 > 7 || 2 * 2 !== 4);
        //  true || false
        //      true

console.log(6 / 2 === 3 && 'cat' === 'dog' || 1);
        //  true && false || 1
        //  false || 1(true)
        // true

// Not Operator !
// agr true h to false return kry ga or agr false h to true return kry ga
// TRUTH TABLE
// T = F
// F = T

console.log(!(5 > 10));
        //  !false
        // true




