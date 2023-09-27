const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const hamburgerFirstSpan = document.querySelector('.hamburger__first-span');
const hamburgerSecondSpan = document.querySelector('.hamburger__second-span');
const hamburgerThirdSpan = document.querySelector('.hamburger__third-span');
let isMobileMenuOpen = false;

hamburger.addEventListener('click', () => handleOpenMobileMenu());

const handleOpenMobileMenu = () => {
  isMobileMenuOpen = !isMobileMenuOpen;
  isMobileMenuOpen ? openMobileMenu() : closeMobileMenu();
};

const openMobileMenu = () => {
  animateHamburger();
  hamburger.classList.add('hamburger--active');
  mobileMenu.classList.add('mobile-menu--open');
};

const closeMobileMenu = () => {
  animateHamburger();
  hamburger.classList.remove('hamburger--active');
  mobileMenu.classList.remove('mobile-menu--open');
};

const animateHamburger = () => {
  if (isMobileMenuOpen) {
    hamburgerFirstSpan.style.transform =
      'rotate(45deg) translateY(8px) translateX(3px)';
    hamburgerSecondSpan.style.opacity = '0';
    hamburgerThirdSpan.style.transform =
      'rotate(-45deg) translateY(-8px) translateX(3px)';
  } else {
    hamburgerFirstSpan.style.transform = 'rotate(0deg) translateY(0px)';
    hamburgerSecondSpan.style.opacity = '1';
    hamburgerThirdSpan.style.transform = 'rotate(0deg) translateY(0px)';
  }
};
