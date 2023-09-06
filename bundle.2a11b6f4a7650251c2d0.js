/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/features/fetchAllArticlesForSlider.js":
/*!***********************************************************!*\
  !*** ./src/scripts/features/fetchAllArticlesForSlider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_sliderArticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants/sliderArticles */ "./src/scripts/utils/constants/sliderArticles.js");

var slider = document.querySelector('.section-overview__slider-wrapper');
var fetchAllArticles = function fetchAllArticles() {
  _utils_constants_sliderArticles__WEBPACK_IMPORTED_MODULE_0__.sliderArticles.map(function (article) {
    var articleTag = document.createElement('article');
    articleTag.setAttribute('class', 'slider__article');
    var imgTag = document.createElement('img');
    imgTag.setAttribute('src', 'desk_icon.png');
    imgTag.setAttribute('alt', 'article desk icon');
    imgTag.setAttribute('class', 'slider__article-image');
    var h3Tag = document.createElement('h3');
    h3Tag.setAttribute('class', 'slider__article-headline');
    h3Tag.innerText = article.headline;
    var pTag = document.createElement('p');
    pTag.setAttribute('class', 'slider__article-description');
    pTag.innerText = article.description;
    articleTag.appendChild(imgTag);
    articleTag.appendChild(h3Tag);
    articleTag.appendChild(pTag);
    slider.appendChild(articleTag);
  });
};
fetchAllArticles();

/***/ }),

/***/ "./src/scripts/features/openMobileMenu.js":
/*!************************************************!*\
  !*** ./src/scripts/features/openMobileMenu.js ***!
  \************************************************/
/***/ (() => {

var mobileMenu = document.querySelector('.mobile-menu');
var hamburger = document.querySelector('.hamburger');
var hamburgerFirstSpan = document.querySelector('.hamburger__first-span');
var hamburgerSecondSpan = document.querySelector('.hamburger__second-span');
var hamburgerThirdSpan = document.querySelector('.hamburger__third-span');
var isMobileMenuOpen = false;
hamburger.addEventListener('click', function () {
  return handleOpenMobileMenu();
});
var handleOpenMobileMenu = function handleOpenMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  isMobileMenuOpen ? openMobileMenu() : closeMobileMenu();
};
var openMobileMenu = function openMobileMenu() {
  animateHamburger();
  hamburger.classList.add('hamburger--active');
  mobileMenu.classList.add('mobile-menu--open');
};
var closeMobileMenu = function closeMobileMenu() {
  animateHamburger();
  hamburger.classList.remove('hamburger--active');
  mobileMenu.classList.remove('mobile-menu--open');
};
var animateHamburger = function animateHamburger() {
  if (isMobileMenuOpen) {
    hamburgerFirstSpan.style.transform = 'rotate(45deg) translateY(8px) translateX(3px)';
    hamburgerSecondSpan.style.opacity = '0';
    hamburgerThirdSpan.style.transform = 'rotate(-45deg) translateY(-8px) translateX(3px)';
  } else {
    hamburgerFirstSpan.style.transform = 'rotate(0deg) translateY(0px)';
    hamburgerSecondSpan.style.opacity = '1';
    hamburgerThirdSpan.style.transform = 'rotate(0deg) translateY(0px)';
  }
};

/***/ }),

/***/ "./src/scripts/features/scrollToSelectedSection.js":
/*!*********************************************************!*\
  !*** ./src/scripts/features/scrollToSelectedSection.js ***!
  \*********************************************************/
/***/ (() => {

var bottomMenuItems = document.querySelectorAll('.bottom-header__menu-list-item');
var navLinks = document.querySelectorAll('.bottom-header__menu-list-item a');

// set 'overview' section as initial selected
bottomMenuItems[0].classList.add('bottom-header__menu-list-item--active');
bottomMenuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function (e) {
    return toggleActiveClass(e);
  });
});
var toggleActiveClass = function toggleActiveClass(e) {
  bottomMenuItems.forEach(function (item) {
    item.classList.remove('bottom-header__menu-list-item--active');
  });
  e.target.classList.add('bottom-header__menu-list-item--active');
};
navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    var targetId = link.getAttribute('href').substring(1);
    var targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollIntoView({
        top: targetSection.offsetTop
      });
    }
  });
});

/***/ }),

/***/ "./src/scripts/features/selectPageLang.js":
/*!************************************************!*\
  !*** ./src/scripts/features/selectPageLang.js ***!
  \************************************************/
/***/ (() => {

var isSelectPageLangOpen = false;
var selectLanguageBtn = document.querySelector('#selectLanguageBtn');
var selectLanguageBar = document.querySelector('.select-lang-bar');
selectLanguageBtn.addEventListener('click', function () {
  return handleOpenSelectPageLang();
});
var handleOpenSelectPageLang = function handleOpenSelectPageLang() {
  isSelectPageLangOpen = !isSelectPageLangOpen;
  isSelectPageLangOpen ? showSelectLangBar() : closeSelectLangBar();
};
var showSelectLangBar = function showSelectLangBar() {
  selectLanguageBar.classList.add('select-lang-bar--open');
};
var closeSelectLangBar = function closeSelectLangBar() {
  selectLanguageBar.classList.remove('select-lang-bar--open');
};

/***/ }),

/***/ "./src/scripts/utils/constants/sliderArticles.js":
/*!*******************************************************!*\
  !*** ./src/scripts/utils/constants/sliderArticles.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderArticles: () => (/* binding */ sliderArticles)
/* harmony export */ });
var sliderArticles = [{
  headline: 'Use your time and space smarter',
  description: 'Never again run out of coffee or other supplies. Create an efficient hive for yout busy bees.'
}, {
  headline: 'Never stress about me',
  description: 'Zonifero will measure how you use the rooms so that you always have enough rooms available'
}, {
  headline: 'Use your time and space smarter',
  description: 'Never again run out of coffee or other supplies. Create an efficient hive for yout busy bees.'
}, {
  headline: 'Never stress about me',
  description: 'Zonifero will measure how you use the rooms so that you always have enough rooms available'
}, {
  headline: 'Use your time and space smarter',
  description: 'Never again run out of coffee or other supplies. Create an efficient hive for yout busy bees.'
}, {
  headline: 'Use your time and space smarter',
  description: 'Never again run out of coffee or other supplies. Create an efficient hive for yout busy bees.'
}, {
  headline: 'Never stress about me',
  description: 'Zonifero will measure how you use the rooms so that you always have enough rooms available'
}, {
  headline: 'Use your time and space smarter',
  description: 'Never again run out of coffee or other supplies. Create an efficient hive for yout busy bees.'
}, {
  headline: 'Never stress about me',
  description: 'Zonifero will measure how you use the rooms so that you always have enough rooms available'
}, {
  headline: 'Use your time and space smarter',
  description: 'Never again run out of coffee or other supplies. Create an efficient hive for yout busy bees.'
}, {
  headline: 'Use your time and space smarter',
  description: 'Never again run out of coffee or other supplies. Create an efficient hive for yout busy bees.'
}, {
  headline: 'Never stress about me',
  description: 'Zonifero will measure how you use the rooms so that you always have enough rooms available'
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

img,
picture,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

.upper-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  padding-left: 40px;
}
.upper-header__logo-container {
  padding-top: 40px;
}
.upper-header__menu-container {
  display: flex;
  width: 60%;
}
.upper-header__menu-list {
  display: flex;
  align-self: end;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 60%;
  list-style: none;
}
.upper-header__menu-list-item {
  width: fit-content;
  height: fit-content;
  justify-content: center;
  justify-items: center;
}
.upper-header__menu-list-item:hover {
  cursor: pointer;
}
.upper-header__get-app-button {
  width: 400px;
  padding: 20px 100px 2px 0;
  border: none;
  background-color: #3146ff;
  color: #ffffff;
}
.upper-header__get-app-button:hover {
  cursor: pointer;
  opacity: 0.9;
}

#selectLanguageBtn {
  position: relative;
}
#selectLanguageBtn:hover {
  cursor: pointer;
}

.select-lang-bar {
  position: absolute;
  top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 50px;
  opacity: 0;
  cursor: default;
  transition: all 0.1s ease;
}
.select-lang-bar--open {
  opacity: 1;
}

.lang-option {
  cursor: pointer;
}
.lang-option--selected {
  font-weight: 600;
}

.icons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.signin-button {
  font-weight: 700;
}

.bottom-header {
  height: 50%;
}
.bottom-header__menu-container {
  display: flex;
  height: 100%;
}
.bottom-header__manu-description {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 18%;
}
.bottom-header__menu-list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 100%;
  margin-left: 3%;
  list-style-type: none;
}
.bottom-header__menu-list-item {
  position: relative;
  height: fit-content;
  padding: 4px;
  text-decoration: none;
}
.bottom-header__menu-list-item:hover {
  cursor: pointer;
}
.bottom-header__menu-list-item::after {
  content: "";
  position: absolute;
  left: 6px;
  bottom: 0;
  height: 4px;
  width: 0;
  background: #01ffcb;
  transition: all 0.2s ease-in-out;
}
.bottom-header__menu-list-item:hover::after {
  width: 40%;
}
.bottom-header__menu-list-item--active {
  position: relative;
  font-size: 17px;
  font-weight: 700;
  color: #000000;
  transition: none;
}
.bottom-header__menu-list-item--active::after {
  content: "";
  position: absolute;
  left: 6px;
  bottom: 0;
  height: 4px;
  width: 40%;
  background: #01ffcb;
}

.hamburger {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 30px;
  height: 30px;
  outline: none;
}
.hamburger:hover {
  cursor: pointer;
}
.hamburger__inner-span {
  width: 90%;
  height: 2px;
  background: #3146ff;
  transition: all 0.1s ease-in-out;
}

.mobile-menu {
  position: absolute;
  top: 0;
  left: 100vw;
  width: 100%;
  height: calc(100vh - 100%);
  margin-top: 100px;
  background: rgba(0, 0, 0, 0.9);
  transition: all 0.2s ease-in-out;
  z-index: -1;
}
.mobile-menu__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  list-style-type: none;
}
.mobile-menu__list-item {
  padding: 10px;
}
.mobile-menu__list-link {
  text-decoration: none;
  color: #fff;
  font-size: 40px;
}

.mobile-menu--open {
  top: 0;
  left: 0;
}

.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.mobile-header__dropdown-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.header {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 200px;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  z-index: 99;
}

.section-overview {
  padding-left: 18%;
  padding-bottom: 120px;
  background: #f7f7f7;
}
.section-overview__hero {
  display: flex;
  justify-content: space-between;
  min-height: 100%;
}
.section-overview__hero-left-side {
  width: 36%;
}
.section-overview__hero-headline {
  margin-top: 170px;
  color: #3146ff;
  font-family: "Poppins", sans-serif;
  font-size: 70px;
  font-weight: 700;
  line-height: 80px;
  word-wrap: normal;
}
.section-overview__hero-description {
  margin-top: 50px;
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
}
.section-overview__hero-icons-container {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}
.section-overview__hero-right-side {
  width: calc(100vw - 60%);
  height: 80vh;
  position: relative;
  overflow: hidden;
}
.section-overview__cards-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 80%;
  height: 100%;
}
.section-overview__slider-wrapper {
  position: relative;
  display: flex;
  gap: 20px;
  margin-top: 80px;
  width: 100%;
  box-sizing: content-box;
  overflow-x: auto;
  flex-shrink: 0;
}
.section-overview__slider-wrapper::-webkit-scrollbar {
  background: #f7f7f7;
  width: 4px;
  border-radius: 10px;
}
.section-overview__slider-wrapper::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.section-overview__slider-headline {
  position: absolute;
  top: -50px;
  font-size: 17px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
}

.hand-image {
  position: absolute;
  width: 30vw;
  bottom: -100px;
  right: 20%;
  z-index: 2;
}

.desks-image {
  position: absolute;
  width: 40vw;
  bottom: 50px;
  right: 70px;
  z-index: 1;
}

.article {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 315px;
  padding-right: 20px;
  text-align: left;
}
.article__headline {
  font-size: 30px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 40px;
}
.article__content {
  margin-top: 40px;
  font-size: 17px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  line-height: 25px;
}

.slider__article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: #fff;
  width: 310px;
  height: 500px;
  padding: 60px;
  flex-shrink: 0;
}
.slider__article-image {
  width: 85%;
  object-fit: fill;
}
.slider__article-headline {
  font-size: 19px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 26px;
  overflow-wrap: break-word;
}
.slider__article-description {
  font-size: 17px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  line-height: 25px;
  overflow-wrap: break-word;
}

@media screen and (max-width: 1000px) {
  .section-overview {
    padding-left: 5%;
    padding-right: 5%;
  }
  .section-overview__hero {
    flex-direction: column;
  }
  .section-overview__hero-headline {
    margin-top: 20px;
    word-wrap: break-word;
    font-size: 60px;
  }
  .section-overview__hero-description {
    position: absolute;
    top: 1000px;
  }
  .section-overview__hero-left-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 1200px;
    margin-top: 50px;
  }
  .section-overview__hero-right-side {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 500px;
  }
  .section-overview__hero-icons-container {
    justify-content: center;
    gap: 40px;
  }
  .section-overview__hero-icons-container img {
    width: 40vw;
    max-width: 200px;
  }
  .section-overview__cards-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
  }
  .article {
    width: 100%;
    max-width: 440px;
    height: 200px;
    min-height: 100%;
  }
  .hand-image {
    position: absolute;
    width: clamp(100px, 70vw, 400px);
    bottom: -10%;
    left: 15%;
    z-index: 2;
  }
  .desks-image {
    position: absolute;
    width: clamp(100px, 90vw, 600px);
    bottom: 50px;
    left: 5%;
    z-index: 1;
  }
}
@media screen and (max-width: 500px) {
  .section-overview__hero-headline {
    margin-top: 0;
    font-size: 40px;
    line-height: 40px;
  }
  .section-overview__hero-description {
    position: absolute;
    top: 700px;
    font-size: 28px;
    line-height: 36px;
  }
  .section-overview__hero-right-side {
    top: 20%;
  }
  .section-overview__hero-left-side {
    height: 900px;
  }
}
.section {
  min-height: 100vh;
  scroll-margin-top: 100px;
}

@media screen and (min-width: 1000px) {
  .section {
    scroll-margin-top: 200px;
  }
}
.main {
  width: 100vw;
  height: 100%;
  background: #fff;
}

.page_wrapper {
  min-height: 100vh;
  background-color: #f7f7f7;
  overflow-x: hidden;
}

.scrollToSectionLink {
  text-decoration: none;
}

@media screen and (max-width: 1000px) {
  .upper-header,
  .bottom-header {
    display: none;
  }
  .header {
    height: 100px;
  }
  .main {
    margin-top: 100px;
  }
}
@media screen and (min-width: 1000px) {
  .mobile-header {
    display: none;
  }
  .main {
    margin-top: 200px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/_reset.scss","webpack://./src/styles/index.scss","webpack://./src/styles/components/header/_upper-header.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_typography.scss","webpack://./src/styles/components/header/_bottom-header.scss","webpack://./src/styles/components/header/mobileHeader/_hamburger.scss","webpack://./src/styles/components/header/mobileHeader/_mobile-menu.scss","webpack://./src/styles/components/header/mobileHeader/_mobile-header.scss","webpack://./src/styles/components/header/index.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/components/content/sections/_overview-section.scss","webpack://./src/styles/components/content/sections/index.scss","webpack://./src/styles/components/content/index.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n","@import 'reset';\r\n@import 'fonts';\r\n@import 'variables';\r\n@import 'typography';\r\n\r\n// components\r\n@import './components/header';\r\n@import './components/content';\r\n\r\n.page_wrapper {\r\n  min-height: 100vh;\r\n  background-color: $background_color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.scrollToSectionLink {\r\n  text-decoration: none;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .upper-header,\r\n  .bottom-header {\r\n    display: none;\r\n  }\r\n\r\n  .header {\r\n    height: 100px;\r\n  }\r\n  .main {\r\n    margin-top: 100px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .mobile-header {\r\n    display: none;\r\n  }\r\n  .main {\r\n    margin-top: 200px;\r\n  }\r\n}\r\n",".upper-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 50%;\r\n  padding-left: 40px;\r\n\r\n  &__logo-container {\r\n    padding-top: 40px;\r\n  }\r\n\r\n  &__menu-container {\r\n    display: flex;\r\n    width: 60%;\r\n  }\r\n\r\n  &__menu-list {\r\n    display: flex;\r\n    align-self: end;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    height: 60%;\r\n    list-style: none;\r\n  }\r\n\r\n  &__menu-list-item {\r\n    width: fit-content;\r\n    height: fit-content;\r\n    justify-content: center;\r\n    justify-items: center;\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  &__get-app-button {\r\n    width: 400px;\r\n    padding: 20px 100px 2px 0;\r\n    border: none;\r\n    background-color: $primary_color;\r\n    color: $white;\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n      opacity: 0.9;\r\n    }\r\n  }\r\n}\r\n\r\n#selectLanguageBtn {\r\n  position: relative;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.select-lang-bar {\r\n  position: absolute;\r\n  top: 35px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100px;\r\n  height: 50px;\r\n  opacity: 0;\r\n  cursor: default;\r\n  transition: all 0.1s ease;\r\n\r\n  &--open {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.lang-option {\r\n  cursor: pointer;\r\n\r\n  &--selected {\r\n    font-weight: 600;\r\n  }\r\n}\r\n\r\n.icons-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n\r\n.signin-button {\r\n  font-weight: $font_bold;\r\n}\r\n","$primary_color: #3146ff;\r\n$secondary_color: #01ffcb;\r\n$primary_text_color: #000000;\r\n$background_color: #f7f7f7;\r\n$white: #ffffff;\r\n","$font_bold: 700;\r\n$font_regular: 400;\r\n$font_light: 300;\r\n\r\n$font_xl: 70px;\r\n$font_l: 30px;\r\n$font_m: 19px;\r\n$font_s: 17px;\r\n\r\n$line_height_xl: 80px;\r\n$line_height_m: 40px;\r\n$line_height_s: 26px;\r\n$line_height_xs: 25px;\r\n",".bottom-header {\r\n  height: 50%;\r\n\r\n  &__menu-container {\r\n    display: flex;\r\n    height: 100%;\r\n  }\r\n\r\n  &__manu-description {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    margin-left: 18%;\r\n  }\r\n\r\n  &__menu-list {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: 100%;\r\n    margin-left: 3%;\r\n    list-style-type: none;\r\n  }\r\n\r\n  &__menu-list-item {\r\n    position: relative;\r\n    height: fit-content;\r\n    padding: 4px;\r\n    text-decoration: none;\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n\r\n    &::after {\r\n      content: '';\r\n      position: absolute;\r\n      left: 6px;\r\n      bottom: 0;\r\n      height: 4px;\r\n      width: 0;\r\n      background: $secondary_color;\r\n      transition: all 0.2s ease-in-out;\r\n    }\r\n\r\n    &:hover::after {\r\n      width: 40%;\r\n    }\r\n\r\n    &--active {\r\n      position: relative;\r\n      font-size: $font_s;\r\n      font-weight: $font_bold;\r\n      color: $primary_text_color;\r\n      transition: none;\r\n\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        left: 6px;\r\n        bottom: 0;\r\n        height: 4px;\r\n        width: 40%;\r\n        background: $secondary_color;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".hamburger {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 30px;\r\n  height: 30px;\r\n  outline: none;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  &__inner-span {\r\n    width: 90%;\r\n    height: 2px;\r\n    background: $primary_color;\r\n    transition: all 0.1s ease-in-out;\r\n  }\r\n}\r\n",".mobile-menu {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 100vw;\r\n  width: 100%;\r\n  height: calc(100vh - 100%);\r\n  margin-top: 100px;\r\n  background: rgba(0, 0, 0, 0.9);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: -1;\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    height: 100%;\r\n    list-style-type: none;\r\n\r\n    &-item {\r\n      padding: 10px;\r\n    }\r\n\r\n    &-link {\r\n      text-decoration: none;\r\n      color: #fff;\r\n      font-size: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n.mobile-menu--open {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n","@import 'hamburger';\r\n@import 'mobile-menu';\r\n\r\n.mobile-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  &__dropdown-menu {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 6px;\r\n  }\r\n}\r\n","@import 'upper-header';\r\n@import 'bottom-header';\r\n@import './mobileHeader/mobile-header';\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100vw;\r\n  height: 200px;\r\n  background-color: $white;\r\n  font-family: $secondary_font_family;\r\n  font-weight: $font_regular;\r\n  z-index: 99;\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300;400;700&display=swap');\r\n\r\n$primary_font_family: 'Poppins', sans-serif;\r\n$secondary_font_family: 'Roboto', sans-serif;\r\n",".section-overview {\r\n  padding-left: 18%;\r\n  padding-bottom: 120px;\r\n  background: $background_color;\r\n  &__hero {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    min-height: 100%;\r\n    &-left-side {\r\n      width: 36%;\r\n    }\r\n    &-headline {\r\n      margin-top: 170px;\r\n      color: $primary_color;\r\n      font-family: $primary_font_family;\r\n      font-size: $font_xl;\r\n      font-weight: $font_bold;\r\n      line-height: $line_height_xl;\r\n      word-wrap: normal;\r\n    }\r\n    &-description {\r\n      margin-top: 50px;\r\n      color: #000;\r\n      font-family: $secondary_font_family;\r\n      font-size: $font_l;\r\n      font-weight: $font_regular;\r\n      line-height: $line_height_m;\r\n    }\r\n    &-icons-container {\r\n      display: flex;\r\n      gap: 20px;\r\n      margin-top: 40px;\r\n    }\r\n    &-right-side {\r\n      width: calc(100vw - 60%);\r\n      height: 80vh;\r\n      position: relative;\r\n      overflow: hidden;\r\n    }\r\n  }\r\n  &__cards-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 40px;\r\n    width: 80%;\r\n    height: 100%;\r\n  }\r\n  &__slider-wrapper {\r\n    position: relative;\r\n    display: flex;\r\n    gap: 20px;\r\n    margin-top: 80px;\r\n    width: 100%;\r\n    box-sizing: content-box;\r\n    overflow-x: auto;\r\n    flex-shrink: 0;\r\n\r\n    &::-webkit-scrollbar {\r\n      background: $background_color;\r\n      width: 4px;\r\n      border-radius: 10px;\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: rgba(0, 0, 0, 0.2);\r\n      border-radius: 10px;\r\n    }\r\n  }\r\n  &__slider-headline {\r\n    position: absolute;\r\n    top: -50px;\r\n    font-size: $font_s;\r\n    font-weight: $font_regular;\r\n    font-family: $secondary_font_family;\r\n  }\r\n}\r\n\r\n.hand-image {\r\n  position: absolute;\r\n  width: 30vw;\r\n  bottom: -100px;\r\n  right: 20%;\r\n  z-index: 2;\r\n}\r\n\r\n.desks-image {\r\n  position: absolute;\r\n  width: 40vw;\r\n  bottom: 50px;\r\n  right: 70px;\r\n  z-index: 1;\r\n}\r\n\r\n.article {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 300px;\r\n  width: 315px;\r\n  padding-right: 20px;\r\n  text-align: left;\r\n\r\n  &__headline {\r\n    font-size: $font_l;\r\n    font-weight: $font_bold;\r\n    font-family: $primary_font_family;\r\n    line-height: $line_height_m;\r\n  }\r\n\r\n  &__content {\r\n    margin-top: 40px;\r\n    font-size: $font_s;\r\n    font-weight: $font_light;\r\n    font-family: $secondary_font_family;\r\n    line-height: $line_height_xs;\r\n  }\r\n}\r\n\r\n.slider {\r\n  &__article {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 20px;\r\n    background: #fff;\r\n    width: 310px;\r\n    height: 500px;\r\n    padding: 60px;\r\n    flex-shrink: 0;\r\n    &-image {\r\n      width: 85%;\r\n      object-fit: fill;\r\n    }\r\n    &-headline {\r\n      font-size: $font_m;\r\n      font-weight: $font_bold;\r\n      font-family: $primary_font_family;\r\n      line-height: $line_height_s;\r\n      overflow-wrap: break-word;\r\n    }\r\n    &-description {\r\n      font-size: $font_s;\r\n      font-weight: $font_light;\r\n      font-family: $secondary_font_family;\r\n      line-height: $line_height_xs;\r\n      overflow-wrap: break-word;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .section-overview {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    &__hero {\r\n      flex-direction: column;\r\n\r\n      &-headline {\r\n        margin-top: 20px;\r\n        word-wrap: break-word;\r\n        font-size: 60px;\r\n      }\r\n\r\n      &-description {\r\n        position: absolute;\r\n        top: 1000px;\r\n      }\r\n\r\n      &-left-side {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        width: 100%;\r\n        height: 1200px;\r\n        margin-top: 50px;\r\n      }\r\n      &-right-side {\r\n        position: absolute;\r\n        top: 50%;\r\n        width: 100%;\r\n        height: 500px;\r\n      }\r\n      &-icons-container {\r\n        justify-content: center;\r\n        gap: 40px;\r\n\r\n        & img {\r\n          width: 40vw;\r\n          max-width: 200px;\r\n        }\r\n      }\r\n    }\r\n    &__cards-wrapper {\r\n      flex-direction: column;\r\n      align-items: center;\r\n      gap: 20px;\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n  }\r\n\r\n  .article {\r\n    width: 100%;\r\n    max-width: 440px;\r\n    height: 200px;\r\n    min-height: 100%;\r\n  }\r\n\r\n  .hand-image {\r\n    position: absolute;\r\n    width: clamp(100px, 70vw, 400px);\r\n    bottom: -10%;\r\n    left: 15%;\r\n    z-index: 2;\r\n  }\r\n\r\n  .desks-image {\r\n    position: absolute;\r\n    width: clamp(100px, 90vw, 600px);\r\n    bottom: 50px;\r\n    left: 5%;\r\n    z-index: 1;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .section-overview {\r\n    &__hero {\r\n      &-headline {\r\n        margin-top: 0;\r\n        font-size: 40px;\r\n        line-height: $line_height_m;\r\n      }\r\n      &-description {\r\n        position: absolute;\r\n        top: 700px;\r\n        font-size: 28px;\r\n        line-height: 36px;\r\n      }\r\n      &-right-side {\r\n        top: 20%;\r\n      }\r\n      &-left-side {\r\n        height: 900px;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import 'overview-section';\r\n\r\n.section {\r\n  min-height: 100vh;\r\n  scroll-margin-top: 100px;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .section {\r\n    scroll-margin-top: 200px;\r\n  }\r\n}\r\n","@import 'sections';\r\n\r\n.main {\r\n  width: 100vw;\r\n  height: 100%;\r\n  background: #fff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/apple_store_badge.png":
/*!******************************************!*\
  !*** ./src/assets/apple_store_badge.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "apple_store_badge.png";

/***/ }),

/***/ "./src/assets/arrow_down_icon.svg":
/*!****************************************!*\
  !*** ./src/assets/arrow_down_icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "arrow_down_icon.svg";

/***/ }),

/***/ "./src/assets/desk_icon.png":
/*!**********************************!*\
  !*** ./src/assets/desk_icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "desk_icon.png";

/***/ }),

/***/ "./src/assets/desks.png":
/*!******************************!*\
  !*** ./src/assets/desks.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "desks.png";

/***/ }),

/***/ "./src/assets/globe.png":
/*!******************************!*\
  !*** ./src/assets/globe.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "globe.png";

/***/ }),

/***/ "./src/assets/google_store_badge.png":
/*!*******************************************!*\
  !*** ./src/assets/google_store_badge.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "google_store_badge.png";

/***/ }),

/***/ "./src/assets/hand.png":
/*!*****************************!*\
  !*** ./src/assets/hand.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "hand.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/assets/zonifero_logo.png":
/*!**************************************!*\
  !*** ./src/assets/zonifero_logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "zonifero_logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_zonifero_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/zonifero_logo.png */ "./src/assets/zonifero_logo.png");
/* harmony import */ var _assets_globe_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/globe.png */ "./src/assets/globe.png");
/* harmony import */ var _assets_arrow_down_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/arrow_down_icon.svg */ "./src/assets/arrow_down_icon.svg");
/* harmony import */ var _assets_desks_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/desks.png */ "./src/assets/desks.png");
/* harmony import */ var _assets_google_store_badge_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/google_store_badge.png */ "./src/assets/google_store_badge.png");
/* harmony import */ var _assets_apple_store_badge_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/apple_store_badge.png */ "./src/assets/apple_store_badge.png");
/* harmony import */ var _assets_hand_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/hand.png */ "./src/assets/hand.png");
/* harmony import */ var _assets_desk_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/desk_icon.png */ "./src/assets/desk_icon.png");
/* harmony import */ var _features_scrollToSelectedSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/scrollToSelectedSection */ "./src/scripts/features/scrollToSelectedSection.js");
/* harmony import */ var _features_scrollToSelectedSection__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_features_scrollToSelectedSection__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _features_openMobileMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/openMobileMenu */ "./src/scripts/features/openMobileMenu.js");
/* harmony import */ var _features_openMobileMenu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_features_openMobileMenu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _features_selectPageLang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/selectPageLang */ "./src/scripts/features/selectPageLang.js");
/* harmony import */ var _features_selectPageLang__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_features_selectPageLang__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _features_fetchAllArticlesForSlider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/fetchAllArticlesForSlider */ "./src/scripts/features/fetchAllArticlesForSlider.js");


// assets
// -  for header





// - for overview section






// features




})();

/******/ })()
;
//# sourceMappingURL=bundle.2a11b6f4a7650251c2d0.js.map