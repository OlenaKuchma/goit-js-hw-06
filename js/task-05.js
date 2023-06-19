
const selectors = {
input: document.querySelector('#name-input'),
span: document.querySelector('#name-output')
}


selectors.input.addEventListener("input", (event) => {
    
    if (selectors.span.textContent = !event.currentTarget.value) {
        selectors.span.textContent = "Anonymous!";
    } else {
        selectors.span.textContent = event.currentTarget.value;
    }
    
  });