'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions: when we load the page or new game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

// //2 ways to select id, el=element
// //Selecting elements

// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// //starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// //genetared outide function
// const scores = [0, 0]; //scores that accumulating, 0 for player 1 and 0 for player2.
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   //when switch player need to reset current score
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0; //reassign the active player, if active player is 0 then go to next player, if active player is 1 go to player 0

//   //add class if is not there or remove class if it is
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// //1--Rolling dice functionality, add a listener
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     //2--generate a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     //3--display dice
//     diceEl.classList.remove('hidden');
//     //dinamicly load one of the images of dice, template literal
//     diceEl.src = `dice-${dice}.png`;
//     //4--check for roll 1: if true, switch to next player
//     if (dice !== 1) {
//       //Add dice to current score //but if we roll 1 is next player round
//       currentScore += dice;
//       document.getElementById(
//         `current--${activePlayer}`
//       ).textContent = currentScore; //select score as the player playes , build id dynamically
//       current0El.textContent = currentScore; //Change later to be used for both players
//     } else {
//       //switch to next player, switch value
//       switchPlayer();
//     }
//   }
// });
// //hold the current score
// btnHold.addEventListener('click', function () {
//   if (playing) {
//     //1.add current score to active player's score
//     score[activePlayer] += currentScore;
//     //or scores[1] = scores[1] + currentScore;

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     //2. check if score is >=100, finish the game
//     if (scores[activePlayer] >= 20) {
//       //finish game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       //switch to next player
//       switchPlayer();
//     }
//   }
// });
// btnNew.addEventListener('click', init);
