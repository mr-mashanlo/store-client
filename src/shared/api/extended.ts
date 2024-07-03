import original from './original';

const extended = original.extend( {
  hooks: {
    afterResponse: [
      async ( _request, _options, response ) => {
        if ( response.status === 401 ) {
          await original( 'auth/refresh', { method: 'get' } );
          return;
        }
        return response;
      }
    ]
  }
} );

export default extended;