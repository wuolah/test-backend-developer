const AWS = require( "aws-sdk" );
const { v4 } = require( "uuid" );
const bcrypt = require( 'bcrypt' );

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const getUserByEmail = async ( email ) => {
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

            return { userId, name, email };
        } else {
            return false;
        }
    } catch ( error ) {
        console.log( { trigger: 'usersRepository', error } );
        return false;
    }
};

module.exports = {
    getUserByEmail
};