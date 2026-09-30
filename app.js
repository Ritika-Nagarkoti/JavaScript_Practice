// let age = 20;
// console.log(age);

// var a = 10;
// a = 23;//value reinitialize
// console.log(a);
// var a = 18;
// a = 37;//value reinitialize
// console.log(a);

// let age = 20;
// age = 35;
// console.log(age);

// const age =25;
// age = 31;
// console.log(age);



// Primitive & Reference Datatypes

/*// String
let name = "Shiv";
console.log(name);

// Number
let number = 123;
console.log(number);

// boolean
let isLoggedIn = true;
console.log(isLoggedIn);

// Undefined (variable create but value not initialized or assigned)
let age;
console.log(age);

// Null
let age2 = null;
console.log(age2);

// BigInt
let number1 = 1234567890987654321123456n;//here n represent number ka datatype bigint hai
console.log(number1);

// Symbol (use to create unique identifiers)
let newUser = Symbol("id");
console.log(newUser);


// Array (can store multiple datatypes)
let arr = [123,"Dev",true,null,undefined,{name:"Shri",age:21}]
console.log(arr);

// Object (store particular info)(data store in key value pair)
let obj={
    name:"Kriti",
    age:23
}
console.log(obj);

// Function
function userAge()
{
    let age = 22 ;
    console.log(age);
}
userAge();

// Primitive VS Reference
let a = 10 ;
let b = 20 ;
b=30;
console.log(a);
console.log(b);

// Reference
let user1={
    name:"ram",
    age: 25
}
let user2 = user1
user2.name ="Abhay"// . dot operator 
console.log(user1)// share same reference agr dusre mei change to phle mei bhi wahi change and vice versa
console.log(user2)
*/


// Type con & coe
// let age ="23"//string
// let newAge = Number(age)//explicit conversion
// console.log(newAge)

// let age=234
// let newAge = String(age)
// console.log(newAge)//in console number in blue and string in white

// type coersion (js khud se ek datatype ko dusre mei convert kARta hai)
// let a1 = "10"
// let b1 = 20  1020
// console.log(a1 + b1)// in case of + datatype same to addition aur concatnation if ek ka bhi datatype string 

// let a1 = "20"
// let b1 = 10//convert into number(10) implicitly
// console.log(a1-b1)// in case of - * / to jo operator wahi kaam

// let a2 = "20"
// let b2 = 5
// console.log(a2*b2)

// let a3 = 10
// let b3 = "5"
// console.log(a3/b3)

// let a = "shiv"
// console.log(a)
// console.log(typeof a)
// let b = 22
// console.log(b)
// console.log(typeof b)
// let c = true
// console.log(c)
// console.log(typeof c)
// let d
// console.log(d)
// console.log(typeof d)
// let e = null
// console.log(e)
// console.log(typeof e)
// let f = 1234567890987654321123456n
// console.log(f)
// console.log(typeof f)
// let g = {
//     name : "shivansh",
//     age : 25
// }
// console.log(g)
// console.log(typeof g)
// let h = [22,"hey"]
// console.log(h)
// console.log(typeof h)
// console.log(Array.isArray(h))


// let firstName = "shri"
// console.log(FIRSTNAME) // js is case sensitive so error

// Arithmatic Operator
// let num1 = 20
// let num2 = 10
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)
// console.log(num1%num2)
// let num3 = 5
// let num4 = 3
// console.log(num3**num4)
// console.log(++num1)

// let count1 = 10
// console.log(count1++)
// console.log(count1)

// let count2 = 10
// console.log(++count2)
// console.log(count2)

// let count3 = 5
// console.log(count3--)
// console.log(count3)

// let count4 = 5
// console.log(--count4)
// console.log(count4)

// let num1 = 5 // here = assign operator
// console.log(num1)
// num1 += 10 // num = 5 + 10 add & assign work / num = num + 10
// console.log(num1)

// let num2 =10
// num2 -= 8
// console.log(num2)

// let num3 =10
// num3 *= 2
// console.log(num3)

// let num4 =10
// num4 /= 5
// console.log(num4)

// let num5 =10
// num5 %= 8
// console.log(num5)

// let num6 = 2
// num6 **= 5
// console.log(num6)


// let age = 19
// let hasLicense = true 
// if (age > 18 && hasLicense)
// {
//     console.log(true)
// }
// let age2 = 15
// if (age2 > 18 || hasLicense)
// {
//     // console.log(age2 > 18)
//     console.log(true)
// }
// if(!(age2>18)){
    // console.log(true)
// }


console.log(10 > 5)
console.log(10 < 5)
console.log(10 >= 5)
console.log(10 <= 5)

console.log(10 == "10")//True
console.log(10 === "10")//False since datatype diff