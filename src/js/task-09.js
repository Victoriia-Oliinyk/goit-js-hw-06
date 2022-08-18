const changeColorBtnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtnRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  colorRef.textContent = color;
}