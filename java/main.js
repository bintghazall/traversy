/*/*console.log('HELLO WORLD')
console.error('ERROR')
//console.warning('WARMING')
// assigning variables with var, let and const
let age=30; 
age=31;
console.log(age);
//data types - string, Numbers, Boolean, null, undefined, symbol
const name = 'Aim';
const old = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);
//concatenation
console.log('my name is ' + name + ' and I am  '+ old);
//template string
const hello = 'my name is ${name} and I am ${old}';
console.log(hello);
const s= 'Hello World';
console.log(s.length);

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(''));
//arrays
const numbers = new Array(1,2,3,4,5,6,7);
console.log(numbers);
const fruits=['banana','oranges', 'apples', 'watermelon'];
fruits.push('mangos','pineapple');
fruits.unshift('strawberry','pear')

//to remove last element of array
fruits.pop();

//to check if an element is an array
console.log(Array.isArray('numbers'))
console.log(fruits);
//check index or position of an array element
console.log(fruits.indexOf('pear'))
let object= {name: 'Aim Cfe', location:'abuja'}
document.write(object);
const globalscope = 'i am globally scoped'
function localscoped(){
    const localscope='i am locally scoped'
}
console.log(globalscope);

const num1 = 100;
const num2 = 23;
//addition
const addthem = num1 / num2;
console.log(addthem)
let icr = 21;
icr -=22;

console.log(addthem)
console.log(icr)
for (let i=0; i<20; i++){
    console.log(i)
}
/*let i=0;
while(i<20) {
    console.log(i);
    i++;
}*/
/*const friends = ['adenike', 'marufat', 'lawrence','asiyah', 'mitchel']
for (let i = 0; i<friends.length; i++){
    if (i<2){
        console.log(friends[i])
    }
}*/
/*let states=['abia','adamawa','akwa-ibom','anambra','bauchi']
states[10]='kaduna'
states[5]=['cross-river','delta']
console.log(states[10])
console.log(states)
for (let i = 0; i<states.length; i++){
    console.log(states[i])
}
states.splice(4,0, 'notHere');
console.log(states)
states.push();
console.log(states)
let months=['Jan','Feb','Mar','April','may']
states.forEach(function(month, i){
    console.log(i +' The month is ' + month)
}) 
const result = months.map(function(month){
    return  'The month is ' + month
})
console.log(result)
const filtered = months.filter(month=>month.includes('n'))
console.log(filtered)

//constructed syntax object
/*function Person(name,age, location){
    this.name = name;
    this.age = age;
    this.location = location;
    this.speak = 
    function(){
        return 'my name is' + this.name +'i am ' +this.age + 'old. i reside in ' +this.location
    }
}
const asiya = new Person("asiya", 14,"Lagos");
const adenike = new Person("adenike", 12,"Lagos");
console.log(asiya.speak)*/

/*literal syntax
const asiya = {}
asiya.name = 'Asiya'
asiya.location = 'Lagos'
asiya.age = '14'
asiya.speak = function (){
    `my name is ${this.nmae}, I am ${this.age) years old, and i reside in ${this.location}
}
console.log(asiya.speak)*/
/*const asiya = {
    name: 'Asiya',
    location: 'Lagos',
    age: 14,
    friends: [{name:'friend',location:'newcatle'},{name:'friend2', location:'silicon valley'}],
    speak: function (){
    return `my name is ${this.name}, I am ${this.age} years old and I reside in ${this.location}`
}

}
console.log(asiya.speak)
asiya.friends.push({name:'friend 3', location:'Abuja'})
console.log(asiya.friends)
if ('friends' in asiya  && asiya.friends.length>2){
    console.log(asiya.friends)
}
/*for (let key in asiya){
    console.log(key)
    console.log(asiya[key])

}*/

/*const arr = [1,2,3,4,5]
arr.forEach(item=>console.log(item*10))
const p = arr.map(function(item){return item*20})
console.log(p)


//creating higher order function
const strArray = ['Javascript', 'python', 'PHP', 'C'];
const intArray = [10, 6,3,4,1];

function mapForEach(arr, fn){
const newArray = [];
for (let i=0; i < arr.length; i++) {
    newArray.push(fn([i]));
}
return newArray
}
const lenArray = mapForEach(strArray, function(item)
{
    return item.length;
});
console.log(lenArray) 

let check = [3,4,6,8,9]
let highest = 0;
for (i=0; i<check.length; i++){
    if (highest<check[i]){
        highest =check[i]
    }    
    else highest =highest;
}
console.log(check)
console.log("Highest number is: " + highest);
console.log(Math.max(...check))*/

//DOM Manipulation
/*const querySelectorApi = document.querySelectorAll('p')
const newElement = document.createElement('div')
const body = document.querySelector('body')
querySelectorApi.forEach(el=>{body.removeChild(el)})
//const newElement = document.createElement
newElement.textContent = 'I was created in javascript'
newElement.classList.add('extra style')
body.appendChild(newElement)*/






console.log(clonedElement)


const btn = document.querySelector('body')
btn.onclick =function(){
    console.log('Logging from JS file')
}
//event listeners, built-in JS elements that listens to occurrence and execute the required command
btn.addEventListener('click',()=>{
    //cloneNode
const clonedElement =newElement.cloneNode(true)
clonedElement.textContent = 'i am cloned element'
body.appendChild(clonedElement)
})

const eventhandller=()=>{
 

}
window.addEventListener('keypress',(event)=>{
    if(event.which ===13){
          console.log(event)
        }
})
