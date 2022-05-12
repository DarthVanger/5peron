import './HelpingBabushkaArticle.css';

import helpingBabushkaVideo from './helping-babushka.mp4';

export const HelpingBabushkaArticle = () => (
  <article id="helping-babushka">
    <h2>Helping Babushka</h2>
    <div className="video video-vertical">
      <video controls>
       <source src={helpingBabushkaVideo} type="video/mp4" />
      </video>
    </div>
  </article>
);
