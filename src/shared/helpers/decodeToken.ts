import { jwtDecode } from 'jwt-decode';

const decodeToken = ( token: string ) => {
  const decoded = jwtDecode( token );
  console.log( decoded );
  return decoded;
};

export default decodeToken;