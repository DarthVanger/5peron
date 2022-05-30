import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from './Map';

const apiKey = 'AIzaSyA2UDFg1D25cvlIZICfzo9peR4cfoxo_Lg';

const render = (status) => {
  return <h1>{status}</h1>;
};

export const GoogleWrapper  = ({children}) => (
  <Wrapper apiKey={apiKey} render={render}>
    <Map />
  </Wrapper>
);
