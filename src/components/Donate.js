import { useEffect, useState, useRef } from 'react';
import './Donate.css';
import donateImg from '../img/donate-colorful.jpeg';

import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'

import { GooglePay } from '../GooglePay'

export const Donate = () => {
  const isDesktop = useMediaQuery('only screen and (min-width: 1000px)');

  console.log('isDesktop: ', isDesktop);
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
    <>
      <div className="donate">
        <div className="image-placeholder">
          <img src={donateImg} alt="hearts and hands drawing" />
        </div>
        <div className="paypal center-absolute">
          <div id="donate-button-container">
            <div id="donate-button">
            </div>
          </div>
        </div>
        <div className="button-container center-absolute">
          <button type="button">
            Donate with PayPal
          </button>
        </div>
      </div>
      <div className="google-pay-container">
        <GooglePay className="google-pay" />
      </div>
    </>
  );
};
