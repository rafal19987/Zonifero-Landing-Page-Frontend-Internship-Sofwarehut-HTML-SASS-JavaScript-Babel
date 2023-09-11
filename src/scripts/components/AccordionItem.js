import arrowIcon from '../../assets/arrow_down_icon.svg';

export const AccordionItem = (title, details) => {
  return `<li class="accordion__item">
      <h3 class="accordion__item-title">${title}</h3>
      <img src="${arrowIcon}" alt="arrow down icon" class="accordion__item-arrow" />
      <p class="accordion__item-details">${details}</p>
    </li>`;
};
