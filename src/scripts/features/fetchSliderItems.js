import { SliderItem } from '../components/SilderItem';
import { sliderArticles } from '../utils/constants/sliderArticles';

const slider = document.querySelector('.section-overview__slider-wrapper');

const fetchSliderItems = () => {
  const HTMLfragment = [];
  sliderArticles.map(({ headline, description }) => {
    const newArticle = SliderItem(headline, description);
    HTMLfragment.push(newArticle);
  });

  const HTMLfragmentWithoutSeparatingComma = HTMLfragment.join(' ');
  slider.innerHTML = HTMLfragmentWithoutSeparatingComma;
};

fetchSliderItems();
