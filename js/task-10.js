function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('[type="number"]');
const boxContainer = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => createBoxes(inputNumber.value));
destroyButton.addEventListener('click', onInnerDelete);
 
document.addEventListener("keydown", event => {
  if (event.code === 'Enter') { createBoxes(inputNumber.value) }
  else if (event.code === 'Delete') { onInnerDelete() }
})
  
function onInnerDelete() {
  inputNumber.value = '';
  boxContainer.innerHTML = '';
}

inputNumber.addEventListener('wheel', () => {
  let counter = 0;
  counter += 1;
})

function createBoxes(amount) {
  let divElements = [];

  for (let i = 0; i < amount; i += 1){    
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divElements.push(newDiv);
  }
    return boxContainer.append(...divElements); 
}
  
boxContainer.style.display = 'flex';
boxContainer.style.alignItems = 'center';
boxContainer.style.gap = '30px';
boxContainer.style.flexWrap = 'wrap';

 


