import { sliderArticles } from '../consts/sliderArticles';

const slider = document.querySelector('.section-overview__slider-wrapper');

const fetchAllArticles = () => {
  sliderArticles.map((article) => {
    const art = document.createElement('article');
    art.setAttribute('class', 'slider__article');

    const img = document.createElement('img');
    img.setAttribute('src', 'desk_icon.png');
    img.setAttribute('alt', 'article desk icon');
    img.setAttribute('class', 'slider__article-image');

    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'slider__article-headline');
    h3.innerText = article.headline;

    const p = document.createElement('p');
    p.setAttribute('class', 'slider__article-description');
    p.innerText = article.description;

    art.appendChild(img);
    art.appendChild(h3);
    art.appendChild(p);

    slider.appendChild(art);
  });
};

fetchAllArticles();
