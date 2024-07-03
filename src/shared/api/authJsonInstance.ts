import jsonInstance from './jsonInstance';

const authJsonInstance = jsonInstance.extend( {
  hooks: {
    beforeRequest: [
      request => {
        request.headers.set( 'Content-Type', 'application/json' );
      }
    ]
  }
} );

export default authJsonInstance;