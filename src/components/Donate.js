import { useEffect, useState, useRef } from 'react';
import ukraineMapDots from '../ukraine-map-blue.jpg';
import './Donate.css';

export const Donate = () => {

  const rendered = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
    script.async = true;
    document.body.appendChild(script);

    setTimeout(() => { 
      if (rendered.current) return;
      setIsLoading(false);
      rendered.current = true;

      window.PayPal.Donation.Button({
        env:'production',
        hosted_button_id:'JLCJ8UU8Z6L5Y',
        image: {
          src:'https://pics.paypal.com/00/s/NmU2ZmQxOWItYzFiNi00ZTliLTlhYTItMWUzOGQ4OGE1Nzli/file.PNG',
          alt:'Donate with PayPal button',
          title:'PayPal - The safer, easier way to pay online!',
          }
        }).render('#donate-button');

    }, 2000);
  }, []);

  return (
    <>
      <div id="donate-button-container">
        <div id="donate-button">
        </div>
      </div>
    </>
  );
};
