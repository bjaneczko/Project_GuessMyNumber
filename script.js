'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('😥 Choose number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🔥🔥 Correct number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 To low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🛑 You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   // When guess is to high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🛑 You lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 To low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🛑 You lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // Reset all values to default
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = 20;

  document.querySelector('.guess').value = '';
});
