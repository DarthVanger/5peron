import './SocialLinks.css';
import fbIcon from './fb-icon.png';
import instaIcon from './insta-icon.png';

export const SocialLinks = () => (
  <div className="social-links">
    <a
      className="fb-link"
      href="https://www.facebook.com/5peronUA"
      target="_blank"
      rel="noreferrer"
    >
      <img src={fbIcon} alt="Facebook logo icon" />
      @5peronUA
    </a>
    <a
      className="fb-link"
      href="https://www.instagram.com/5peronua"
      target="_blank"
      rel="noreferrer"
    >
      <img src={instaIcon} alt="Instagram logo icon" />
      @5peronUA
    </a>
  </div>
);
