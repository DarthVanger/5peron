import { Link } from "react-router-dom";
import trainColorful from '../train-colorful.jpg';
import trainWide from '../img/train-wide.jpeg';
import team from '../team.jpg';
import teamZhenia from '../components/articles/team-zhenia.jpeg';
import building from '../img/building-blue-yellow.jpeg';
import { Donate } from '../components/Donate';
import { AboutArticle } from '../components/articles/AboutArticle';
import { CommunityArticle } from '../components/articles/CommunityArticle';
import { HostingRefugees } from '../components/articles/HostingRefugees';
import { Infographics } from '../components/articles/Infographics/Infographics';
import { IconsArticle } from '../components/articles/Icons/IconsArticle';

export const HomePage = () => (
  <div className="home-page">
    <img
      src={trainColorful}
      alt="5peron picture"
      className="peron-image"
    />

    <img
      src={trainWide}
      alt="5peron picture"
      className="peron-image-wide"
    />

    <section className="about">
      <AboutArticle />

      <IconsArticle />

      <Infographics />

      <HostingRefugees />

      <article id="team">
        <h2>Team</h2>
        <img src={team} alt="Team picture" />
      </article>

      <article>
        <h2>Team</h2>
        <img src={teamZhenia} alt="Team picture: Zhenia" />
      </article>

      <CommunityArticle />

      <article id="donate">
        <h2>Donate</h2>
        <Donate />
      </article>
    </section>
  </div>
);
