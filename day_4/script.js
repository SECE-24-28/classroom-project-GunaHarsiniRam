//console.log("Hello world again");
//console.log(2+3);
//variable can be declared in 3 ways
//var a = 10;
//const b = 40.6;
//let c = "hello";
//console.log(a, b , c);
//dont use var unless absolutely necessary as it can be used even before initilization and it can also be redeclared
//var a = 10;
//a = 40;
//b=10 // not allowed
//let b = "H1";
//let b = 10 // not allowed
//const c = 30.5;
//c = 50/cant reassign the value to const variable/
//console.log(a, b, c);


//ARRAYS --> is a datatype that stores multiple elements of the same datatype
/*let a = [12, 13, 14];
console.log(a);
const b = [10, "hello", 30.5, true];//can change or add or remove elements from the array even if its constant as we are nor redeclaring the variable and we are not changing its datatype.
b.push(15);
//b = [1, 2, 3]//this is not allowed
b[2]= 40 // this is allowed
console.log(b);
console.log(b.length);
b.pop();
console.log(b);
b.shift();
console.log(b);
b.unshift(11, 12, 13);//add element in the first
console.log(b);
b.shift();//remove the element in the 1st
console.log(b);
b.splice(1,3) //splice(startindex,no of items to delete, item1,item2,.....item n) //it help us to add,remove and alter elements in our array
console.log(b);
b.splice(2,0,"world");//if the delete count is 0 means then it will add 
console.log(b);
b.splice(2,2,50);//replace the element from the 2nd index
console.log(b);
b.splice(2);//remove the element in the 2nd index
console.log(b);
b.splice(-1,1)//removes the last element
console.log(b);

const arr=[1,2,3,4,5] ;
console.log("before map function",arr);
const arrnew=arr.map(num => num * 5);
console.log("after map function",arrnew); // creates a new array by applying the function to each element of the original array 

// ARRAY FILTER
const newarr2 = Array.filter(num=> num % 2 === 0);
console.log("after filter function",newarr2); // creates a new array with elements that satisfy the condition in the function*/

/*const courses = ["mongoDB", "expressJS", "reactJS", "nodeJS","postgress"];
console.log(`Original courses: ${courses}`);
const newcourses = courses.filter(c=>c!=="postgress");
console.log(`Updated courses: ${newcourses}`);*/


//reduce -folds an array to a single value by applying a function to each element and accumulating the result
/*const arr=[1,2,3,4,5];
const sum=arr.reduce((store,num)=> store+num,0);
console.log(`Addition of ${arr} is ${sum}`);*/

//OBJECTS - collection of key value pairs
/*const user={
    fname: "guna",
    lname: "ram",
    company:{
        sal:10000,
        position:"Software Engineer",
    }
    }
const user2={}; //empty object
//console.log(user.fname);
//console.log(user["lname"]);
//console.log(user.company.position);

user.age=19; //adding new key value pair to object
user['lname']="harsini"; //modifying existing key value pair
delete user.fname; //deleting key value pair
//console.log(user);
console.log(Object.keys(user)); //gives all the keys in the object as an array
console.log(Object.values(user)); //gives all the values in the object as an array
console.log(Object.entries(user)); //gives all the key value pairs in the object as an array of arrays*/

//spread operator
/*const arr1=[1,2,3];
const arr2=[4,5,6];
const merge=[...arr1,...arr2]; 
console.log(merge);*/

//functions
/*function add(a,b){  //hoisted function
    const c=a+b;
    return c;
}
console.log(add(2,3));

const add=function(a,b){ //non-hoisted function
    const c=a+b;
    return c;
}

const fact=function factorial(num){                 //recursive function\

    //return n<=1 ? 1 :num*factorial(num - 1);
    if(num<=1){
        return 1;
    }
    else{
        return num*factorial(num - 1);
    }
}
console.log(fact(5));*/

/*const arr=[1,2,3,4,5];
function addArr(arr){
    const sum=arr.reduce((acc,num)=> acc+num);
    return sum;
}
console.log(addArr(arr));

/*const user={
    add: function(a,b){
        return a+b;
}
}

const sum=(a,b)=> {return a+b;} //arrow function
const sub=(a,b)=>{return a-b;}//if there is only one expression we can skip the return and curly braces
console.log(sum(21,89));
console.log(sub(50,20));

function greet(name){ //default parameter
    console.log(`Hello ${name}, welcome to the javascript world!`);
}
greet("Ram");*/

/*function greet(name="Guest"){ //default parameter
    console.log(`Hello ${name}, welcome to the javascript world!`);
}
greet();


// for-loops
for(let i=0;i<5;i++){
    console.log(`5 x ${i} = ${5*i}`);
}

//for-of loop
let i=1;
while(i<=5){
    console.log(`While loop: 5 x ${i} = ${5*i}`);
    i++;
}


//do-while loop
let i=1;
do{
    console.log(`5 x ${i} = ${5*i++}`);
}while(i<=5);

const arr=[13,12,83,64,95];

/*for(let i=0;i<arr.length-1;i++){
    console.log(arr[i]);
}
for(const num of arr){
    console.log(num);
}*/


//for-in loop
/*const user={
    fname:"Guna",
    lname:"Ram",
    age:19,
    occupation:"Software Engineer",
}
for(const key in user){ 
    console.log(`${key}: ${user[key]}`);
}*/


//for-each loop
const arr=[1,2,3,4,5];
arr.forEach(num => console.log(num)); //executes a provided function once for each array element



