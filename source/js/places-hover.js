const hoverTemplate = document.querySelector('#places-hover').content;
const itemHover = hoverTemplate.querySelector('.places__hover');
const items = document.querySelectorAll('.places__item');
const hoverButton = document.querySelector('.places__button');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseenter', () => {
    items[i].appendChild(itemHover.cloneNode(true));
    let id = items[i].dataset.id;
    items[i].querySelector('.places__hover').setAttribute('data-id', id);
    items[i].querySelector('.places__hover').setAttribute('href', id);
  })
  items[i].addEventListener('mouseleave', () => {
    items[i].querySelector('.places__hover').removeAttribute('data-id');
    items[i].querySelector('.places__hover').removeAttribute('href');
    items[i].removeChild(document.querySelector('.places__hover'));
  })
}
