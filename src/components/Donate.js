import { useEffect, useState, useRef } from 'react';
import ukraineMapDots from '../ukraine-map-blue.jpg';
import './Donate.css';
import donateImg from '../img/donate.png';

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
          src: donateImg,
          alt:'Donate with PayPal button',
          title:'PayPal - The safer, easier way to pay online!',
          }
        }).render('#donate-button');

    }, 2000);
  }, []);

  return (
    <div className="donate">
      <div className="paypal center-absolute">
        <div id="donate-button-container">
          <div id="donate-button">
          </div>
        </div>
      </div>
      <div className="button-container center-absolute">
        <button type="button">
          Donate PayPal or Credit Card
        </button>
      </div>
    </div>
  );
};
