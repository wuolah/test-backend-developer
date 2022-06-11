const express = require( "express" );
const serverless = require( "serverless-http" );
const { getAllContests, getContestById, createContest } = require( "./controllers/contests" );
const { getUserByEmail, createUser } = require( "./controllers/users" );

const app = express();


app.use( express.json() );

// Users routes
app.get( "/users/:email", getUserByEmail );
app.post( "/users", createUser );

// Contests routes
app.get( "/contests", getAllContests );
app.get( '/contests/:id', getContestById );
app.post( '/contests', createContest );

// Non-existent routes
app.use( ( req, res, next ) => {
  return res.status( 404 ).json( {
    success: false,
    error: "Not Found",
  } );
} );

module.exports.handler = serverless( app );