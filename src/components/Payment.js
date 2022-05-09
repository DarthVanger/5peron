import { useEffect } from 'react';
import SquarePayment from './SquarePayment';

export const Payment = () => {
  useEffect(() => {
     async function initializeCard(payments) {
       const card = await payments.card();
       await card.attach('#card-container'); 
       return card; 
     }
  });
  return (
    <SquarePayment />
  );
};
