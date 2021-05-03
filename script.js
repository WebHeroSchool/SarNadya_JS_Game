document.querySelector('.navigation__btn').addEventListener('click', () => {

  const title = document.querySelector('.title');
  const navigation = document.querySelector('.navigation');
  const card1 = document.querySelector('.card1');
  const card2 = document.querySelector('.card2');
  title.classList.add('off');
  navigation.classList.add('off');
  card1.classList.add('off');
  card2.classList.add('off');

  const gameTable = document.createElement('div');
  gameTable.className = 'gameTable';
  document.body.append(gameTable);
  const game = document.querySelector('.gameTable');

  function getCards(a) {
    for(let i=1; i<=a; i++) {
      let div = document.createElement('div');
      div.className = 'card';
      game.appendChild(div);
    }
  }

  function getInners() {
    let cards = document.querySelectorAll('.card');
    cards.forEach(function(card, index) {
      let inner = document.createElement('div');
      inner.className = 'inner';
      card.append(inner);
    })
  }

  function openCard() {
    let cards = document.querySelectorAll('.card');
    let rand = Math.floor(Math.random() * cards.length);
    let bug = cards[rand];

    let cardFlipped = false;

    for (let i = 0; i < cards.length; i++) {
      function rotate() {
        if (cards[i] == bug) {
          cards[i].classList.add('bug');
        } else {
            cards[i].classList.add('game-over');
        }
      }

      cards[i].addEventListener('click', () => {
        if (cardFlipped == true) {
          window.location.reload();
        } else {
            rotate();
            cardFlipped = true;
        }
      })
    }
  }

  const levels = document.querySelectorAll('.navigation__radio');
  for (let i=0; i < levels.length; i++) {
    if (levels[i].checked) {
      let value = levels[i].value;

      if (value === 'простой') {
        getCards(3);
      }

      if (value === 'средний') {
        getCards(6);
      }
      
      if (value === 'сложный') {
        getCards(10);
        game.classList.add('gameTable_10');
      }

    getInners();
    openCard();
    }
  }
})
