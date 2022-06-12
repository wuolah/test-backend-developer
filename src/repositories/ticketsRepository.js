const AWS = require( "aws-sdk" );
const { v4 } = require( "uuid" );
const handleError = require( "../utils/handleError" );

const TICKETS_TABLE = process.env.TICKETS_TABLE;
const TRIGGER_FILE = 'ticketsRepository';
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const getAll = async () => {
    const params = {
        TableName: TICKETS_TABLE,
    };

    try {
        const { Items } = await dynamoDbClient.scan( params ).promise();

        return Items;
    } catch ( error ) {
        handleError( TRIGGER_FILE, 'getAll', error );
        return false;
    }
};

const create = async ( userId ) => {
    const createdAt = new Date().toISOString();
    const ticketId = v4(); // Generate a unique ticket id

    const newTicket = {
        ticketId,
        contestId: null,
        userId,
        available: true,
        createdAt,
    };

    const params = {
        TableName: TICKETS_TABLE,
        Item: newTicket,
    };

    try {
        await dynamoDbClient.put( params ).promise();
        return newTicket;
    } catch ( error ) {
        handleError( TRIGGER_FILE, 'create', error );
        return false;
    }
};

module.exports = {
    getAll,
    create,
};