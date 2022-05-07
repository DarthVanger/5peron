import logo from './train-station-icon.jpg';
//import srcVideo from '../public/video/5peron-truck-unloading.mp4';
import './App.css';
import MenuSvg from './MenuSvg';
import trainColorful from './train-colorful.jpg';
import trainWide from './img/train-wide.jpeg';
import ukraineMapDots from './ukraine-map-blue.jpg';
import team from './team.jpg';
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

      <h2>Volunteer organization</h2>
      <article>
        Volunteers based in Lviv are helping refugees coming from the East of Ukraine.

        <img src={ukraineMapDots} />
      </article>

      <h2>Activities</h2>
      <h3>Unloading Humanitarian Aid</h3>
      <article>
        <video controls>
         <source src={process.env.PUBLIC_URL + '/video/5peron-truck-unloading.mp4'} />
        </video>
      </article>
      <h2>Team</h2>
      <article>
        <img src={team} alt="Team picture" />
      </article>

      <h2>News</h2>
      <article>
        <FacebookProvider appId="1438362366615245">
          <Page href="https://www.facebook.com/5peronUA" tabs="timeline" />
        </FacebookProvider> 
      </article>
    </div>
  );
}

export default App;
