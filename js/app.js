'use strict';


let userName = prompt('What is your name ?');
console.log(userName);
alert('Thank u for visiting my website, i hope u will have much fun' + " " + userName);

let likeSports = prompt('did u think i like sport or not ?').toUpperCase();

console.log(likeSports);

if(likeSports==='YES'|| likeSports === 'Y' || likeSports === 'y'){
    alert('no u are wrong :P ');

}else if(likeSports === 'NO' || likeSports === 'N' || likeSports === 'n') {
    alert('yes u are right <3');

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}


let likeFastFood =prompt('did u think i like FastFood or not ?').toUpperCase();

console.log(likeFastFood);


if(likeFastFood==='YES' || likeFastFood === 'Y' || likeFastFood === 'y'){
    alert('yes u are so much right <3 ');

}else if(likeFastFood === 'NO'|| likeFastFood === 'N' || likeFastFood === 'n') {
    alert('no u are wrong :( ');

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}

let likeClassicClothes = prompt('did u think i like ClassicClothes or not ?').toUpperCase();

console.log(likeClassicClothes);

if(likeClassicClothes==='YES' || likeClassicClothes === 'Y' || likeClassicClothes === 'y'){
    alert('no u are wrong :( ');

}else if(likeClassicClothes === 'NO' ||likeClassicClothes === 'N' ||likeClassicClothes === 'n') {
    alert('yes u are right <3 ');

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}

let likeFruits = prompt('did u think i like Fruits or not ?').toUpperCase();

console.log(likeFruits);

if(likeFruits==='YES' || likeFruits === 'Y' || likeFruits === 'y'){
    alert('yes u are right <3 ');

}else if(likeFruits === 'NO' || likeFruits === 'N' || likeFruits === 'n') {
    alert('no u are wrong :( ');

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}

let stayingAtHome = prompt('did u think i like staying at home or not ?').toUpperCase();

console.log(stayingAtHome);

if(stayingAtHome==='YES' || stayingAtHome === 'Y' || stayingAtHome === 'y'){
    alert('yes u are right <3 ');

}else if(stayingAtHome === 'NO' || stayingAtHome === 'N' || stayingAtHome === 'n') {
    alert('no u are wrong :( ');

}
else{
    alert('U need to answer with YES/NO/N/n/Y/y ')
}


alert('Thanks again for visiting i hope u enjoyed so much with the guessing game, u are most welcomed to visit again ' + " " + userName);