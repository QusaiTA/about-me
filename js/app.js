'use strict';
let score = 0;
let userName = prompt('What is your name ?');
//console.log(userName);
alert('Thank u for visiting my website, i hope u will have much fun' + " " + userName);

function q1(){
let likeSports = prompt('did u think i like sport or not ?').toUpperCase();

//console.log(likeSports);

if(likeSports==='YES'|| likeSports === 'Y' || likeSports === 'y'){
    alert('no u are wrong :P ');

}else if(likeSports === 'NO' || likeSports === 'N' || likeSports === 'n') {
    alert('yes u are right <3');
    score++;

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}
}
q1();

function q2(){
let likeFastFood =prompt('did u think i like FastFood or not ?').toUpperCase();

//console.log(likeFastFood);


if(likeFastFood==='YES' || likeFastFood === 'Y' || likeFastFood === 'y'){
    alert('yes u are so much right <3 ');
    score++;

}else if(likeFastFood === 'NO'|| likeFastFood === 'N' || likeFastFood === 'n') {
    alert('no u are wrong :( ');

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}
}
q2();

function q3(){
let likeClassicClothes = prompt('did u think i like ClassicClothes or not ?').toUpperCase();

//console.log(likeClassicClothes);

if(likeClassicClothes==='YES' || likeClassicClothes === 'Y' || likeClassicClothes === 'y'){
    alert('no u are wrong :( ');

}else if(likeClassicClothes === 'NO' ||likeClassicClothes === 'N' ||likeClassicClothes === 'n') {
    alert('yes u are right <3 ');
    score++;

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}
}
q3();

function q4(){
let likeFruits = prompt('did u think i like Fruits or not ?').toUpperCase();

//console.log(likeFruits);

if(likeFruits==='YES' || likeFruits === 'Y' || likeFruits === 'y'){
    alert('yes u are right <3 ');
    score++;

}else if(likeFruits === 'NO' || likeFruits === 'N' || likeFruits === 'n') {
    alert('no u are wrong :( ');

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}
}
q4();

function q5(){

let stayingAtHome = prompt('did u think i like staying at home or not ?').toUpperCase();

//console.log(stayingAtHome);

if(stayingAtHome==='YES' || stayingAtHome === 'Y' || stayingAtHome === 'y'){
    alert(' no u are wrong :() ');
    

}else if(stayingAtHome === 'NO' || stayingAtHome === 'N' || stayingAtHome === 'n') {
    alert('yes u are right <3 ');
    score++;

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}
}
q5();









// let correctNumber = prompt('Guess the number of my favorite Movie from 1-10 ?');
// correctNumber = Number(correctNumber);
// console.log(correctNumber);
function q6(){
for(  let i=1 ; i<5; i++){

    let correctNumber = prompt('Guess the number of my favorite Movie from 1-10 ?');
     correctNumber = Number(correctNumber);
     console.log(correctNumber);

        if(correctNumber == 8){
        alert('Great Thats it !')
        score++;
    break;

    }

    else if( correctNumber >= 5 && correctNumber < 8  ){
       alert('Too close, Guess again');
    }
    else if( correctNumber >=1 && correctNumber <5 ){
        alert('too Low, Guess again');
        
    }
    else if( correctNumber >= 9 && correctNumber <= 10){

        alert('too high, Guess again');
    }

    if(i===4){

      alert('u are miss all your chances, the correct answer is 8 :(');
      break;
}}
}
q6();






let favoriteMeal = ['mansaf', 'pizza', 'burger', 'zinger'];
let flag = false;

for ( let i = 0 ; i < 5 ; i++){

    let correctAnswer = prompt('Guess My favorite Meal !').toLowerCase();
    console.log(correctAnswer);

    for(let j = 0 ; j <favoriteMeal.length ; j++){
        if(favoriteMeal[j] == correctAnswer ){
            
            alert('Great, thats it !');
            alert('here is the correct answers :' + favoriteMeal)
            flag = true;
            score++;
            
         }}

    if(flag === true){
        //alert('here is the correct answers :' + favoriteMeal);
        break;
    }
   if(i===4){
       alert('here is the correct answers :' + favoriteMeal)
   }
   else if(i < 5) {
       alert('Wrong');
   }
 }



// let str = " ";
// for(let i=0 ; i < favoriteMeal.length ; i++){
//     str = str + " , " + favoriteMeal[i];
// }

// alert('that is my all favorite meal : ' + str);

alert('your score is :' + score +'/7');

alert('Thanks again for visiting i hope u enjoyed so much with the guessing game, u are most welcomed to visit again ' + " " + userName);