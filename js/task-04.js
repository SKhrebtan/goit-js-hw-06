const refs = {
    decrButton: document.querySelector('[data-action="decrement"]'),
    incrButton: document.querySelector('[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
}

let counterValue = 0;

refs.incrButton.addEventListener('click', onCounterIncrement);
refs.decrButton.addEventListener('click', onCounterDecrement);

function onCounterIncrement() {
    counterValue += 1;
    refs.counterValue.innerHTML = counterValue;
}
    
function onCounterDecrement() {
    counterValue -= 1;
    refs.counterValue.innerHTML = counterValue;
}


