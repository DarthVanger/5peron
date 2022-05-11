import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
//import srcVideo from '../public/video/5peron-truck-unloading.mp4';
import './App.css';
import trainColorful from './train-colorful.jpg';
import trainWide from './img/train-wide.jpeg';
import team from './team.jpg';
import building from './img/building-blue-yellow.jpeg';
import { Donate } from './components/Donate';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';
import { Navbar } from './components/Navbar/Navbar';
import { AboutArticle } from './components/articles/AboutArticle';
import { CommunityArticle } from './components/articles/CommunityArticle';

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

          <article id="dear-volunteers">
            <h2>Volunteers of the 5th platform!</h2>
            <figure>
              <img src={building} alt="destroyed building in ukraine" />
              <figcaption>
                pic source: <a
                  href="https://www.dailysabah.com/arts/artists-use-nfts-to-support-ukraine-against-russian-invasion/news"
                  target="_blank"
                  rel="noref"
                >
                  dalisabah.com/arts
                </a>
              </figcaption>
            </figure>

            <p>Our <b>Life</b>, just as the life of any Ukrainian, <b>has changed</b> on February the 24th <b>due to</b> the <em>full-scale <b>invasion</b></em> of Russia into Ukraine.</p>
          </article>

          <article id="unloading-humanitarian-aid">
            <h2>Unloading Humanitarian Aid</h2>
            <video controls>
             <source src={process.env.PUBLIC_URL + '/video/5peron-truck-unloading.mp4'} />
            </video>
          </article>

          <article id="team">
            <h2>Team</h2>
            <img src={team} alt="Team picture" />
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
