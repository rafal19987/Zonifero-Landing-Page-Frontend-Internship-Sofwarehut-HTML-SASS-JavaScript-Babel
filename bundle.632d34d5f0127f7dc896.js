/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/AccordionItem.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/AccordionItem.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionItem: () => (/* binding */ AccordionItem)
/* harmony export */ });
/* harmony import */ var _assets_arrow_down_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/arrow_down_icon.svg */ "./src/assets/arrow_down_icon.svg");

var AccordionItem = function AccordionItem(title, details) {
  return "<li class=\"accordion__item\">\n      <h3 class=\"accordion__item-title\">".concat(title, "</h3>\n      <img src=\"").concat(_assets_arrow_down_icon_svg__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"arrow down icon\" class=\"accordion__item-arrow\" />\n      <p class=\"accordion__item-details\">").concat(details, "</p>\n    </li>");
};

/***/ }),

/***/ "./src/scripts/components/SilderItem.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/SilderItem.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderItem: () => (/* binding */ SliderItem)
/* harmony export */ });
/* harmony import */ var _assets_desk_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/desk_icon.png */ "./src/assets/desk_icon.png");

var SliderItem = function SliderItem(title, description) {
  return "<article class=\"slider__article\">\n    <img src=\"".concat(_assets_desk_icon_png__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"article desk icon\" class=\"slider__article-image\" />\n    <h3 class=\"slider__article-headline\">").concat(title, "</h3>\n    <p class=\"slider__article-description\">").concat(description, "</p>\n  </article>");
};

/***/ }),

/***/ "./src/scripts/features/fetchAccordionItems.js":
/*!*****************************************************!*\
  !*** ./src/scripts/features/fetchAccordionItems.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AccordionItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AccordionItem */ "./src/scripts/components/AccordionItem.js");
/* harmony import */ var _utils_constants_accordionContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants/accordionContent */ "./src/scripts/utils/constants/accordionContent.js");


var accordion = document.querySelector('.first-segment__accordion');
var fetchAccordionItems = function fetchAccordionItems() {
  var HTMLfragment = [];
  _utils_constants_accordionContent__WEBPACK_IMPORTED_MODULE_1__.accordionContent.map(function (_ref) {
    var title = _ref.title,
      details = _ref.details;
    var newContent = (0,_components_AccordionItem__WEBPACK_IMPORTED_MODULE_0__.AccordionItem)(title, details);
    HTMLfragment.push(newContent);
  });
  var HTMLfragmentWithoutSeparatingComma = HTMLfragment.join(' ');
  accordion.innerHTML = HTMLfragmentWithoutSeparatingComma;
};
fetchAccordionItems();

/***/ }),

/***/ "./src/scripts/features/fetchSliderItems.js":
/*!**************************************************!*\
  !*** ./src/scripts/features/fetchSliderItems.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SilderItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SilderItem */ "./src/scripts/components/SilderItem.js");
/* harmony import */ var _utils_constants_sliderArticles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants/sliderArticles */ "./src/scripts/utils/constants/sliderArticles.js");


var slider = document.querySelector('.section-overview__slider-wrapper');
var fetchSliderItems = function fetchSliderItems() {
  var HTMLfragment = [];
  _utils_constants_sliderArticles__WEBPACK_IMPORTED_MODULE_1__.sliderArticles.map(function (_ref) {
    var headline = _ref.headline,
      description = _ref.description;
    var newArticle = (0,_components_SilderItem__WEBPACK_IMPORTED_MODULE_0__.SliderItem)(headline, description);
    HTMLfragment.push(newArticle);
  });
  var HTMLfragmentWithoutSeparatingComma = HTMLfragment.join(' ');
  slider.innerHTML = HTMLfragmentWithoutSeparatingComma;
};
fetchSliderItems();

/***/ }),

/***/ "./src/scripts/features/formValidation.js":
/*!************************************************!*\
  !*** ./src/scripts/features/formValidation.js ***!
  \************************************************/
/***/ (() => {

var formSubmitBtn = document.querySelector('.form__submit-btn');
var firstName = document.querySelector('#firstName').value;
var familyName = document.querySelector('#familyName').value;
var email = document.querySelector('#email').value;
var phoneNumber = document.querySelector('#phoneNumber').value;
var message = document.querySelector('#message').value;
formSubmitBtn.addEventListener('click', function (e) {
  return formSubmitHandler(e);
});
var formValues = [firstName, familyName, email, phoneNumber, message];
var formSubmitHandler = function formSubmitHandler(e) {
  e.preventDefault();
  alert(formValues.join(' ------ '));
};

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

/***/ "./src/scripts/features/toggleAccordionActiveField.js":
/*!************************************************************!*\
  !*** ./src/scripts/features/toggleAccordionActiveField.js ***!
  \************************************************************/
/***/ (() => {

var accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    return toggleActiveClass(e);
  });
});
var toggleActiveClass = function toggleActiveClass(e) {
  var clickedItem = e.target.closest('.accordion__item');
  if (clickedItem && clickedItem.classList.contains('accordion__item--active')) {
    clickedItem.classList.remove('accordion__item--active');
  } else {
    clickedItem.classList.add('accordion__item--active');
  }
};

/***/ }),

/***/ "./src/scripts/utils/constants/accordionContent.js":
/*!*********************************************************!*\
  !*** ./src/scripts/utils/constants/accordionContent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accordionContent: () => (/* binding */ accordionContent)
/* harmony export */ });
var accordionContent = [{
  title: 'Hot-desk booking',
  details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea iure neque libero iusto quibusdam, autem'
}, {
  title: 'Satus of employees',
  details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea iure neque libero iusto quibusdam, autem'
}, {
  title: 'Request management',
  details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea iure neque libero iusto quibusdam, autem'
}, {
  title: 'Hot-desk booking',
  details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea iure neque libero iusto quibusdam, autem'
}, {
  title: 'Satus of employees',
  details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea iure neque libero iusto quibusdam, autem'
}, {
  title: 'Request management',
  details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea iure neque libero iusto quibusdam, autem'
}, {
  title: 'Hot-desk booking',
  details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea iure neque libero iusto quibusdam, autem'
}, {
  title: 'Satus of employees',
  details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea iure neque libero iusto quibusdam, autem'
}, {
  title: 'Request management',
  details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea iure neque libero iusto quibusdam, autem'
}];

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
}

input,
button,
textarea,
select {
  font: inherit;
}

.mobile-hidden {
  display: none;
}
@media (min-width: 1000px) {
  .mobile-hidden {
    display: block;
  }
}

@media (min-width: 360px) and (max-width: 500px) {
  .desktop-hidden {
    display: block;
  }
}
@media (min-width: 1000px) {
  .desktop-hidden {
    display: none;
  }
}

.flex {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1000px) {
  .flex {
    flex-direction: row;
  }
}

.flex-col {
  flex-direction: column;
}

.w-full {
  width: 100%;
}

.gap {
  gap: 100px;
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
  height: fit-content;
  padding: 4px;
  text-decoration: none;
  position: relative;
  font-size: 17px;
  font-weight: 700;
  color: #000000;
  transition: none;
}
.bottom-header__menu-list-item--active:hover {
  cursor: pointer;
}
.bottom-header__menu-list-item--active::after {
  content: "";
  position: absolute;
  left: 6px;
  bottom: 0;
  height: 4px;
  width: 0;
  background: #01ffcb;
  transition: all 0.2s ease-in-out;
}
.bottom-header__menu-list-item--active:hover::after {
  width: 40%;
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
  font-size: clamp(45px, 10vw, 70px);
  font-family: "Poppins", sans-serif;
  line-height: 80px;
  margin-top: 170px;
  color: #3146ff;
  word-wrap: normal;
}
.section-overview__hero-description {
  margin-top: 50px;
  font-size: clamp(1.5rem, 2vw, 30px);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 40px;
}
.section-overview__hero-icons-container {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}
.section-overview__hero-icons-container img {
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  transform: scale(1);
}
.section-overview__hero-icons-container img:hover {
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  transform: scale(1.02);
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
  max-width: 615px;
  max-height: 827px;
  bottom: -100px;
  right: 20%;
  z-index: 2;
}

.desks-image {
  position: absolute;
  bottom: 50px;
  right: 70px;
  width: 40vw;
  max-width: 830px;
  max-height: 516px;
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
.section-features {
  position: relative;
  width: 100vw;
  height: 100%;
}
.section-features__top-backgound {
  position: relative;
  width: 100vw;
  height: 450px;
}
.section-features__top-backgound img {
  object-fit: cover;
  width: 100%;
  height: 500px;
}
.section-features__phone-image-container {
  position: absolute;
  top: 0;
  right: 19%;
}
@media (min-width: 360px) and (max-width: 500px) {
  .section-features__phone-image-container {
    display: none;
  }
}
@media (min-width: 500px) {
  .section-features__phone-image-container {
    display: none;
  }
}
@media (min-width: 1000px) {
  .section-features__phone-image-container {
    display: block;
  }
}
.section-features__navigation-buttons-container {
  position: absolute;
  top: 470px;
  bottom: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
}
@media (min-width: 500px) {
  .section-features__navigation-buttons-container {
    top: 480px;
    height: 40px;
  }
}
.section-features__navigation-left-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 100%;
  background: #fff;
}
@media (min-width: 500px) {
  .section-features__navigation-left-button {
    width: 40px;
  }
}
.section-features__navigation-left-button img {
  transform: rotate(90deg);
}
.section-features__navigation-left-button:hover {
  cursor: pointer;
}
.section-features__navigation-right-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 100%;
  background: #fff;
}
@media (min-width: 500px) {
  .section-features__navigation-right-button {
    width: 40px;
  }
}
.section-features__navigation-right-button img {
  transform: rotate(-90deg);
}
.section-features__navigation-right-button:hover {
  cursor: pointer;
}
.section-features__bottom-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  min-height: 370px;
  max-height: 100%;
  background-color: #3146ff;
}
.section-features__text-container {
  display: flex;
  justify-content: space-between;
  width: 65%;
  height: 70%;
  color: #fff;
  margin-left: 18%;
  padding-top: 100px;
}
@media (min-width: 500px) {
  .section-features__text-container {
    padding-top: 140px;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin-left: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
}
.section-features__big-text {
  width: 500px;
  height: fit-content;
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}
@media (min-width: 500px) {
  .section-features__big-text {
    width: 100%;
    font-size: 36px;
  }
}
.section-features__small-text {
  width: 600px;
  align-self: flex-end;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 25px;
}
@media (min-width: 500px) {
  .section-features__small-text {
    width: 100%;
    font-size: 16px;
  }
}
.section-features__bottom-text-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.section-features__bottom-text {
  width: 25%;
  padding: 20px;
  border-top: 2px dotted rgba(255, 255, 255, 0.2);
  text-align: center;
  color: #fff;
  text-decoration: none;
}
@media (min-width: 500px) {
  .section-features__bottom-text {
    width: 100%;
  }
}
.section-features__bottom-text:hover {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
}

.section-specs__first-segment, .section-specs__second-segment, .section-specs__third-segment, .section-specs__fourth-segment, .section-specs__fifth-segment, .section-specs__sixth-segment {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  padding-left: 20px;
  padding-right: 20px;
}
@media (min-width: 1000px) {
  .section-specs__first-segment, .section-specs__second-segment, .section-specs__third-segment, .section-specs__fourth-segment, .section-specs__fifth-segment, .section-specs__sixth-segment {
    padding-left: 16%;
    max-width: 1500px;
  }
}
@media (min-width: 1000px) {
  .section-specs__second-segment {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 17%;
  }
}
@media (min-width: 1000px) {
  .section-specs__fifth-segment {
    max-width: 100vw;
  }
}

.first-segment__flexinioo {
  display: block;
}
@media (min-width: 1000px) {
  .first-segment__flexinioo {
    display: flex;
  }
}
.first-segment__text-container {
  position: relative;
}
.first-segment__title {
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 40px;
  margin-top: 60px;
  width: 100%;
}
@media (min-width: 1000px) {
  .first-segment__title {
    padding-top: 40px;
    padding-left: 7%;
  }
}
.first-segment__description {
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 25px;
  margin-top: 30px;
  width: 100%;
}
@media (min-width: 1000px) {
  .first-segment__description {
    padding-left: 7%;
  }
}
.first-segment__image {
  position: absolute;
  left: -20px;
  top: 94%;
}
@media (min-width: 1000px) {
  .first-segment__image {
    display: none;
  }
}
.first-segment__image-desktop {
  display: none;
}
@media (min-width: 1000px) {
  .first-segment__image-desktop {
    display: block;
    min-width: 407px;
    max-height: 446px;
  }
}
.first-segment__table {
  margin-top: 40px;
  margin-left: 120px;
}
@media (min-width: 1000px) {
  .first-segment__table {
    height: fit-content;
    padding-top: 40px;
  }
}
.first-segment__accordion {
  padding-top: 178px;
  width: 100%;
  list-style-type: none;
}
@media (min-width: 1000px) {
  .first-segment__accordion {
    padding-top: 0;
  }
}

.accordion__item {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in;
}
.accordion__item:hover {
  cursor: pointer;
}
.accordion__item-title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}
@media (min-width: 1000px) {
  .accordion__item-title {
    padding-left: 3%;
  }
}
.accordion__item-arrow {
  transition: all 0.2s ease-in;
}
.accordion__item-details {
  position: absolute;
  top: 60px;
  width: 100%;
  height: 50px;
  opacity: 0;
  transition: all 0.2s ease-in;
  transform: translateY(-20px);
}
@media (min-width: 1000px) {
  .accordion__item-details {
    padding-left: 3%;
  }
}
.accordion__item--active {
  margin-bottom: 50px;
}
.accordion__item--active h3 {
  color: #3146ff;
}
.accordion__item--active img {
  transform: rotate(180deg);
}
.accordion__item--active p {
  opacity: 1;
  transform: translateY(0);
}

.second-segment__title {
  margin-top: 60px;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  width: 80%;
}
@media (min-width: 1000px) {
  .second-segment__title {
    padding-left: 3%;
  }
}
.second-segment__description {
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 25px;
  margin-top: 30px;
  width: 100%;
}
@media (min-width: 1000px) {
  .second-segment__description {
    padding-left: 3%;
  }
}
.second-segment__download {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100vw;
  height: 100%;
  margin-top: 60px;
  padding-top: 40px;
  padding-bottom: 30px;
  background: #f7f7f7;
}
@media (min-width: 1000px) {
  .second-segment__download {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    margin-left: 16%;
  }
}

.download__title {
  font-size: 19px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 40px;
}
.download__description {
  width: 55%;
  text-align: center;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 26px;
}
@media (min-width: 1000px) {
  .download__description {
    width: fit-content;
  }
}
.download__details-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}
.download__details-container hr {
  width: 1px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
}
.download__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 60px 20px 60px;
  background: #3146ff;
  max-width: 250px;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  font-weight: 300;
  color: white;
  text-decoration: none;
}

.third-segment {
  position: relative;
}
.third-segment__title {
  margin-top: 120px;
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 40px;
  width: 70%;
}
@media (min-width: 1000px) {
  .third-segment__title {
    margin-top: 30%;
    padding-left: 3%;
    font-size: clamp(45px, 10vw, 70px);
    font-family: "Poppins", sans-serif;
    line-height: 80px;
  }
}
.third-segment__description {
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 25px;
  margin-top: 60px;
}
@media (min-width: 1000px) {
  .third-segment__description {
    width: 70%;
    padding-left: 3%;
    font-size: clamp(1.5rem, 2vw, 30px);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 40px;
  }
}
.third-segment__image {
  margin-top: 40px;
  align-self: center;
}
.third-segment__image-desktop {
  position: absolute;
  top: 100px;
  right: -15%;
  width: 40%;
}
.third-segment__sensor-title {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 26px;
}
@media (min-width: 1000px) {
  .third-segment__sensor-title {
    padding-top: 90px;
    padding-left: 6%;
    max-width: 55%;
  }
}
.third-segment__sensor-description {
  margin-top: 30px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 26px;
}
@media (min-width: 1000px) {
  .third-segment__sensor-description {
    padding-left: 6%;
  }
}

.fourth-segment__title {
  margin-top: 120px;
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 40px;
  width: 70%;
}
@media (min-width: 1000px) {
  .fourth-segment__title {
    padding-left: 3%;
  }
}
.fourth-segment__description {
  padding-top: 40px;
  padding-left: 3%;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 25px;
}
@media (min-width: 1000px) {
  .fourth-segment__description {
    width: 45%;
  }
}
.fourth-segment__partners-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
}
@media (min-width: 1000px) {
  .fourth-segment__partners-container {
    flex-direction: row;
    padding-top: 90px;
    padding-left: 3%;
  }
}
.fourth-segment__article {
  width: 100%;
  height: 100%;
}

.article__description {
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 25px;
  margin-top: 40px;
}

.fifth-segment__cost-optimalization {
  margin-top: 120px;
}
@media (min-width: 1000px) {
  .fifth-segment__cost-optimalization {
    display: flex;
    flex-wrap: wrap;
  }
}
.fifth-segment__shop-zonifero {
  width: 100vw;
  margin-top: 60px;
  margin-left: -20px;
  padding: 60px 20px 40px 20px;
  background: #f7f7f7;
}
@media (min-width: 1000px) {
  .fifth-segment__shop-zonifero {
    margin-left: -19%;
    width: 100vw;
  }
}

.cost-optimalization__title {
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 40px;
  width: 70%;
}
@media (min-width: 1000px) {
  .cost-optimalization__title {
    font-size: clamp(45px, 10vw, 70px);
    font-family: "Poppins", sans-serif;
    line-height: 80px;
    padding-left: 2%;
    padding-top: 120px;
    width: 48%;
  }
}
.cost-optimalization__description {
  margin-top: 60px;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 26px;
}
@media (min-width: 1000px) {
  .cost-optimalization__description {
    font-size: clamp(1.5rem, 2vw, 30px);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 40px;
    margin-top: 90px;
    padding-left: 2%;
    width: 40%;
  }
}
.cost-optimalization__image {
  align-self: end;
  margin-top: 40px;
  width: 120%;
}
@media (min-width: 500px) {
  .cost-optimalization__image {
    display: none;
  }
}
@media (min-width: 1000px) {
  .cost-optimalization__desktop-image {
    position: absolute;
    right: 0;
    width: 50%;
  }
}
.cost-optimalization__percentage-number {
  margin-top: 30px;
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 40px;
  width: 70%;
}
@media (min-width: 1000px) {
  .cost-optimalization__percentage-number {
    font-size: clamp(45px, 10vw, 70px);
    font-family: "Poppins", sans-serif;
    line-height: 80px;
    padding-left: 4%;
    margin-top: 90px;
  }
}
.cost-optimalization__benefits-description {
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 25px;
  margin-top: 30px;
  width: 100%;
}
@media (min-width: 1000px) {
  .cost-optimalization__benefits-description {
    padding-left: 4%;
    width: 80%;
  }
}

.shop-zonifero__title {
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 40px;
}
.shop-zonifero__description {
  margin-top: 30px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 25px;
  width: 100%;
}
.shop-zonifero__image {
  width: 106%;
}
.shop-zonifero__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 60px 20px 60px;
  background: #3146ff;
  max-width: 250px;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  font-weight: 300;
  color: white;
  text-decoration: none;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 60px 20px 60px;
}

.section-faq {
  margin-top: 90px;
  width: 100vw;
  max-height: 100% !important;
  padding-left: 20px;
  padding-right: 20px;
}
@media (min-width: 1000px) {
  .section-faq {
    display: flex;
    gap: 60px;
    align-items: start;
    padding-left: 16%;
    max-width: 1500px;
  }
}
.section-faq__title {
  width: 70%;
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 36px;
}
@media (min-width: 1000px) {
  .section-faq__title {
    font-size: 50px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    line-height: 40px;
    width: 40%;
  }
}
.section-faq__highlight_question {
  margin-top: 60px;
  font-size: 17px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 25px;
}
@media (min-width: 1000px) {
  .section-faq__highlight_question {
    margin-top: 0;
  }
}
.section-faq__answer {
  margin-top: 20px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 25px;
}
.section-faq__ask-more-btn {
  padding-left: 4px;
  color: black;
  text-decoration: underline;
}
.section-faq__questions-list {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
}
@media (min-width: 1000px) {
  .section-faq__questions-list {
    margin-top: 0;
    width: 50%;
  }
}
.section-faq__question {
  font-size: 36px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 25px;
}

.section-contact {
  margin-top: 90px;
  width: 100vw;
  padding-bottom: 90px;
}
@media (min-width: 1000px) {
  .section-contact {
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 1500px;
    padding-left: 16%;
  }
}
.section-contact__change-forms-btns-container {
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding-left: 20px;
  padding-right: 20px;
}
@media (min-width: 1000px) {
  .section-contact__change-forms-btns-container {
    margin-top: 120px;
    max-width: 300px;
    align-self: center;
  }
}
.section-contact__contact-form-btn {
  position: relative;
  height: fit-content;
  padding: 4px;
  text-decoration: none;
}
.section-contact__contact-form-btn:hover {
  cursor: pointer;
}
.section-contact__contact-form-btn::after {
  content: "";
  position: absolute;
  left: 6px;
  bottom: 0;
  height: 4px;
  width: 0;
  background: #01ffcb;
  transition: all 0.2s ease-in-out;
}
.section-contact__contact-form-btn:hover::after {
  width: 40%;
}
.section-contact__contact-form-btn--active {
  position: relative;
  height: fit-content;
  padding: 4px;
  text-decoration: none;
  position: relative;
  font-size: 17px;
  font-weight: 700;
  color: #000000;
  transition: none;
}
.section-contact__contact-form-btn--active:hover {
  cursor: pointer;
}
.section-contact__contact-form-btn--active::after {
  content: "";
  position: absolute;
  left: 6px;
  bottom: 0;
  height: 4px;
  width: 0;
  background: #01ffcb;
  transition: all 0.2s ease-in-out;
}
.section-contact__contact-form-btn--active:hover::after {
  width: 40%;
}
.section-contact__contact-form-btn--active::after {
  content: "";
  position: absolute;
  left: 6px;
  bottom: 0;
  height: 4px;
  width: 40%;
  background: #01ffcb;
}
.section-contact__form {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
@media (min-width: 1000px) {
  .section-contact__form {
    width: 100%;
    align-items: center;
  }
}
.section-contact__zonifero-head {
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  line-height: 26px;
  margin-top: 60px;
  padding-bottom: 40px;
  padding-left: 20px;
}
.section-contact__zonifero-products-slider-wrapper {
  display: flex;
  align-items: center;
  padding: 60px 20px 0 20px;
  background-color: #f7f7f7;
}

.form__label {
  margin-top: 30px;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}
.form__label::after {
  content: "*";
  padding-left: 2px;
  color: #3146ff;
}
.form__label--not-required::after {
  content: "";
}
.form__input-text {
  margin-top: 30px;
  border: none;
  border-bottom: 1px dotted #000;
  padding-bottom: 10px;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
@media (min-width: 1000px) {
  .form__message-container {
    width: 100%;
  }
}
.form__submit-btn {
  position: relative;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 60px 20px 60px;
  background: #3146ff;
  max-width: 250px;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  font-weight: 300;
  color: white;
  text-decoration: none;
}

@media (min-width: 1000px) {
  #message {
    width: 100%;
    height: 50px;
  }
}

.zonifero-product-article {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
.zonifero-product-article__small-headline {
  align-self: start;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 40px;
}
.zonifero-product-article__big-headline {
  align-self: start;
  color: #3146ff;
  font-size: clamp(45px, 10vw, 70px);
  font-family: "Poppins", sans-serif;
  line-height: 80px;
}
.zonifero-product-article__description {
  padding-top: 30px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 25px;
}
.zonifero-product-article__image {
  padding-top: 30px;
}

.section {
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

.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 90px;
  padding-bottom: 10px;
  min-height: 100vh;
  background-color: #3146ff;
  scroll-margin-top: 100px;
  color: #ffffff;
}
@media (min-width: 500px) {
  .footer__all-lists-wrapper {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
  }
}
.footer__list-container {
  height: 100%;
  padding-left: 20px;
}
.footer__list {
  list-style-type: none;
  padding-top: 40px;
}
.footer__list-headline {
  padding-top: 60px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}
.footer__list-headline::after {
  content: ":";
}
.footer__list-item {
  padding-top: 2px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}
.footer__list-item:hover {
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}
.footer__hr {
  margin-top: 60px;
  width: 100vw;
  opacity: 0.2;
}
.footer__logo-ex-container {
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding-right: 10px;
  padding-top: 30px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/_reset.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_utils.scss","webpack://./src/styles/_media-queries.scss","webpack://./src/styles/components/header/_upper-header.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_typography.scss","webpack://./src/styles/components/header/_bottom-header.scss","webpack://./src/styles/_text.scss","webpack://./src/styles/components/header/mobileHeader/_hamburger.scss","webpack://./src/styles/components/header/mobileHeader/_mobile-menu.scss","webpack://./src/styles/components/header/mobileHeader/_mobile-header.scss","webpack://./src/styles/components/header/index.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/components/content/sections/_overview-section.scss","webpack://./src/styles/components/content/sections/_features-section.scss","webpack://./src/styles/components/content/sections/_specs-section.scss","webpack://./src/styles/_metrics.scss","webpack://./src/styles/components/content/sections/_faq-section.scss","webpack://./src/styles/components/content/sections/_contact-section.scss","webpack://./src/styles/components/content/sections/index.scss","webpack://./src/styles/components/content/index.scss","webpack://./src/styles/components/footer/index.scss"],"names":[],"mappings":"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AAA;EACA,sBAAA;EACA,wCAAA;EACA,4BAAA;Af6uBJ;Ae3uBI;EACE,eAAA;Af6uBN;Ae1uBI;EACE,kCHjHgB;EGkHhB,gBVpHM;ALg2BZ;AE/0BE;EaiGE;IAII,gBAAA;Ef8uBN;AACF;Ae5uBI;EACE,4BAAA;Af8uBN;Ae5uBI;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,4BAAA;EACA,4BAAA;Af8uBN;AEh2BE;Ea2GE;IASI,gBAAA;EfgvBN;AACF;Ae7uBI;EACE,mBAAA;Af+uBN;Ae9uBM;EACE,cX5IQ;AJ43BhB;Ae9uBM;EACE,yBAAA;AfgvBR;Ae9uBM;EACE,UAAA;EACA,wBAAA;AfgvBR;;AezuBE;EACE,gBCzJO;ED0JP,eCxJU;EDyJV,kCH3JkB;EG4JlB,UAAA;Af4uBJ;AEz3BE;EayIA;IAMI,gBAAA;Ef8uBJ;AACF;Ae5uBE;ERlIA,eF1BO;EE2BP,iCK/BsB;ELgCtB,gBFjCW;EEkCX,iBFvBe;EUwJb,gBCjKU;EDkKV,WAAA;AfivBJ;AEt4BE;EakJA;IAKI,gBAAA;EfmvBJ;AACF;AejvBE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SC1KO;ED2KP,YAAA;EACA,YAAA;EACA,gBChLO;EDiLP,iBChLO;EDiLP,oBChLU;EDiLV,mBXlLe;AJq6BnB;AEv5BE;Ea0JA;IAYI,mBAAA;IACA,6BAAA;IACA,WAAA;IACA,iBAAA;IACA,gBAAA;EfqvBJ;AACF;;AehvBE;EACE,eV5LK;EU6LL,kCHjMkB;EGkMlB,gBVpMQ;EUqMR,iBV1LY;AL66BhB;AejvBE;EACE,UAAA;EACA,kBAAA;EACA,eVnMK;EUoML,iCHxMoB;EGyMpB,gBV1MS;EU2MT,iBVjMY;ALo7BhB;AE/6BE;EasLA;IAQI,kBAAA;EfqvBJ;AACF;AenvBE;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,YAAA;EACA,eVhNK;EUiNL,iCHrNoB;EGsNpB,gBVvNS;AL48Bb;AenvBI;EACE,UAAA;EACA,YCzNQ;ED0NR,oCAAA;EACA,YAAA;AfqvBN;AelvBE;ER7HA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,4BAAA;EACA,mBHzGc;EG0Gd,gBAAA;EACA,iCKxGsB;ELyGtB,eFrGO;EEsGP,gBF3GW;EE4GX,YAAA;EACA,qBAAA;APk3BF;;Ae1vBA;EACE,kBAAA;Af6vBF;Ae5vBE;EACE,iBAAA;EACA,eAAA;EACA,kCH1OkB;EG2OlB,gBV7OQ;EU8OR,iBVnOY;EUoOZ,UAAA;Af8vBJ;AE59BE;EawNA;IAQI,eAAA;IACA,gBAAA;IRjPJ,kCAAA;IAEA,kCKDoB;ILEpB,iBFKe;EL4+Bf;AACF;AehwBE;ERrNA,eF1BO;EE2BP,iCK/BsB;ELgCtB,gBFjCW;EEkCX,iBFvBe;EU2Ob,gBCtPO;AhB2/BX;AE5+BE;EaqOA;IAII,UAAA;IACA,gBAAA;IRnNJ,mCAAA;IAEA,iCKvCsB;ILwCtB,gBF1Ca;IE2Cb,iBFjCc;EL2/Bd;AACF;AexwBE;EACE,gBC7PO;ED8PP,kBAAA;Af0wBJ;AexwBE;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;Af0wBJ;AexwBE;EACE,kCHxQkB;EGyQlB,gBV1QW;EU2QX,iBVhQY;AL0gChB;AErgCE;EawPA;IAKI,iBC7QM;ID8QN,gBAAA;IACA,cAAA;Ef4wBJ;AACF;Ae1wBE;EACE,gBChRU;EDiRV,eV9QK;EU+QL,iCHnRoB;EGoRpB,gBVrRS;EUsRT,iBV5QY;ALwhChB;AEnhCE;EakQA;IAOI,gBAAA;Ef8wBJ;AACF;;AezwBE;EACE,iBCjSS;EDkST,eAAA;EACA,kCHjSkB;EGkSlB,gBVpSQ;EUqSR,iBV1RY;EU2RZ,UAAA;Af4wBJ;AEjiCE;Ea+QA;IAQI,gBAAA;Ef8wBJ;AACF;Ae5wBE;EACE,iBCzSO;ED0SP,gBAAA;ER5QF,eF1BO;EE2BP,iCK/BsB;ELgCtB,gBFjCW;EEkCX,iBFvBe;ALkjCjB;AE9iCE;Ea0RA;IAKI,UAAA;EfmxBJ;AACF;AejxBE;EACE,aAAA;EACA,sBAAA;EACA,SCnTO;EDoTP,gBCpTO;AhBukCX;AEzjCE;EakSA;IAMI,mBAAA;IACA,iBCzTM;ID0TN,gBAAA;EfqxBJ;AACF;AenxBE;EACE,WAAA;EACA,YAAA;AfqxBJ;;AehxBE;EACE,eV/TK;EUgUL,iCHpUoB;EGqUpB,gBVvUW;EUwUX,iBV5Ta;EU6Tb,gBCvUO;AhB0lCX;;Ae9wBE;EACE,iBChVS;AhBimCb;AEhlCE;Ea8TA;IAII,aAAA;IACA,eAAA;EfkxBJ;AACF;AehxBE;EACE,YAAA;EACA,gBCvVO;EDwVP,kBAAA;EACA,4BAAA;EACA,mBXzVe;AJ2mCnB;AE7lCE;EasUA;IAQI,iBAAA;IACA,YAAA;EfmxBJ;AACF;;Ae9wBE;EACE,eAAA;EACA,kCHtWkB;EGuWlB,gBVzWQ;EU0WR,iBV/VY;EUgWZ,UAAA;AfixBJ;AE3mCE;EaqVA;IRrWA,kCAAA;IAEA,kCKDoB;ILEpB,iBFKe;IUqWX,gBAAA;IACA,kBC/WO;IDgXP,UAAA;EfqxBJ;AACF;AenxBE;EACE,gBClXO;EDmXP,eAAA;EACA,iCHnXoB;EGoXpB,gBVtXW;EUuXX,iBV5WY;ALioChB;AE5nCE;EakWA;IR3UA,mCAAA;IAEA,iCKvCsB;ILwCtB,gBF1Ca;IE2Cb,iBFjCc;IUgXV,gBC1XM;ID2XN,gBAAA;IACA,UAAA;Ef0xBJ;AACF;AexxBE;EACE,eAAA;EACA,gBC/XO;EDgYP,WAAA;Af0xBJ;AElpCE;EaqXA;IAMI,aAAA;Ef2xBJ;AACF;AEjpCE;EayXA;IAEI,kBAAA;IACA,QAAA;IAEA,UAAA;EfyxBJ;AACF;AetxBE;EACE,gBChZU;EDiZV,eAAA;EACA,kCHpZkB;EGqZlB,gBVvZQ;EUwZR,iBV7YY;EU8YZ,UAAA;AfwxBJ;AEhqCE;EakYA;IRlZA,kCAAA;IAEA,kCKDoB;ILEpB,iBFKe;IUoZX,gBAAA;IACA,gBC7ZM;EhBwrCV;AACF;AezxBE;ERhYA,eF1BO;EE2BP,iCK/BsB;ELgCtB,gBFjCW;EEkCX,iBFvBe;EUsZb,gBC/ZU;EDgaV,WAAA;Af8xBJ;AEjrCE;EagZA;IAMI,gBAAA;IACA,UAAA;Ef+xBJ;AACF;;Ae1xBE;EACE,eAAA;EACA,kCH9akB;EG+alB,gBVjbQ;EUkbR,iBVvaY;ALosChB;Ae3xBE;EACE,gBCjbU;ED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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n  display: block;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n","@import 'reset';\r\n@import 'fonts';\r\n@import 'variables';\r\n@import 'typography';\r\n@import 'metrics';\r\n@import 'media-queries';\r\n@import 'utils';\r\n@import 'text';\r\n\r\n// components\r\n@import './components/header';\r\n@import './components/content';\r\n@import './components/footer';\r\n\r\n.page_wrapper {\r\n  min-height: 100vh;\r\n  background-color: $background_color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.scrollToSectionLink {\r\n  text-decoration: none;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .upper-header,\r\n  .bottom-header {\r\n    display: none;\r\n  }\r\n\r\n  .header {\r\n    height: 100px;\r\n  }\r\n  .main {\r\n    margin-top: 100px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .mobile-header {\r\n    display: none;\r\n  }\r\n  .main {\r\n    margin-top: 200px;\r\n  }\r\n}\r\n",".mobile-hidden {\r\n  display: none;\r\n\r\n  @include desktop {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.desktop-hidden {\r\n  @include mobile {\r\n    display: block;\r\n  }\r\n  @include desktop {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  @include desktop {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.w-full {\r\n  width: 100%;\r\n}\r\n\r\n.gap {\r\n  gap: 100px;\r\n}\r\n","$mobile-width: 360px;\r\n$tablet-width: 500px;\r\n$desktop-width: 1000px;\r\n\r\n@mixin mobile {\r\n  @media (min-width: #{$mobile-width}) and (max-width: #{$tablet-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$tablet-width}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$desktop-width}) {\r\n    @content;\r\n  }\r\n}\r\n",".upper-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 50%;\r\n  padding-left: 40px;\r\n\r\n  &__logo-container {\r\n    padding-top: 40px;\r\n  }\r\n\r\n  &__menu-container {\r\n    display: flex;\r\n    width: 60%;\r\n  }\r\n\r\n  &__menu-list {\r\n    display: flex;\r\n    align-self: end;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    height: 60%;\r\n    list-style: none;\r\n  }\r\n\r\n  &__menu-list-item {\r\n    width: fit-content;\r\n    height: fit-content;\r\n    justify-content: center;\r\n    justify-items: center;\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  &__get-app-button {\r\n    width: 400px;\r\n    padding: 20px 100px 2px 0;\r\n    border: none;\r\n    background-color: $primary_color;\r\n    color: $white;\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n      opacity: 0.9;\r\n    }\r\n  }\r\n}\r\n\r\n#selectLanguageBtn {\r\n  position: relative;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.select-lang-bar {\r\n  position: absolute;\r\n  top: 35px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100px;\r\n  height: 50px;\r\n  opacity: 0;\r\n  cursor: default;\r\n  transition: all 0.1s ease;\r\n\r\n  &--open {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.lang-option {\r\n  cursor: pointer;\r\n\r\n  &--selected {\r\n    font-weight: 600;\r\n  }\r\n}\r\n\r\n.icons-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n\r\n.signin-button {\r\n  font-weight: $font_bold;\r\n}\r\n","$primary_color: #3146ff;\r\n$secondary_color: #01ffcb;\r\n$primary_text_color: #000000;\r\n$background_color: #f7f7f7;\r\n$white: #ffffff;\r\n","$font_bold: 700;\r\n$font_regular: 400;\r\n$font_light: 300;\r\n\r\n$font_xl: 70px;\r\n$font_l: 30px;\r\n$font_m: 19px;\r\n$font_s: 17px;\r\n\r\n$line_height_xl: 80px;\r\n$line_height_l: 50px;\r\n$line_height_m: 40px;\r\n$line_height_s: 26px;\r\n$line_height_xs: 25px;\r\n",".bottom-header {\r\n  height: 50%;\r\n\r\n  &__menu-container {\r\n    display: flex;\r\n    height: 100%;\r\n  }\r\n\r\n  &__manu-description {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    margin-left: 18%;\r\n  }\r\n\r\n  &__menu-list {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: 100%;\r\n    margin-left: 3%;\r\n    list-style-type: none;\r\n  }\r\n\r\n  &__menu-list-item {\r\n    @include tab;\r\n\r\n    &--active {\r\n      @include tab--active;\r\n    }\r\n  }\r\n}\r\n","@mixin h1 {\r\n  font-size: clamp(45px, 10vw, $font_xl);\r\n\r\n  font-family: $primary_font_family;\r\n  line-height: $line_height_xl;\r\n}\r\n\r\n@mixin h2 {\r\n  font-size: $font_l;\r\n  font-family: $primary_font_family;\r\n  font-weight: $font_light;\r\n  line-height: $line_height_m;\r\n}\r\n\r\n@mixin h3 {\r\n  font-family: $primary_font_family;\r\n  font-size: $font_m;\r\n  line-height: $line_height_s;\r\n}\r\n\r\n@mixin h4 {\r\n  font-family: $secondary_font_family;\r\n  font-size: $font_s;\r\n  line-height: $line_height_s;\r\n}\r\n\r\n@mixin h5 {\r\n}\r\n\r\n@mixin h6 {\r\n}\r\n\r\n@mixin paragraph {\r\n  font-size: $font_s;\r\n  font-family: $secondary_font_family;\r\n  font-weight: $font_light;\r\n  line-height: $line_height_xs;\r\n}\r\n\r\n@mixin description-text {\r\n  font-size: clamp(1.5rem, 2vw, $font_l);\r\n  // font-size: $font_l;\r\n  font-family: $secondary_font_family;\r\n  font-weight: $font_regular;\r\n  line-height: $line_height_m;\r\n}\r\n\r\n@mixin big-headline {\r\n  font-size: $line_height_l;\r\n  font-family: $primary_font_family;\r\n  font-weight: $font_regular;\r\n  line-height: $line_height_m;\r\n}\r\n\r\n@mixin tab {\r\n  position: relative;\r\n  height: fit-content;\r\n  padding: 4px;\r\n  text-decoration: none;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  &::after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 6px;\r\n    bottom: 0;\r\n    height: 4px;\r\n    width: 0;\r\n    background: $secondary_color;\r\n    transition: all 0.2s ease-in-out;\r\n  }\r\n\r\n  &:hover::after {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n@mixin tab--active {\r\n  @include tab;\r\n\r\n  position: relative;\r\n  font-size: $font_s;\r\n  font-weight: $font_bold;\r\n  color: $primary_text_color;\r\n  transition: none;\r\n\r\n  &::after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 6px;\r\n    bottom: 0;\r\n    height: 4px;\r\n    width: 40%;\r\n    background: $secondary_color;\r\n  }\r\n}\r\n\r\n@mixin button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: $metric-s $metric-l $metric-s $metric-l;\r\n  background: $primary_color;\r\n  max-width: 250px;\r\n  font-family: $secondary_font_family;\r\n  font-size: $font_s;\r\n  font-weight: $font_light;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n@mixin input {\r\n  margin-top: 30px;\r\n  border: none;\r\n  border-bottom: 1px dotted #000;\r\n  padding-bottom: 10px;\r\n  font-size: $font_l;\r\n  font-family: $secondary_font_family;\r\n  font-weight: $font_regular;\r\n}\r\n\r\n@mixin label {\r\n  margin-top: 30px;\r\n  font-size: 13px;\r\n  font-family: $secondary_font_family;\r\n  font-weight: $font_light;\r\n  &::after {\r\n    content: '*';\r\n    padding-left: 2px;\r\n    color: $primary_color;\r\n  }\r\n  &--not-required::after {\r\n    content: '';\r\n  }\r\n}\r\n",".hamburger {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 30px;\r\n  height: 30px;\r\n  outline: none;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  &__inner-span {\r\n    width: 90%;\r\n    height: 2px;\r\n    background: $primary_color;\r\n    transition: all 0.1s ease-in-out;\r\n  }\r\n}\r\n",".mobile-menu {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 100vw;\r\n  width: 100%;\r\n  height: calc(100vh - 100%);\r\n  margin-top: 100px;\r\n  background: rgba(0, 0, 0, 0.9);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: -1;\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    height: 100%;\r\n    list-style-type: none;\r\n\r\n    &-item {\r\n      padding: 10px;\r\n    }\r\n\r\n    &-link {\r\n      text-decoration: none;\r\n      color: #fff;\r\n      font-size: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n.mobile-menu--open {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n","@import 'hamburger';\r\n@import 'mobile-menu';\r\n\r\n.mobile-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  &__dropdown-menu {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 6px;\r\n  }\r\n}\r\n","@import 'upper-header';\r\n@import 'bottom-header';\r\n@import './mobileHeader/mobile-header';\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100vw;\r\n  height: 200px;\r\n  background-color: $white;\r\n  font-family: $secondary_font_family;\r\n  font-weight: $font_regular;\r\n  z-index: 99;\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300;400;700&display=swap');\r\n\r\n$primary_font_family: 'Poppins', sans-serif;\r\n$secondary_font_family: 'Roboto', sans-serif;\r\n",".section-overview {\r\n  padding-left: 18%;\r\n  padding-bottom: 120px;\r\n  background: $background_color;\r\n  &__hero {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    min-height: 100%;\r\n    &-left-side {\r\n      width: 36%;\r\n    }\r\n    &-headline {\r\n      @include h1;\r\n      margin-top: 170px;\r\n      color: $primary_color;\r\n      word-wrap: normal;\r\n    }\r\n    &-description {\r\n      margin-top: 50px;\r\n      @include description-text;\r\n    }\r\n    &-icons-container {\r\n      display: flex;\r\n      gap: 20px;\r\n      margin-top: 40px;\r\n      & img {\r\n        transition: transform 0.3s ease-in-out;\r\n        cursor: pointer;\r\n        transform: scale(1);\r\n      }\r\n      & img:hover {\r\n        transition: transform 0.3s ease-in-out;\r\n        cursor: pointer;\r\n        transform: scale(1.02);\r\n      }\r\n    }\r\n    &-right-side {\r\n      width: calc(100vw - 60%);\r\n      height: 80vh;\r\n      position: relative;\r\n      overflow: hidden;\r\n    }\r\n  }\r\n  &__cards-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 40px;\r\n    width: 80%;\r\n    height: 100%;\r\n  }\r\n  &__slider-wrapper {\r\n    position: relative;\r\n    display: flex;\r\n    gap: 20px;\r\n    margin-top: 80px;\r\n    width: 100%;\r\n    box-sizing: content-box;\r\n    overflow-x: auto;\r\n    flex-shrink: 0;\r\n\r\n    &::-webkit-scrollbar {\r\n      background: $background_color;\r\n      width: 4px;\r\n      border-radius: 10px;\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: rgba(0, 0, 0, 0.2);\r\n      border-radius: 10px;\r\n    }\r\n  }\r\n  &__slider-headline {\r\n    position: absolute;\r\n    top: -50px;\r\n    font-size: $font_s;\r\n    font-weight: $font_regular;\r\n    font-family: $secondary_font_family;\r\n  }\r\n}\r\n\r\n.hand-image {\r\n  position: absolute;\r\n  width: 30vw;\r\n  max-width: 615px;\r\n  max-height: 827px;\r\n  bottom: -100px;\r\n  right: 20%;\r\n  z-index: 2;\r\n}\r\n\r\n.desks-image {\r\n  position: absolute;\r\n  bottom: 50px;\r\n  right: 70px;\r\n  width: 40vw;\r\n  max-width: 830px;\r\n  max-height: 516px;\r\n  z-index: 1;\r\n}\r\n\r\n.article {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 300px;\r\n  width: 315px;\r\n  padding-right: 20px;\r\n  text-align: left;\r\n\r\n  &__headline {\r\n    font-size: $font_l;\r\n    font-weight: $font_bold;\r\n    font-family: $primary_font_family;\r\n    line-height: $line_height_m;\r\n  }\r\n\r\n  &__content {\r\n    margin-top: 40px;\r\n    font-size: $font_s;\r\n    font-weight: $font_light;\r\n    font-family: $secondary_font_family;\r\n    line-height: $line_height_xs;\r\n  }\r\n}\r\n\r\n.slider {\r\n  &__article {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 20px;\r\n    background: #fff;\r\n    width: 310px;\r\n    height: 500px;\r\n    padding: 60px;\r\n    flex-shrink: 0;\r\n    &-image {\r\n      width: 85%;\r\n      object-fit: fill;\r\n    }\r\n    &-headline {\r\n      font-size: $font_m;\r\n      font-weight: $font_bold;\r\n      font-family: $primary_font_family;\r\n      line-height: $line_height_s;\r\n      overflow-wrap: break-word;\r\n    }\r\n    &-description {\r\n      font-size: $font_s;\r\n      font-weight: $font_light;\r\n      font-family: $secondary_font_family;\r\n      line-height: $line_height_xs;\r\n      overflow-wrap: break-word;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .section-overview {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    &__hero {\r\n      flex-direction: column;\r\n\r\n      &-headline {\r\n        margin-top: 20px;\r\n        word-wrap: break-word;\r\n        font-size: 60px;\r\n      }\r\n\r\n      &-description {\r\n        position: absolute;\r\n        top: 1000px;\r\n      }\r\n\r\n      &-left-side {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        width: 100%;\r\n        height: 1200px;\r\n        margin-top: 50px;\r\n      }\r\n      &-right-side {\r\n        position: absolute;\r\n        top: 50%;\r\n        width: 100%;\r\n        height: 500px;\r\n      }\r\n      &-icons-container {\r\n        justify-content: center;\r\n        gap: 40px;\r\n\r\n        & img {\r\n          width: 40vw;\r\n          max-width: 200px;\r\n        }\r\n      }\r\n    }\r\n    &__cards-wrapper {\r\n      flex-direction: column;\r\n      align-items: center;\r\n      gap: 20px;\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n  }\r\n\r\n  .article {\r\n    width: 100%;\r\n    max-width: 440px;\r\n    height: 200px;\r\n    min-height: 100%;\r\n  }\r\n\r\n  .hand-image {\r\n    position: absolute;\r\n    width: clamp(100px, 70vw, 400px);\r\n    bottom: -10%;\r\n    left: 15%;\r\n    z-index: 2;\r\n  }\r\n\r\n  .desks-image {\r\n    position: absolute;\r\n    width: clamp(100px, 90vw, 600px);\r\n    bottom: 50px;\r\n    left: 5%;\r\n    z-index: 1;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .section-overview {\r\n    &__hero {\r\n      &-headline {\r\n        margin-top: 0;\r\n        font-size: 40px;\r\n        line-height: $line_height_m;\r\n      }\r\n      &-description {\r\n        position: absolute;\r\n        top: 700px;\r\n        font-size: 28px;\r\n        line-height: 36px;\r\n      }\r\n      &-right-side {\r\n        top: 20%;\r\n      }\r\n      &-left-side {\r\n        height: 900px;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".section-features {\r\n  position: relative;\r\n  width: 100vw;\r\n  height: 100%;\r\n\r\n  &__top-backgound {\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 450px;\r\n\r\n    & img {\r\n      object-fit: cover;\r\n      width: 100%;\r\n      height: 500px;\r\n    }\r\n  }\r\n\r\n  &__phone-image-container {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 19%;\r\n\r\n    @include mobile {\r\n      display: none;\r\n    }\r\n\r\n    @include tablet {\r\n      display: none;\r\n    }\r\n\r\n    @include desktop {\r\n      display: block;\r\n    }\r\n  }\r\n  &__navigation-buttons-container {\r\n    position: absolute;\r\n    top: 470px;\r\n    bottom: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    height: 70px;\r\n\r\n    @include tablet {\r\n      top: 480px;\r\n      height: 40px;\r\n    }\r\n  }\r\n  &__navigation-left-button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70px;\r\n    height: 100%;\r\n    background: #fff;\r\n\r\n    @include tablet {\r\n      width: 40px;\r\n    }\r\n\r\n    & img {\r\n      transform: rotate(90deg);\r\n    }\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  &__navigation-right-button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70px;\r\n    height: 100%;\r\n    background: #fff;\r\n\r\n    @include tablet {\r\n      width: 40px;\r\n    }\r\n\r\n    & img {\r\n      transform: rotate(-90deg);\r\n    }\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  &__bottom-layout {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    gap: 40px;\r\n    min-height: 370px;\r\n    max-height: 100%;\r\n    background-color: $primary_color;\r\n  }\r\n\r\n  &__text-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 65%;\r\n    height: 70%;\r\n    color: #fff;\r\n    margin-left: 18%;\r\n    padding-top: 100px;\r\n\r\n    @include tablet {\r\n      padding-top: 140px;\r\n      flex-direction: column;\r\n      gap: 20px;\r\n      width: 100%;\r\n      margin-left: 0;\r\n      padding-left: 20px;\r\n      padding-right: 20px;\r\n    }\r\n  }\r\n\r\n  &__big-text {\r\n    width: 500px;\r\n    height: fit-content;\r\n    font-size: 50px;\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_bold;\r\n\r\n    @include tablet {\r\n      width: 100%;\r\n      font-size: 36px;\r\n    }\r\n  }\r\n  &__small-text {\r\n    width: 600px;\r\n    align-self: flex-end;\r\n    font-size: $font_s;\r\n    font-family: $secondary_font_family;\r\n    font-weight: $font_light;\r\n    line-height: $line_height_xs;\r\n\r\n    @include tablet {\r\n      width: 100%;\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  &__bottom-text-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  &__bottom-text {\r\n    width: 25%;\r\n    padding: 20px;\r\n    border-top: 2px dotted rgba(255, 255, 255, 0.2);\r\n    text-align: center;\r\n    color: #fff;\r\n    text-decoration: none;\r\n\r\n    @include tablet {\r\n      width: 100%;\r\n    }\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n      color: rgba(255, 255, 255, 0.8);\r\n    }\r\n  }\r\n}\r\n",".section-specs {\r\n  &__first-segment,\r\n  &__second-segment,\r\n  &__third-segment,\r\n  &__fourth-segment,\r\n  &__fifth-segment,\r\n  &__sixth-segment {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    padding-left: $metric-s;\r\n    padding-right: $metric-s;\r\n\r\n    @include desktop {\r\n      padding-left: 16%;\r\n      max-width: 1500px;\r\n    }\r\n  }\r\n  &__second-segment {\r\n    @include desktop {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n      padding-left: 17%;\r\n    }\r\n  }\r\n  &__fifth-segment {\r\n    @include desktop {\r\n      max-width: 100vw;\r\n    }\r\n  }\r\n}\r\n\r\n.first-segment {\r\n  &__flexinioo {\r\n    display: block;\r\n\r\n    @include desktop {\r\n      display: flex;\r\n    }\r\n  }\r\n\r\n  &__text-container {\r\n    position: relative;\r\n  }\r\n\r\n  &__title {\r\n    @include h2;\r\n    margin-top: $metric-l;\r\n    width: 100%;\r\n    @include desktop {\r\n      padding-top: $metric-m;\r\n      padding-left: 7%;\r\n    }\r\n  }\r\n  &__description {\r\n    @include paragraph;\r\n    margin-top: $metric-base;\r\n    width: 100%;\r\n    @include desktop {\r\n      padding-left: 7%;\r\n    }\r\n  }\r\n  &__image {\r\n    position: absolute;\r\n    left: -20px;\r\n    top: 94%;\r\n    @include desktop {\r\n      display: none;\r\n    }\r\n  }\r\n  &__image-desktop {\r\n    display: none;\r\n    @include desktop {\r\n      display: block;\r\n      min-width: 407px;\r\n      max-height: 446px;\r\n    }\r\n  }\r\n  &__table {\r\n    margin-top: $metric-m;\r\n    margin-left: $metric-xxl;\r\n    @include desktop {\r\n      height: fit-content;\r\n      padding-top: $metric-m;\r\n    }\r\n  }\r\n  &__accordion {\r\n    padding-top: 178px;\r\n    width: 100%;\r\n    list-style-type: none;\r\n    @include desktop {\r\n      padding-top: 0;\r\n    }\r\n  }\r\n}\r\n\r\n.accordion {\r\n  &__item {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    padding: $metric-s 0 $metric-s 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n    transition: all 0.2s ease-in;\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n\r\n    &-title {\r\n      font-family: $primary_font_family;\r\n      font-weight: $font_bold;\r\n      @include desktop {\r\n        padding-left: 3%;\r\n      }\r\n    }\r\n    &-arrow {\r\n      transition: all 0.2s ease-in;\r\n    }\r\n    &-details {\r\n      position: absolute;\r\n      top: 60px;\r\n      width: 100%;\r\n      height: 50px;\r\n      opacity: 0;\r\n      transition: all 0.2s ease-in;\r\n      transform: translateY(-20px);\r\n      @include desktop {\r\n        padding-left: 3%;\r\n      }\r\n    }\r\n\r\n    &--active {\r\n      margin-bottom: 50px;\r\n      & h3 {\r\n        color: $primary_color;\r\n      }\r\n      & img {\r\n        transform: rotate(180deg);\r\n      }\r\n      & p {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.second-segment {\r\n  &__title {\r\n    margin-top: $metric-l;\r\n    font-size: $metric-base;\r\n    font-family: $primary_font_family;\r\n    width: 80%;\r\n    @include desktop {\r\n      padding-left: 3%;\r\n    }\r\n  }\r\n  &__description {\r\n    @include paragraph;\r\n    margin-top: $metric-base;\r\n    width: 100%;\r\n    @include desktop {\r\n      padding-left: 3%;\r\n    }\r\n  }\r\n  &__download {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: $metric-s;\r\n    width: 100vw;\r\n    height: 100%;\r\n    margin-top: $metric-l;\r\n    padding-top: $metric-m;\r\n    padding-bottom: $metric-base;\r\n    background: $background_color;\r\n    @include desktop {\r\n      flex-direction: row;\r\n      justify-content: space-around;\r\n      width: 100%;\r\n      max-width: 1200px;\r\n      margin-left: 16%;\r\n    }\r\n  }\r\n}\r\n\r\n.download {\r\n  &__title {\r\n    font-size: $font_m;\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_bold;\r\n    line-height: $line_height_m;\r\n  }\r\n  &__description {\r\n    width: 55%;\r\n    text-align: center;\r\n    font-size: $font_s;\r\n    font-family: $secondary_font_family;\r\n    font-weight: $font_light;\r\n    line-height: $line_height_s;\r\n    @include desktop {\r\n      width: fit-content;\r\n    }\r\n  }\r\n  &__details-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 200px;\r\n    font-size: $font_s;\r\n    font-family: $secondary_font_family;\r\n    font-weight: $font_light;\r\n\r\n    & hr {\r\n      width: 1px;\r\n      height: $metric-base;\r\n      background-color: rgba(0, 0, 0, 0.1);\r\n      border: none;\r\n    }\r\n  }\r\n  &__btn {\r\n    @include button;\r\n  }\r\n}\r\n\r\n.third-segment {\r\n  position: relative;\r\n  &__title {\r\n    margin-top: 120px;\r\n    font-size: 36px;\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_bold;\r\n    line-height: $line_height_m;\r\n    width: 70%;\r\n    @include desktop {\r\n      margin-top: 30%;\r\n      padding-left: 3%;\r\n      @include h1;\r\n    }\r\n  }\r\n  &__description {\r\n    @include paragraph;\r\n    margin-top: $metric-l;\r\n    @include desktop {\r\n      width: 70%;\r\n      padding-left: 3%;\r\n      @include description-text;\r\n    }\r\n  }\r\n  &__image {\r\n    margin-top: $metric-m;\r\n    align-self: center;\r\n  }\r\n  &__image-desktop {\r\n    position: absolute;\r\n    top: 100px;\r\n    right: -15%;\r\n    width: 40%;\r\n  }\r\n  &__sensor-title {\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_regular;\r\n    line-height: $line_height_s;\r\n    @include desktop {\r\n      padding-top: $metric-xl;\r\n      padding-left: 6%;\r\n      max-width: 55%;\r\n    }\r\n  }\r\n  &__sensor-description {\r\n    margin-top: $metric-base;\r\n    font-size: $font_s;\r\n    font-family: $secondary_font_family;\r\n    font-weight: $font_light;\r\n    line-height: $line_height_s;\r\n    @include desktop {\r\n      padding-left: 6%;\r\n    }\r\n  }\r\n}\r\n\r\n.fourth-segment {\r\n  &__title {\r\n    margin-top: $metric-xxl;\r\n    font-size: 36px;\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_bold;\r\n    line-height: $line_height_m;\r\n    width: 70%;\r\n    @include desktop {\r\n      padding-left: 3%;\r\n    }\r\n  }\r\n  &__description {\r\n    padding-top: $metric-m;\r\n    padding-left: 3%;\r\n    @include paragraph;\r\n    @include desktop {\r\n      width: 45%;\r\n    }\r\n  }\r\n  &__partners-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: $metric-m;\r\n    margin-top: $metric-m;\r\n    @include desktop {\r\n      flex-direction: row;\r\n      padding-top: $metric-xl;\r\n      padding-left: 3%;\r\n    }\r\n  }\r\n  &__article {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.article {\r\n  &__description {\r\n    font-size: $font_s;\r\n    font-family: $secondary_font_family;\r\n    font-weight: $font_regular;\r\n    line-height: $line_height_xs;\r\n    margin-top: $metric-m;\r\n  }\r\n}\r\n\r\n.fifth-segment {\r\n  &__cost-optimalization {\r\n    margin-top: $metric-xxl;\r\n\r\n    @include desktop {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n    }\r\n  }\r\n  &__shop-zonifero {\r\n    width: 100vw;\r\n    margin-top: $metric-l;\r\n    margin-left: -$metric-s;\r\n    padding: $metric-l $metric-s $metric-m $metric-s;\r\n    background: $background_color;\r\n\r\n    @include desktop {\r\n      margin-left: -19%;\r\n      width: 100vw;\r\n    }\r\n  }\r\n}\r\n\r\n.cost-optimalization {\r\n  &__title {\r\n    font-size: 36px;\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_bold;\r\n    line-height: $line_height_m;\r\n    width: 70%;\r\n    @include desktop {\r\n      @include h1;\r\n      padding-left: 2%;\r\n      padding-top: $metric-xxl;\r\n      width: 48%;\r\n    }\r\n  }\r\n  &__description {\r\n    margin-top: $metric-l;\r\n    font-size: 22px;\r\n    font-family: $secondary_font_family;\r\n    font-weight: $font_regular;\r\n    line-height: $line_height_s;\r\n    @include desktop {\r\n      @include description-text;\r\n      margin-top: $metric-xl;\r\n      padding-left: 2%;\r\n      width: 40%;\r\n    }\r\n  }\r\n  &__image {\r\n    align-self: end;\r\n    margin-top: $metric-m;\r\n    width: 120%;\r\n\r\n    @include tablet {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__desktop-image {\r\n    @include desktop {\r\n      position: absolute;\r\n      right: 0;\r\n\r\n      width: 50%;\r\n    }\r\n  }\r\n\r\n  &__percentage-number {\r\n    margin-top: $metric-base;\r\n    font-size: 36px;\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_bold;\r\n    line-height: $line_height_m;\r\n    width: 70%;\r\n\r\n    @include desktop {\r\n      @include h1;\r\n      padding-left: 4%;\r\n      margin-top: $metric-xl;\r\n    }\r\n  }\r\n  &__benefits-description {\r\n    @include paragraph;\r\n    margin-top: $metric-base;\r\n    width: 100%;\r\n\r\n    @include desktop {\r\n      padding-left: 4%;\r\n      width: 80%;\r\n    }\r\n  }\r\n}\r\n\r\n.shop-zonifero {\r\n  &__title {\r\n    font-size: 36px;\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_bold;\r\n    line-height: $line_height_m;\r\n  }\r\n  &__description {\r\n    margin-top: $metric-base;\r\n    font-size: $font_s;\r\n    font-family: $secondary_font_family;\r\n    font-weight: $font_light;\r\n    line-height: $line_height_xs;\r\n    width: 100%;\r\n  }\r\n  &__image {\r\n    width: 106%;\r\n  }\r\n  &__btn {\r\n    @include button;\r\n    margin-top: $metric-l;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: $metric-s $metric-l $metric-s $metric-l;\r\n  }\r\n}\r\n","$metric-xxl: 120px;\r\n$metric-xl: 90px;\r\n$metric-l: 60px;\r\n$metric-m: 40px;\r\n$metric-base: 30px;\r\n$metric-s: 20px;\r\n$metric-xs: 10px;\r\n",".section-faq {\r\n  margin-top: 90px;\r\n  width: 100vw;\r\n  max-height: 100% !important;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n\r\n  @include desktop {\r\n    display: flex;\r\n    gap: $metric-l;\r\n    align-items: start;\r\n    padding-left: 16%;\r\n    max-width: 1500px;\r\n  }\r\n  &__title {\r\n    width: 70%;\r\n    font-size: 36px;\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_bold;\r\n    line-height: 36px;\r\n    @include desktop {\r\n      @include big-headline;\r\n      width: 40%;\r\n    }\r\n  }\r\n  &__highlight_question {\r\n    margin-top: 60px;\r\n    font-size: $font_s;\r\n    font-family: $primary_font_family;\r\n    font-weight: $font_light;\r\n    line-height: $line_height_xs;\r\n    @include desktop {\r\n      margin-top: 0;\r\n    }\r\n  }\r\n  &__answer {\r\n    margin-top: 20px;\r\n    font-size: $font_s;\r\n    font-family: $secondary_font_family;\r\n    font-weight: $font_light;\r\n    line-height: $line_height_xs;\r\n  }\r\n  &__ask-more-btn {\r\n    padding-left: 4px;\r\n    color: black;\r\n    text-decoration: underline;\r\n  }\r\n  &__questions-list {\r\n    margin-top: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    list-style-type: none;\r\n    @include desktop {\r\n      margin-top: 0;\r\n      width: 50%;\r\n    }\r\n  }\r\n  &__question {\r\n    font-size: 36px;\r\n    font-size: $font_s;\r\n    font-family: $secondary_font_family;\r\n    font-weight: $font_regular;\r\n    line-height: $line_height_xs;\r\n  }\r\n}\r\n",".section-contact {\r\n  margin-top: $metric-xl;\r\n  width: 100vw;\r\n  padding-bottom: $metric-xl;\r\n\r\n  @include desktop {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    max-width: 1500px;\r\n    padding-left: 16%;\r\n  }\r\n\r\n  &__change-forms-btns-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    padding-left: $metric-s;\r\n    padding-right: $metric-s;\r\n    @include desktop {\r\n      margin-top: $metric-xxl;\r\n      max-width: 300px;\r\n      align-self: center;\r\n    }\r\n  }\r\n  &__contact-form-btn {\r\n    @include tab;\r\n    &--active {\r\n      @include tab--active;\r\n    }\r\n  }\r\n  &__form {\r\n    padding-left: $metric-s;\r\n    padding-right: $metric-s;\r\n    margin-top: $metric-l;\r\n    display: flex;\r\n    flex-direction: column;\r\n    @include desktop {\r\n      width: 100%;\r\n      align-items: center;\r\n    }\r\n  }\r\n  &__zonifero-head {\r\n    @include h4;\r\n    margin-top: $metric-l;\r\n    padding-bottom: $metric-m;\r\n    padding-left: $metric-s;\r\n  }\r\n  &__zonifero-products-slider-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: $metric-l $metric-s 0 $metric-s;\r\n    background-color: $background_color;\r\n  }\r\n}\r\n\r\n.form {\r\n  &__label {\r\n    @include label;\r\n  }\r\n  &__input-text {\r\n    @include input;\r\n  }\r\n  &__message-container {\r\n    @include desktop {\r\n      width: 100%;\r\n    }\r\n  }\r\n  &__submit-btn {\r\n    position: relative;\r\n    margin-top: $metric-m;\r\n    @include button;\r\n  }\r\n}\r\n\r\n#message {\r\n  @include desktop {\r\n    width: 100%;\r\n    height: 50px;\r\n  }\r\n}\r\n\r\n.zonifero-product-article {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  &__small-headline {\r\n    align-self: start;\r\n    @include h2;\r\n  }\r\n\r\n  &__big-headline {\r\n    align-self: start;\r\n    color: $primary_color;\r\n    @include h1;\r\n  }\r\n  &__description {\r\n    padding-top: $metric-base;\r\n    @include paragraph;\r\n  }\r\n  &__image {\r\n    padding-top: $metric-base;\r\n  }\r\n}\r\n","@import 'overview-section';\r\n@import 'features-section';\r\n@import 'specs-section';\r\n@import 'faq-section';\r\n@import 'contact-section';\r\n\r\n.section {\r\n  scroll-margin-top: 100px;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n  .section {\r\n    scroll-margin-top: 200px;\r\n  }\r\n}\r\n","@import 'sections';\r\n\r\n.main {\r\n  width: 100vw;\r\n  height: 100%;\r\n  background: #fff;\r\n}\r\n",".footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding-top: 90px;\r\n  padding-bottom: 10px;\r\n  min-height: 100vh;\r\n  background-color: $primary_color;\r\n  scroll-margin-top: 100px;\r\n  color: $white;\r\n\r\n  &__all-lists-wrapper {\r\n    @include tablet {\r\n      display: flex;\r\n      justify-content: space-evenly;\r\n      width: 80%;\r\n    }\r\n  }\r\n\r\n  &__list-container {\r\n    height: 100%;\r\n    padding-left: 20px;\r\n  }\r\n\r\n  &__list {\r\n    list-style-type: none;\r\n    padding-top: $metric-m;\r\n    &-headline {\r\n      padding-top: $metric-l;\r\n      font-size: $font_s;\r\n      font-family: $secondary_font_family;\r\n      font-weight: $font_bold;\r\n      &::after {\r\n        content: ':';\r\n      }\r\n    }\r\n    &-item {\r\n      padding-top: 2px;\r\n      font-size: $font_s;\r\n      font-family: $secondary_font_family;\r\n      font-weight: $font_light;\r\n\r\n      &:hover {\r\n        color: rgba(255, 255, 255, 0.8);\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n  &__hr {\r\n    margin-top: $metric-l;\r\n    width: 100vw;\r\n    opacity: 0.2;\r\n  }\r\n  &__logo-ex-container {\r\n    display: flex;\r\n    align-items: end;\r\n    justify-content: end;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-right: 10px;\r\n    padding-top: 30px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _features_scrollToSelectedSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/scrollToSelectedSection */ "./src/scripts/features/scrollToSelectedSection.js");
/* harmony import */ var _features_scrollToSelectedSection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_features_scrollToSelectedSection__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_openMobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/openMobileMenu */ "./src/scripts/features/openMobileMenu.js");
/* harmony import */ var _features_openMobileMenu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_features_openMobileMenu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_selectPageLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/selectPageLang */ "./src/scripts/features/selectPageLang.js");
/* harmony import */ var _features_selectPageLang__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_features_selectPageLang__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _features_fetchAccordionItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/fetchAccordionItems */ "./src/scripts/features/fetchAccordionItems.js");
/* harmony import */ var _features_toggleAccordionActiveField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/toggleAccordionActiveField */ "./src/scripts/features/toggleAccordionActiveField.js");
/* harmony import */ var _features_toggleAccordionActiveField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_features_toggleAccordionActiveField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _features_fetchSliderItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/fetchSliderItems */ "./src/scripts/features/fetchSliderItems.js");
/* harmony import */ var _features_formValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/formValidation */ "./src/scripts/features/formValidation.js");
/* harmony import */ var _features_formValidation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_features_formValidation__WEBPACK_IMPORTED_MODULE_7__);


// features







})();

/******/ })()
;
//# sourceMappingURL=bundle.632d34d5f0127f7dc896.js.map