import defaultInstance from './defaultInstance';
import jsonInstance from './jsonInstance';

const authInstance = defaultInstance.extend( {
  hooks: {
    afterResponse: [
      async ( _request, _options, response ) => {
        if ( response.status === 401 ) {
          await jsonInstance( 'auth/refresh', { method: 'get' } );
          return;
        }
        return response;
      }
    ]
  }
} );

export default authInstance;