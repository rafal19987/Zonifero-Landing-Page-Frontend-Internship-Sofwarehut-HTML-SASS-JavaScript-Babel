import { AccordionItem } from '../components/AccordionItem';
import { accordionContent } from '../utils/constants/accordionContent';

const accordion = document.querySelector('.first-segment__accordion');

const fetchAccordionItems = () => {
  const HTMLfragment = [];
  accordionContent.map(({ title, details }) => {
    const newContent = AccordionItem(title, details);
    HTMLfragment.push(newContent);
  });

  const HTMLfragmentWithoutSeparatingComma = HTMLfragment.join(' ');

  accordion.innerHTML = HTMLfragmentWithoutSeparatingComma;
};

fetchAccordionItems();
