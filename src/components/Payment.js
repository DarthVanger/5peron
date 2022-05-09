import { useEffect } from 'react';
import SquarePayment from './SquarePayment';

const square = {
  appId: 'sandbox-sq0idb-LP1vADLnDtiJeOBuv_FfJw',
  secretToken: 'EAAAEIaX4SQfLcsDpXPEdDePGYQ95StkABmo4veu3CR47mC1No1pCxtX32Jw_HWg',
  locationId: 'LHHDJ69G41XTR',
};

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
