
const selectors = {
input: document.querySelector('#name-input'),
span: document.querySelector('#name-output')
}
selectors.input.addEventListener('change', handlerQuery)

function handlerQuery(evt){
    console.log(evt.currentTarget.value);
    selectors.span.textContent = evt.currentTarget.value
}
