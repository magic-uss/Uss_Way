const tabsList = document.querySelector('.countries__tab-list');
const items = document.querySelectorAll('.countries__item');
const itemLinks = document.querySelectorAll('.countries__tab-item-link');
const placesList = document.querySelector('.places__list');
const placesItems = document.querySelectorAll('.places__item');

const toogleTab = (tab) => {
  items.forEach((item) => {
    item.classList.remove('countries__item--current');
  })
  itemLinks.forEach((itemLink) => {
    itemLink.classList.remove('countries__tab-item-link--current');
  })
  tab.classList.add('countries__tab-item-link--current');
  document.querySelector(tab.dataset.id).classList.add('countries__item--current');
}

tabsList.addEventListener('click', (evt) => {
  toogleTab(evt.target);
})

for (let i = 0; i < placesItems.length; i++) {
  placesItems[i].addEventListener('click', (evt) => {
    let tab = document.querySelector('.countries__tab-item-link[data-id = "' + placesItems[i].dataset.id + '"]');
    toogleTab(tab);
  })
}
