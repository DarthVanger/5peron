import './CommunityArticle.css';
import communityImg from './join-community.png';
import fbIcon from './fb-icon.png';

export const CommunityArticle = () => (
  <article>
    <h2>Community</h2>
    <img src={communityImg} alt="Three people sitting together" />
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
  </article>
) ;
