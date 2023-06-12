const refs = {
    inputContent: document.querySelector('#name-input'),
    titleSpanContent: document.querySelector('#name-output'),
}

refs.inputContent.addEventListener('input', onInputType);

function onInputType(event) {
    console.log(event.currentTarget.value);
    refs.titleSpanContent.textContent = event.currentTarget.value;
    if (refs.titleSpanContent.textContent === '') {
        refs.titleSpanContent.textContent = 'Anonymous';
    }
}