const body = document.querySelector('body');
const box = document.querySelector('.box');

function randomColorGenerator() {
  const letters = '0123456789abcdef';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

document.querySelector('html').addEventListener('click', (e) => {
  const newBox = document.createElement('div');
  newBox.classList.add('box');
  newBox.style.background = randomColorGenerator();

  body.appendChild(newBox);
});

document.querySelector('html').addEventListener('keydown', () => {
  body.classList.toggle('rotate');
});
