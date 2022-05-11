import './SocialLinks.css';
import fbIcon from './fb-icon.png';

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
  </div>
);
