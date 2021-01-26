'use strict';

var userScore = 0;

var pizza = prompt('Do you like pizza?');
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

if(pizza.toLowerCase() === 'yes'){
    alert('nick likes pizza');
    userScore++;
} else if(pizza.toLowerCase() === 'no'){
    alert('nick does not like pizza');
} else{
    alert('please answer with yes or no');
};

var locationFrom = prompt('Am I from Long Beach?');

if(locationFrom.toLowerCase() === 'yes'){
    alert('You got it!');
    userScore++;
} else if(locationFrom.toLowerCase() === 'no'){
    alert('you got it wrong');
} else{
    alert('please answer with yes or no');
};

var sushi = prompt('Do I like sushi?');

if(sushi.toLowerCase() === 'yes'){
    alert('Yes I like sushi!');
    userScore++;
} else if(sushi.toLowerCase() === 'no'){
    alert('you got it wrong');
} else{
    alert('please answer with yes or no');
};

if(userScore === 0){
    alert('you got em all wrong!');
}else if(userScore === 1){
    alert('you got 1 of 3');
}else if(userScore === 2){
    alert('you got 2 of 3');
}else if(userScore === 3){
    alert('you got all 3!');
};
