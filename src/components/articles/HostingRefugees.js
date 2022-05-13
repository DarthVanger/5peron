import './HostingRefugees.css';
import imgSrc from './orphan-kid.jpeg';

export const HostingRefugees = () => (
  <article id="hosting-refugees">
    <h2>Hosted 550 adult and child refugees</h2>
    <p>Platform Five has provided temporary housing for 550 refugees, incuding 230 children</p>
    <figure>
      <img src={imgSrc} />
    </figure>
  </article>
);
