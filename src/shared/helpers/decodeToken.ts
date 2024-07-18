import { jwtDecode } from 'jwt-decode';

const decodeToken = ( token: string ) => {
  const decoded = jwtDecode( token );
  return decoded;
};

export default decodeToken;