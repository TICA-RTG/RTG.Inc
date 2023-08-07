
const score = JSON.parse(localStorage.getItem('score')) || {
  win:0,
  lose:0,
  tie:0
};



function computerPlay() {
  const randomNumber = Math.random();
  let computerMove= '';

if (randomNumber >= 0 && randomNumber < 0.3) {
  computerMove = 'rock';
}

else if (randomNumber > 0.3 && randomNumber < 0.6) {
  computerMove = 'paper';
}

else if (randomNumber > 0.6 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}



function playGame(choice) {
  const computerMove = computerPlay();
  let result = '';
  

  if (choice === 'rock'){
    if (computerMove === 'rock') {
      result = 'its a tie';
    }

    else if (computerMove === 'paper') {
      result = 'you lose';
    }

    else if (computerMove === 'scissors') {        result = 'you win';
   }

  }

 else if (choice ==='paper') {
    if (computerMove === 'rock'){
      result = 'you win';
    }

    else if (computerMove === 'paper') {
      result = 'its a tie';
    }

    else if (computerMove ==='scissors') {
      result = 'you lose';
    }

  }

 else if (choice === 'scissors') {
    if (computerMove === 'rock'){
    result = 'you win';
  }

  else if (computerMove === 'paper') {
    result = 'you lose';
  }

  else if (computerMove === 'scissors') {
    result = 'its a tie';
  }

  }


  if (result === 'you win'){
    score.win ++;
  }
  else if (result === 'you lose'){
    score.lose ++;
  }
  else if (result === 'its a tie'){
    score.tie +=1;
  }

    localStorage.setItem('score', JSON.stringify(score));
  
    alert(`you selected ${choice} and the house selected ${computerMove} so ${result}!
${score.win}, ${score.lose}, ${score.tie}`);

}

function resetGame(){
localStorage.removeItem('score');

score.win = 0;
score.lose = 0;
score.tie =0;

alert('score has been reset!')
}


