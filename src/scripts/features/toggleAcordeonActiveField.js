const acordeonItems = document.querySelectorAll('.acordeon__item');

acordeonItems.forEach((item) => {
  item.addEventListener('click', (e) => toggleActiveClass(e));
});

const toggleActiveClass = (e) => {
  const clickedItem = e.target.closest('.acordeon__item');

  if (clickedItem && clickedItem.classList.contains('acordeon__item--active')) {
    clickedItem.classList.remove('acordeon__item--active');
  } else {
    clickedItem.classList.add('acordeon__item--active');
  }
};
