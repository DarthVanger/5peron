//import { ReactComponent as Warehouse } from './img/warehouse.svg';
//import delivery from './img/delivery.svg';
import { IconCard } from './IconCard';
import './IconsArticle.css';

export const IconsArticle = () => (
  <article className="icons-article">
    <h2>Activities</h2>
    <div className="icons">
      <IconCard icon='armed-forces.svg'>
        Help for Armed Forces
      </IconCard>
      <IconCard icon='warehouse.svg'>
        Help in Warehouses 
      </IconCard>
      <IconCard icon='delivery.svg' >
        Help with Delivery
      </IconCard>
      <IconCard icon='housing.svg'>
        Help with Housing
      </IconCard>
      <IconCard icon='documents.svg'>
        Help with Documents
      </IconCard>
      <IconCard icon='humanitarian-aid.svg'>
        Humanitarian Aid
      </IconCard>
    </div>
  </article>
);
