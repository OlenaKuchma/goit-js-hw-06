const selectors = {
    fontSizeControl: document.querySelector('#font-size-control'),
textElement: document.querySelector('#text')};

selectors.fontSizeControl.addEventListener('input', () => {
  const fontSize = selectors.fontSizeControl.value;
  selectors.textElement.style.fontSize = `${fontSize}px`;
});