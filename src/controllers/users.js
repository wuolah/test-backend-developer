const AWS = require( "aws-sdk" );
const { v4 } = require( "uuid" );
const bcrypt = require( 'bcrypt' );

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const getUserByEmail = async ( req, res ) => {
    const { email } = req.params;
    const params = {
        TableName: USERS_TABLE,
        IndexName: 'emailIndex',
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
            ':email': email
        }
    };

    try {
        const { Items } = await dynamoDbClient.query( params ).promise();
        if ( Items.length ) {
            const { userId, name, email } = Items[0];
            res.json( { success: true, user: { userId, name, email } } );
        } else {
            res
                .status( 404 )
                .json( { success: false, error: 'Could not find user with provided "email"' } );
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( { success: false, error: "Could not retreive user" } );
    }
};

const createUser = async ( req, res ) => {
    const { email, password, name } = req.body;
    const createdAt = new Date().toISOString();
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