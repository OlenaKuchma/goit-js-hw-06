
const counterValue = document.querySelector('#value');

let value = 0;

function updateCounter() {
    counterValue.textContent = value;
  };

const decrementButton = document.querySelector('button[data-action="decrement"]');
decrementButton.addEventListener('click', hendlerClik);
function hendlerClik(evt) {
  value -= 1;
  updateCounter();
  console.log(evt);
};


const incrementButton = document.querySelector('button[data-action="increment"]');
incrementButton.addEventListener('click', hendlerClikup);
function hendlerClikup(evt) {
  value += 1;
  updateCounter();
  console.log(evt);
};











