const trigger = document.querySelector('.trigger');

trigger.addEventListener('click', (e) => {
  e.target.classList.toggle('clicked');
})