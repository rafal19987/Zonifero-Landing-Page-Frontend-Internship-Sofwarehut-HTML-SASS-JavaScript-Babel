import { sliderArticles } from '../utils/constants/sliderArticles';

const slider = document.querySelector('.section-overview__slider-wrapper');

const fetchAllArticles = () => {
  sliderArticles.map((article) => {
    const articleTag = document.createElement('article');
    articleTag.setAttribute('class', 'slider__article');

    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', './desk_icon.png');
    imgTag.setAttribute('alt', 'article desk icon');
    imgTag.setAttribute('class', 'slider__article-image');

    const h3Tag = document.createElement('h3');
    h3Tag.setAttribute('class', 'slider__article-headline');
    h3Tag.innerText = article.headline;

    const pTag = document.createElement('p');
    pTag.setAttribute('class', 'slider__article-description');
    pTag.innerText = article.description;

    articleTag.appendChild(imgTag);
    articleTag.appendChild(h3Tag);
    articleTag.appendChild(pTag);

    slider.appendChild(articleTag);
  });
};

fetchAllArticles();
