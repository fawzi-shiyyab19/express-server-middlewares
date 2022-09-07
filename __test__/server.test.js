'use strict';

const supertest = require( 'supertest' );
const server = require( '../server' );
const request = supertest( server.app );

describe( 'API server', () => {
    it( 'should respond with 404 on an invalid route', async () => {
        const response = await request.get( '/foo' );
        expect( response.status ).toBe( 404 );
    } );
  
  
} );