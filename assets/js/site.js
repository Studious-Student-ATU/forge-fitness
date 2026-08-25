const tipButton = document.querySelector('#tip-button');
const tip = document.querySelector('#extra-tip');

if (tipButton && tip) {
  tipButton.addEventListener('click', () => {
    tip.classList.toggle('hidden');
  });
}
