let isSelectPageLangOpen = false;
const selectLanguageBtn = document.querySelector('#selectLanguageBtn');
const selectLanguageBar = document.querySelector('.select-lang-bar');
selectLanguageBtn.addEventListener('click', () => handleOpenSelectPageLang());

const handleOpenSelectPageLang = () => {
  isSelectPageLangOpen = !isSelectPageLangOpen;
  isSelectPageLangOpen ? showSelectLangBar() : closeSelectLangBar();
};

const showSelectLangBar = () => {
  selectLanguageBar.classList.add('select-lang-bar--open');
};

const closeSelectLangBar = () => {
  selectLanguageBar.classList.remove('select-lang-bar--open');
};
