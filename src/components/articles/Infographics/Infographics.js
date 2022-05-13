import './Infographics.css';
import sandwich from './sandwich.jpg';
import team from './team.png';
import house from './house.png';

export const Infographics = () => (
  <article id="infographics">
    <h2>Accomplishments</h2>
    <div className="icons">
      <figure className="sandwich">
        <img src={sandwich} className="sandwich" />
        <figcaption>
          Gave away 200,000 sandwiches
        </figcaption>
      </figure>
      <figure className="team">
        <img src={team} className="team" />
        <figcaption>
          Team of 200 volunteers
        </figcaption>
      </figure>
      <figure className="house">
        <img src={house} />
        <figcaption>
          550 people received shelter
        </figcaption>
      </figure>
    </div>
  </article>
);
