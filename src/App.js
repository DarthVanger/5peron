import logo from './train-station-icon.jpg';
//import srcVideo from '../public/video/5peron-truck-unloading.mp4';
import './App.css';
import MenuSvg from './MenuSvg';
import trainColorful from './train-colorful.jpg';

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
      <h1>Platform 5</h1>
      <video width="320" height="240" controls>
         <source src={process.env.PUBLIC_URL + '/video/5peron-truck-unloading.mp4'} />
      </video>
    </div>
  );
}

export default App;
