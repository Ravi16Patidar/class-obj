// what is prototype
// Every object in javascript has a built-in properties,which is called its prototype

let obj={
    fname:"Ravi",
    lname:"Patidar",
    age:21,
    email:"ravi_prototype@gmail.com"
}
console.log(Object.prototype) // this is used to print all prototype of object
console.log(obj) 
// The output 
// {fname: 'Ravi', lname: 'Patidar', age: 21, email: 'ravi_prototype@gmail.com'}
// age:21
// email: "ravi_prototype@gmail.com"
// fname: "Ravi"
// lname: "Patidar"
// [[Prototype]]: Object

// 1. when you will open  // [[Prototype]]: Object this object you will see all the prototype (methods) of object
// 2. And you can also create and add your own prototype (methods) 
// for example  i have to add prototype(methods) in object so you can follow this steps

Object.prototype.about=function(){
    
    console.log("this is a prototype method")
}
// we can also add property as a prototype
Object.prototype.phone=45; 

// after this when you will print any object you will see the about method and phone property  in your prototype object

// 3. you can also print object prototype like this console.log(Object.prototype)

// 4 you can also create prototype for array and function ,string and more using above steps

// prototype chaining
// isko hindi mei hi padna padega kyoki english mei padne mei  thoda problem aayegi mujhe bhi aayi thi isliye 😁😁
// Definition 1 :The prototype chain in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects and its prototype. 
//  Definition 2: Prototype chaining in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. This is achieved through the prototype property. Here's a simple explanation:



// mene animal naam ka ek object create kiya uske andar ek eats naam ki property hai or ek walk naam ki method hai 
const animal = {
    eats: true,
    walk: function() {
        console.log("Animal walks");
    }
};
const rabbit = Object.create(animal);
console.log(rabbit)
// ab mene Object.create method mei animal object pass karke naya object create ho gaya jisko mene rabbit naam ke variable mei assign kar diya ab rabbit bhi ek object ban gaya hai ab rabbit object bhi animal object ki saari property or methods ko access kar sakta hai ab aap jab rabbit ko print karenge (console.log(rabbit)) se to {} emplty object print hoga kyoki rabbit ki  ki koi property ya methods nahi hai per aapko ek [[Prototype]]: Object print hoga or jab app isko open karenge tab aapko eats property or walk method iske prototype mei milegi 

// ab in sab ka matlab ye hua ki agar hum (console.log(rabbit.eats)) karte hai to  rabbit object  sabse pehle apne object mei check karega ki kya eats property ya walk method exist karti hai agar karti hai to vo print kar degi nahi to vo apne prototype yani animal object mei check karegi fir vo property use kar lega

// for example  ab mene rabbit mei bhi eats property daal di ab aap jab console.log(rabbit.eats) use karenge to aapko result "yes" milega na ki true 

// summary: pehle rabbit khud ke object mei us property ya method ko find karega agar vo exist karti hai to return kar dega nahi to fir uske prototype mei find karega agar vo exist karti hai to return kar dega nahi to fir uske nested protype mei check karegi ye process jab tak chalegi jab tak prototype khatam nahi ho jate or agar fir bhi vo method ye property nahi milti to not found .
// or isi process ko prototype chaining kehte hai   
// rabbit.eats="yes"
// console.log(rabbit.eats)



// prototype inheritance
// Prototype Inheritance: The mechanism by which one object inherits properties and methods from another object.
// prototype chaining
// Prototype Chaining: The process of looking up properties and methods through the prototype chain.


