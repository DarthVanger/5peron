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

  return (
    <>
      <div className="donate">
        <img src={donateImg} alt="hearts and hands drawing" />
      </div>
      <div className="google-pay-container">
        <GooglePay className="google-pay" />
      </div>
    </>
  );
};
