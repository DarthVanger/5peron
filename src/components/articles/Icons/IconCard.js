export const IconCard = ({ icon, children, ...props }) => (
  <figure className="icon-card" {...props}>
    <img src={process.env.PUBLIC_URL + `img/icons/${icon}`} />
    <figcaption>
      {children}
    </figcaption>
  </figure>
);
