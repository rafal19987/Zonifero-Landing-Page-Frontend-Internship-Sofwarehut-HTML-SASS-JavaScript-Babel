const bottomMenuItems = document.querySelectorAll(
  '.bottom-header__menu-list-item'
);
const navLinks = document.querySelectorAll('.bottom-header__menu-list-item a');

// set 'overview' section as initial selected
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

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollIntoView({
        top: targetSection.offsetTop,
      });
    }
  });
});
