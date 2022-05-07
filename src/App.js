import logo from './logo.svg';
//import srcVideo from '../public/video/5peron-truck-unloading.mp4';
import './App.css';
import MenuSvg from './MenuSvg';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div>
            <a>L</a>
            <div className="nav-right">
              <button aria-label="Toggle menu button" className="menu-button">
                <MenuSvg />
              </button>
            </div>

          </div>
        </nav>
      </header>
      <img
        src={process.env.PUBLIC_URL + '/img/peron-image.jpg'}
        alt="5peron picture"
        className="peron-image" />
      <h1>Peron Five </h1>
      <video width="320" height="240" controls>
         <source src={process.env.PUBLIC_URL + '/video/5peron-truck-unloading.mp4'} />
      </video>
    </div>
  );
}

export default App;
