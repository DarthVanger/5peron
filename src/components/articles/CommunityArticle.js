import './CommunityArticle.css';
import communityImg from './join-community.png';
import { SocialLinks } from  '../SocialLinks';

export const CommunityArticle = () => (
  <article id="community">
    <h2>Community</h2>
    <img src={communityImg} alt="Three people sitting together" />
      <SocialLinks />
  </article>
) ;
