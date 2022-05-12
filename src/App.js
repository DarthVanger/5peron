import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
//import srcVideo from '../public/video/5peron-truck-unloading.mp4';
import './App.css';
import trainColorful from './train-colorful.jpg';
import trainWide from './img/train-wide.jpeg';
import team from './team.jpg';
import teamZhenia from './components/articles/team-zhenia.jpeg';
import building from './img/building-blue-yellow.jpeg';
import { Donate } from './components/Donate';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';
import { Navbar } from './components/Navbar/Navbar';
import { AboutArticle } from './components/articles/AboutArticle';
import { CommunityArticle } from './components/articles/CommunityArticle';
import { HostingRefugees } from './components/articles/HostingRefugees';
import { Infographics } from './components/articles/Infographics/Infographics';
import { IconsArticle } from './components/articles/Icons/IconsArticle';

ReactGA.initialize('G-CSRZL2T03W');

const tagManagerArgs = {
  gtmId: 'GTM-M3BCRSN',
};

TagManager.initialize(tagManagerArgs)

function App() {
  const description = 'Platform Five Volunteer Organizaton. We are helping refugees in Lviv, Ukraine';

  useEffect(() => {
    //window.dataLayer = window.dataLayer || [];
    //function gtag(){window.dataLayer.push(arguments);}
    //gtag('js', new Date());

    //gtag('config', 'G-CSRZL2T03W');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Helmet>
        <title>Platform Five Volunteer Org</title>
        <meta name="description" content={description} />
        <head>
        </head>
      </Helmet>
      <div className="App">
        <header>
          <Navbar />
        </header>
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
    </>
  );
}

export default App;
