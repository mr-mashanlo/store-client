import defaultInstance from './defaultInstance';

const jsonInstance = defaultInstance.extend( {
  hooks: {
    beforeRequest: [
      request => {
        request.headers.set( 'Content-Type', 'application/json' );
      }
    ]
  }
} );

export default jsonInstance;