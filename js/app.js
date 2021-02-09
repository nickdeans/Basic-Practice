// 'use strict';

// var tbodyParent = document.getElementById('table');
// var allAnimals = [];

// function Amimal(name, type, color, age){
//     this.name = name;
//     this.type = type;
//     this.color = color;
//     this.age = age;

//     allAnimals.push(this);
// }


// function generateHeader(){
//     var trElement = document.createElement('tr');
//     var thElement = document.createElement('th');
//     thElement.textContent = 'Name';
//     tbodyParent.appendChild(thElement);
//     trElement.appendChild(thElement);
    
//     thElement = document.createElement('th');
//     thElement.textContent = 'Type';
//     trElement.appendChild(thElement);
    
//     thElement = document.createElement('th');
//     thElement.textContent = 'Color';
//     trElement.appendChild(thElement);
    
//     thElement = document.createElement('th');
//     thElement.textContent = 'Age';
//     trElement.appendChild(thElement);
// };

// Amimal.prototype.render = function(){
//     var trowTwo = document.createElement('tr');
//     tbodyParent.appendChild(trowTwo);
//     var tdrowTwo = document.createElement('td');
//     tdrowTwo.textContent = this.name;
// }

// var spot = new Animal('spot', 'cat', 'orange', 2)
// var spark = new Animal('spark', 'dog', 'black', 3)

// generateHeader();
// spot.render();

// var userScore = 0;

// alert(userName + ' is an awesome color!');

///////////// Can be written like this code or the block at bottom /////////////
// if(userName === 'blue' || userName === 'Blue' || userName === 'BLUE'){
//     console.log('nick likes blue');
// } else{
//     console.log('nick likes brown');
// }

////Example of how to use console.log ///////////
// if(userName.toLowerCase() === 'blue'){
//     console.log('nick likes blue');
// } else{
//     console.log('nick likes brown');
// }
// function pizzaMan() {
//     var pizza = prompt('Do you like pizza?');
//     if(pizza.toLowerCase() === 'yes'){
//         alert('nick likes pizza');
//         userScore++;
//     } else if(pizza.toLowerCase() === 'no'){
//         alert('nick does not like pizza');
//     } else{
//         alert('please answer with yes or no');
//     }
// };

// function location() {
//     var locationFrom = prompt('Am I from Long Beach?');
//     if(locationFrom.toLowerCase() === 'yes'){
//         alert('You got it!');
//         userScore++;
//     } else if(locationFrom.toLowerCase() === 'no'){
//         alert('you got it wrong');
//     } else{
//         alert('please answer with yes or no');
//     }
// };

// function sushiQuestions() {
//     var sushi = prompt('Do I like sushi?');
//     if(sushi.toLowerCase() === 'yes'){
//         alert('Yes I like sushi!');
//         userScore++;
//     } else if(sushi.toLowerCase() === 'no'){
//         alert('you got it wrong');
//     } else{
//         alert('please answer with yes or no');
//     }
// };

// function userScoreFunc() {
//     if(userScore === 0){
//         alert('you got em all wrong!');
//     }else if(userScore === 1){
//         alert('you got 1 of 3');
//     }else if(userScore === 2){
//         alert('you got 2 of 3');
//     }else if(userScore === 3){
//         alert('you got all 3!');
//     }
// };

// pizzaMan();
// location();
// sushiQuestions();
// userScoreFunc();

// var peopleArray = [];
// var formElement = document.getElementById('form');

// function Person(name, story, likesIceCream){
//     this.name = name;
//     this.story = story;
//     this.likesIceCream = likesIceCream;

//     peopleArray.push(this);
// }

// new Person('Bob', 'drives a car', 'yes');
// new Person('James', 'owns a ice cream shop', 'yes');
// new Person('Frank', 'never eats ice cream', 'no');

// function bananas(e){
//     e.preventDefault();

//     var personName = e.target.username.value;
//     var story = e.target.story.value;
//     var likesIceCream = e.target.icecream.value;

//     new Person(personName, story, likesIceCream);
// }

// formElement.addEventListener('submit', bananas);

// const candy = ['chocolate', 'mint', 'coffee bean'];

// candy.forEach(eat);
// candy.forEach(eatSome);

// function eat(candyName){
//     console.log(`I like ${candyName}`);
// }

// function eatSome(candyName, count){
//     console.log(`I ate some ${count} ${candyName}`);
// }

// function eatSomeWantOthers(candyName, count, candies){
//     console.log(`I ate ${count} ${candyName} and I want ${candies}`);
// }

// candy.forEach(pieces => {
//     console.log(`Would you like to share a ${piece}`)
// });