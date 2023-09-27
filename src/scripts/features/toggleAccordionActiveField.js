const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach((item) => {
  item.addEventListener('click', (e) => toggleActiveClass(e));
});

const toggleActiveClass = (e) => {
  const clickedItem = e.target.closest('.accordion__item');

  if (
    clickedItem &&
    clickedItem.classList.contains('accordion__item--active')
  ) {
    clickedItem.classList.remove('accordion__item--active');
  } else {
    clickedItem.classList.add('accordion__item--active');
  }
};
