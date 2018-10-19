let rl = require('readline-sync');
let name = rl.question('Whats your name?');
console.log(name);

function pickRandomChoice() {
let choices=["r", "p", "s"];
return  choices[Math.floor(Math.random() * choices.length)];
}



function userChoice() {
let user=rl.question('Please select rock, paper or scissors (r, p, s)');
while(user !=='r' && user !=='p' && user !=='s') {
  user=rl.question('Please select a valid answer (r,p,s)');
}
return user
}

function resolve(computer, user) {
if(computer === user) {
  console.log('Draw!')
}
else if(user === 'r' && computer === 'p' || user === 's' && computer === 'r' || user ==='p' && computer==='s'){
  console.log('You suck!', `Computer: ${computer}, User: ${user}`)
}else{
  console.log('You rock', `Computer: ${computer}, User: ${user}`)
}
}

function game() {
  let playAgain=true;
  while(playAgain) {
    let computer = pickRandomChoice();
    let user=userChoice();
    resolve(computer, user);
    playAgain=rl.question('Play again? (y)').toLowerCase() === 'y'? true : false;
  }
  console.log('Goodbye!')
  
}

game();


console.log(computer, user);
