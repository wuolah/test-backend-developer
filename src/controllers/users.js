const AWS = require( "aws-sdk" );
const { v4 } = require( "uuid" );
const bcrypt = require( 'bcrypt' );

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const getUserByEmail = async ( req, res ) => {
    res
        .status( 404 )
        .json( { success: false, error: 'Work in progress...' } );
};

const createUser = async ( req, res ) => {
    const { email, password, name } = req.body;
    const createdAt = new Date();
    const userId = v4(); // Generate a unique user id

    //TODO: Validate unique email

    if ( !email.trim() || !password.trim() || !name.trim() ) {
        res.status( 400 ).json( { success: false, error: 'Some fields missing, check your info and sign up again' } );
    }

    const newUser = {
        userId,
        email,
        hash: bcrypt.hashSync( password, 8 ), // Added simple crypt to protect password information
        name,
        tickets: 0,
        lastIssuedTicket: null,
        createdAt,
    }

    const params = {
        TableName: USERS_TABLE,
        Item: newUser,
    };

    try {
        await dynamoDbClient.put( params ).promise();
        res.json(
            {
                success: true,
                user: {
                    userId,
                    email,
                    name,
                    tickets: newUser.tickets,
                    createdAt
                }
            } );
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( {
            success: false,
            error: "Could not create user"
        } );
    }
};


module.exports = {
    getUserByEmail,
    createUser
}