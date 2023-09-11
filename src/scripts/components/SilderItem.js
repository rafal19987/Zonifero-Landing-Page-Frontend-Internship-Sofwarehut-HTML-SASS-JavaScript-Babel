import deskIcon from '../../assets/desk_icon.png';

export const SliderItem = (title, description) => {
  return `<article class="slider__article">
    <img src="${deskIcon}" alt="article desk icon" class="slider__article-image" />
    <h3 class="slider__article-headline">${title}</h3>
    <p class="slider__article-description">${description}</p>
  </article>`;
};
