import '../styles/main.scss';

// bottom menu select section effect
const bottomMenuItems = document.querySelectorAll(
  '.bottom-header__menu-list-item'
);

// initial selected 'Overview' section
bottomMenuItems[0].classList.add('bottom-header__menu-list-item--active');

bottomMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (e) => toggleActiveClass(e));
});

const toggleActiveClass = (e) => {
  bottomMenuItems.forEach((item) => {
    item.classList.remove('bottom-header__menu-list-item--active');
  });

  e.target.classList.add('bottom-header__menu-list-item--active');
};
