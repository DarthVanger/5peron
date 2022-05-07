import logo from './train-station-icon.jpg';
//import srcVideo from '../public/video/5peron-truck-unloading.mp4';
import './App.css';
import MenuSvg from './MenuSvg';
import trainColorful from './train-colorful.jpg';
import ukraineMapDots from './ukraine-map-blue.jpg';

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
        className="peron-image" />

      <h2>Volunteer organization</h2>
      <article>
        Volunteers based in Lviv are helping refugees coming from the East of Ukraine.

        <img src={ukraineMapDots} />
      </article>

      <h2>Activities</h2>
      <h3>Unloading Humanitarian Aid</h3>
      <video controls>
         <source src={process.env.PUBLIC_URL + '/video/5peron-truck-unloading.mp4'} />
      </video>
    </div>
  );
}

export default App;
