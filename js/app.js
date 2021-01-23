'use strict';

var userName = prompt('What is your favorite color?');
// alert(userName + ' is an awesome color!');

///////////// Can be written like this code or the block below /////////////
// if(userName === 'blue' || userName === 'Blue' || userName === 'BLUE'){
//     console.log('nick likes blue');
// } else{
//     console.log('nick likes brown');
// }

if(userName.toLowerCase() === 'blue'){
    console.log('nick likes blue');
} else{
    console.log('nick likes brown');
}

// var locationFrom = prompt('Where are you from?');
// alert(locationFrom + ' is a great place to visit!');

// var food = prompt('What is your favorite food?');
// alert('I love ' + food + '!');