const fontSizeControl = document.querySelector('#font-size-control');
const spanChangingText = document.querySelector('#text');


fontSizeControl.addEventListener('input', onRangeValueChangeFontSize);

function onRangeValueChangeFontSize() {
    // spanChangingText.style.fontSize = this.value + 'px';
    spanChangingText.style.fontSize = `${this.value}px`
 }