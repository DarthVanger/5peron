import logo from './train-station-icon.jpg';
//import srcVideo from '../public/video/5peron-truck-unloading.mp4';
import './App.css';
import MenuSvg from './MenuSvg';
import trainColorful from './train-colorful.jpg';
import trainWide from './img/train-wide.jpeg';
import ukraineMapDots from './ukraine-map-blue.jpg';
import team from './team.jpg';
import building from './img/building-blue-yellow.jpeg';
import { FacebookProvider, Page } from 'react-facebook';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="brand">
            Platform Five
          </div>
          <div className="nav-right">
            <button aria-label="Toggle menu button" className="menu-button">
              <MenuSvg />
            </button>
          </div>
        </nav>
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
        <article>
          <h2>Volunteer organization</h2>
          <p>Volunteers based in Lviv are helping refugees coming from the East of Ukraine.</p>

          <img src={ukraineMapDots} />
        </article>

        <article>
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

        <article>
          <h2>Unloading Humanitarian Aid</h2>
          <video controls>
           <source src={process.env.PUBLIC_URL + '/video/5peron-truck-unloading.mp4'} />
          </video>
        </article>

        <article>
          <h2>Team</h2>
          <img src={team} alt="Team picture" />
        </article>
      </section>

      {/*
        <article style={{textAlign: "center"}}>
          <h2>News</h2>
          <FacebookProvider appId="1438362366615245" >
            <Page href="https://www.facebook.com/5peronUA" tabs="timeline" smallHeader={true} hideCTA={true} hideCover={true} showFacepile={false} />
          </FacebookProvider> 
        </article>
    */}
    </div>
  );
}

export default App;
